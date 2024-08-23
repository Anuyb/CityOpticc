'use client'
import useCartService from '@/lib/hooks/useCartStore'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useSWRMutation from 'swr/mutation'
import CheckoutSteps from '../../../../components/CheckoutSteps'
import Link from 'next/link'

const Form = () => {
  const router = useRouter()
  const {
    paymentMethod,
    shippingAddress,
    items,
    itemPrice,
    shippingPrice,
    totalPrice,
    clear,
  } = useCartService()
  const { trigger: placeOrder, isMutating: isPlacing } = useSWRMutation(
    `/api/orders/mine`,
    async (url) => {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethod,
          shippingAddress,
          items,
          itemPrice,
          shippingPrice,
          totalPrice,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        clear()
        toast.success('Захиалга амжилттай')
        return router.push(`/order/${data.order._id}`)
      } else {
        toast.error(data.message)
      }
    }
  )
  useEffect(() => {
    if (!paymentMethod) {
      return router.push('/payment')
    }
    if (items.length === 0) {
      return router.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentMethod, router])
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
    <div className='m-4'>
      <CheckoutSteps current={4} />

      <div className="grid md:grid-cols-4 md:gap-5 my-4">
        <div className="overflow-x-auto md:col-span-3">
          <div className="card bg-base-300">
            <div className="card-body">
              <h2 className="card-title">Хүргэлтийн хаяг</h2>
              <p>{shippingAddress.fullName}</p>
              <p>{shippingAddress.phoneNumber}</p>
              <p>
                {shippingAddress.address}, {shippingAddress.district}{' '}
              </p>
              <div>
                <Link className="btn" href="/shipping">
                  Засах 
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 mt-4">
            <div className="card-body">
              <h2 className="card-title">Төлбөрийн хэрэгсэл</h2>
              <p>{paymentMethod}</p>
              <div>
                <Link className="btn" href="/payment">
                  Засах
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 mt-4">
            <div className="card-body">
              <h2 className="card-title">Бүтээгдэхүүн</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Тоо ширхэг</th>
                    <th>Үнэ</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.slug}>
                      <td>
                        <Link
                          href={`/product/${item.slug}`}
                          className="flex items-center"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                          ></Image>
                          <span className="px-2">
                            {item.name}({item.color})
                          </span>
                        </Link>
                      </td>
                      <td>
                        <span>{item.qty}</span>
                      </td>
                      <td>{item.price}₮</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <Link className="btn" href="/cart">
                  Засах
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card bg-base-300">
            <div className="card-body">
              <h2 className="card-title">Захиалгын мэдээлэл</h2>
              <ul className="space-y-3">
                <li>
                      <div className=" flex justify-between">
                        <div>Бүтээгдэхүүн</div>
                        <div>{itemPrice}₮</div>
                      </div>
                    </li>
                <li>
                  <div className=" flex justify-between">
                    <div>Хүргэлтийн төлбөр</div>
                    <div>{shippingPrice}₮</div>
                  </div>
                </li>
                <li>
                  <div className=" flex justify-between">
                    <div>Нийт</div>
                    <div>{totalPrice}₮</div>
                  </div>
                </li>

                <li>
                  <button
                    onClick={() => placeOrder()}
                    disabled={isPlacing}
                    className="btn btn-primary w-full"
                  >
                    {isPlacing && (
                      <span className="loading loading-spinner"></span>
                    )}
                    Захиалга өгөх
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Form