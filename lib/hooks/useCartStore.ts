import { create } from 'zustand'
import { round2 } from '../utils'
import { OrderItem, ShippingAddress } from '../models/OrderModel'
import { persist } from 'zustand/middleware'

type Cart = {
  items: OrderItem[]
  itemPrice: number
  shippingPrice: number
  totalPrice: number
  paymentMethod: string
  shippingAddress: ShippingAddress
}

const initialState: Cart = {
  items: [],
  itemPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
  shippingAddress: {
    fullName: '',
    address: '',
    phoneNumber: '',
    district: '',
  },
  paymentMethod: ''
}

export const cartStore = create<Cart>()(
  persist(() => initialState, {
    name: 'cartStore',
  })
)
export default function useCartService() {
  const { items, itemPrice, shippingPrice, totalPrice, paymentMethod,
    shippingAddress, } = cartStore()

  const increase = (item: OrderItem) => {
    const exist = items.find((x) => x.slug === item.slug)
    const updatedCartItems = exist
      ? items.map((x) =>
        x.slug === item.slug ? { ...exist, qty: exist.qty + 1 } : x
      )
      : [...items, { ...item }]

    updateCart(updatedCartItems)
  }

  const decrease = (item: OrderItem) => {
    const exist = items.find((x) => x.slug === item.slug)
    if (!exist) return

    const updatedCartItems =
      exist.qty === 1
        ? items.filter((x: OrderItem) => x.slug !== item.slug)
        : items.map((x) =>
          x.slug === item.slug ? { ...exist, qty: exist.qty - 1 } : x
        )

    updateCart(updatedCartItems)
  }

  const increaseR = (item: OrderItem) => {
    const exist = items.find((x) => x.slug === item.slug)
    const updatedCartItems = exist
      ? items.map((x) =>
        x.slug === item.slug ? { ...exist, qtyR: exist.qtyR + 1, qty: exist.qty + 1 } : x
      )
      : [...items, { ...item }]

    updateCart(updatedCartItems)
  }

  const decreaseR = (item: OrderItem) => {
    const exist = items.find((x) => x.slug === item.slug)
    if (!exist) return

    const updatedCartItems =
      exist.qtyR === 1
        ? items.filter((x: OrderItem) => x.slug !== item.slug)
        : items.map((x) =>
          x.slug === item.slug ? { ...exist, qtyR: exist.qtyR - 1, qty: exist.qty - 1 } : x
        )

    updateCart(updatedCartItems)
  }

  const increaseL = (item: OrderItem) => {
    const exist = items.find((x) => x.slug === item.slug)
    const updatedCartItems = exist
      ? items.map((x) =>
        x.slug === item.slug ? { ...exist, qtyL: exist.qtyL + 1, qty: exist.qty + 1 } : x
      )
      : [...items, { ...item}]

    updateCart(updatedCartItems)
  }

  const decreaseL = (item: OrderItem) => {
    const exist = items.find((x) => x.slug === item.slug)
    if (!exist) return

    const updatedCartItems =
      exist.qtyL === 1
        ? items.filter((x: OrderItem) => x.slug !== item.slug)
        : items.map((x) =>
          x.slug === item.slug ? { ...exist, qtyL: exist.qtyL - 1, qty: exist.qty - 1 } : x
        )

    updateCart(updatedCartItems)
  }

  const updateCart = (updatedCartItems: OrderItem[]) => {
    const { itemPrice, shippingPrice, totalPrice  } = calcPrice(updatedCartItems)
    cartStore.setState({
      items: updatedCartItems,
      itemPrice,
      shippingPrice,
      totalPrice,
    })
  }

  return {
    items,
    itemPrice,
    shippingPrice,
    totalPrice,
    increase,
    decrease,
    increaseR,
    decreaseR,
    increaseL,
    decreaseL,
    paymentMethod,
    shippingAddress,
    saveShippingAddrress: (shippingAddress: ShippingAddress) => {
      cartStore.setState({
        shippingAddress,
      })
    },
    savePaymentMethod: (paymentMethod: string) => {
      cartStore.setState({
        paymentMethod,
      })
    },
    clear: () => {
      cartStore.setState({
        items: [],
      })
    },
    // init: () => cartStore.setState(initialState),
  }
}

const calcPrice = (items: OrderItem[]) => {
  const itemPrice = round2(
    items.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  const shippingPrice = round2(itemPrice > 50000 ? 10 : 5000)
  const totalPrice = round2(itemPrice + shippingPrice )
  return { itemPrice, shippingPrice, totalPrice }
}
