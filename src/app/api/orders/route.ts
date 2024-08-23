import { auth } from "@/lib/auth"
import dbConnect from "@/lib/dbConnect"
import OrderModel, { OrderItem } from "@/lib/models/OrderModel"
import ProductModel from "@/lib/models/ProductModel"
import { round2 } from "@/lib/utils"

const calcPrices = (orderItems: OrderItem[]) => {
    const itemsPrice = round2(
      orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
    const shippingPrice = round2(itemsPrice > 50000 ? 0 : 5000)

    const totalPrice = round2(itemsPrice + shippingPrice)
    return { itemsPrice, shippingPrice, totalPrice }
  }
  
export const POST = auth(async (req: any) => {
    if (!req.auth) {
      return Response.json(
        { message: 'unauthorized' },
        {
          status: 401,
        }
      )
    }
    const { user } = req.auth
    try {
      const payload = await req.json()
      await dbConnect()
      const dbProductPrices = await ProductModel.find(
        {
          _id: { $in: payload.items.map((x: { _id: string }) => x._id) },
        },
        'price'
      )
      const dbOrderItems = payload.items.map((x: { _id: string }) => ({
        ...x,
        product: x._id,
        price: dbProductPrices.find((x) => x._id === x._id).price,
        _id: undefined,
      }))
  
      const { itemsPrice, shippingPrice, totalPrice } =
        calcPrices(dbOrderItems)
  
      const newOrder = new OrderModel({
        items: dbOrderItems,
        itemsPrice,
        shippingPrice,
        totalPrice,
        shippingAddress: payload.shippingAddress,
        paymentMethod: payload.paymentMethod,
        user: user._id,
      })
  
      const createdOrder = await newOrder.save()
      return Response.json(
        { message: 'Order has been created', order: createdOrder },
        {
          status: 201,
        }
      )
    } catch (err: any) {
      return Response.json(
        { message: err.message },
        {
          status: 500,
        }
      )
    }
})