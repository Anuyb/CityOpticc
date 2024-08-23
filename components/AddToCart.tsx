'use client'
import useCartService from "../lib/hooks/useCartStore"
import { OrderItem } from "../lib/models/OrderModel"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AddToCart({ item }: { item: OrderItem }) {
  const router = useRouter()
  const { items, increase, decrease } = useCartService()
  const [existItem, setExistItem] = useState<OrderItem | undefined>()

  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug))
  }, [item, items])

  const addToCartHandler = () => {
    increase(item)
    router.push('/cart')
  }

  return existItem ? (
    <div>
      {/* Optionally handle existing items here */}
    </div>
  ) : (
    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-xs " type="button" onClick={addToCartHandler}>
      САГСАНД ХИЙХ
    </button>
  )
}
