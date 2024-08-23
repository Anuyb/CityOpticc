import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        name: { type: String, required: true },
        slug: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    shippingAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      district: { type: String, required: true },
      phoneNumber: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
    paymentResult: { id: String, status: String, email_address: String },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, required: true, default: false },
    isDelivered: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
)
const OrderModel = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default OrderModel

export type Order = {
    _id: string
    user?: { name: string }
    items: [OrderItem]
    shippingAddress: {
      fullName: string
      address: string
      district: string
      phoneNumber: string
    }
    paymentMethod: string
    paymentResult?: { id: string; status: string; email_address: string }
    itemsPrice: number
    shippingPrice: number
    totalPrice: number
    isPaid: boolean
    isDelivered: boolean
    paidAt?: string
    deliveredAt?: string
    createdAt: string
  }

export type OrderItem = {
      // size: ReactNode
    name: string
    slug: string
    qty: number
    qtyR: number
    qtyL: number
    image: string
    price: number
    color: string
    visionR: string
    visionL: string
}
export type ShippingAddress = {
    fullName: string
    address: string
    district: string
    phoneNumber: string
  }