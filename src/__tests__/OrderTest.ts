import { POST } from "@/lib/api/orders";
import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/lib/models/ProductModel";
import OrderModel from "@/lib/models/OrderModel";
import { round2 } from "@/lib/utils";

jest.mock("@/lib/dbConnect");
jest.mock("@/lib/models/ProductModel");
jest.mock("@/lib/models/OrderModel");
jest.mock("@/lib/utils", () => ({
  round2: jest.fn(),
}));

const mockAuth = jest.fn((handler: (req: any) => any) => async (req: any) => handler(req));
jest.mock("@/lib/auth", () => ({
  auth: mockAuth,
}));

interface Req extends Request {
  auth?: { user: { _id: string } };
  json: () => Promise<any>;
}

describe("POST function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 401 for unauthorized requests", async () => {
    const req: Req = {
      auth: null, // Simulate unauthorized request
      json: async () => ({}), // Mock implementation
    };

    const response = await POST(req);
    expect(response.status).toBe(401);
    const jsonResponse = await response.json();
    expect(jsonResponse.message).toBe("unauthorized");
  });

  it("should create an order successfully", async () => {
    const req: Req = {
      auth: { user: { _id: "user123" } },
      json: async () => ({
        items: [{ _id: "prod123", qty: 2 }],
        shippingAddress: { address: "123 Street" },
        paymentMethod: "card",
      }),
    };

    dbConnect.mockResolvedValueOnce(undefined);
    ProductModel.find = jest.fn().mockResolvedValue([{ _id: "prod123", price: 100 }]);
    (round2 as jest.Mock).mockImplementation((num: number) => num);
    OrderModel.prototype.save = jest.fn().mockResolvedValueOnce({
      _id: "order123",
      items: [{ _id: "prod123", qty: 2, price: 100 }],
      itemsPrice: 200,
      shippingPrice: 5000,
      totalPrice: 7000,
      shippingAddress: { address: "123 Street" },
      paymentMethod: "card",
      user: "user123",
    });

    const response = await POST(req);
    expect(response.status).toBe(201);
    const jsonResponse = await response.json();
    expect(jsonResponse.message).toBe("Order has been created");
    expect(jsonResponse.order).toHaveProperty("_id", "order123");
  });

  it("should handle errors and return 500", async () => {
    const req: Req = {
      auth: { user: { _id: "user123" } },
      json: async () => ({
        items: [{ _id: "prod123", qty: 2 }],
        shippingAddress: { address: "123 Street" },
        paymentMethod: "card",
      }),
    };

    dbConnect.mockImplementationOnce(() => {
      throw new Error("Database connection error");
    });

    const response = await POST(req);
    expect(response.status).toBe(500);
    const jsonResponse = await response.json();
    expect(jsonResponse.message).toBe("Database connection error");
  });
});
