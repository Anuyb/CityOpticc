'use client'
import { OrderItem } from "@/lib/models/OrderModel"
import { useSession } from "next-auth/react"
import Link from "next/link"
import useSWR from "swr"
import Image from 'next/image'

export default function OrderDetails({
    orderId,
    paypalClientId,
  }: {
    orderId: string
    paypalClientId: string
  }){
    const { data: session } = useSession()
    const { data, error } = useSWR(`/api/orders/${orderId}`)
    if (error) return error.message
    if (!data) return 'Loading...'
    const {
        paymentMethod,
        shippingAddress,
        items,
        itemsPrice,
        shippingPrice,
        totalPrice,
        isDelivered,
        deliveredAt,
        isPaid,
        paidAt,
      } = data  

      return (
        <div className="m-4">
          <h1 className="text-2xl py-4">Захиалга {orderId}</h1>
          <div className="grid md:grid-cols-4 md:gap-5 my-4">
            <div className="md:col-span-3">
              <div className="card bg-base-300">
                <div className="card-body">
                  <h2 className="card-title">Хүргэлтийн хаяг</h2>
                  <p>{shippingAddress.fullName}</p>
                  <p>
                    {shippingAddress.address}, {shippingAddress.district},{' '}                   
                  </p>
                  <p>{shippingAddress.phoneNumber}</p>
                  {isDelivered ? (
                    <div className="text-success">Хүргэсэн {deliveredAt}</div>
                  ) : (
                    <div className="text-error">Хүргээгүй</div>
                  )}
                </div>
              </div>
    
              <div className="card bg-base-300 mt-4">
                <div className="card-body">
                  <h2 className="card-title">Төлбөрийн хэрэгсэл</h2>
                  <p>{paymentMethod}</p>
                  {isPaid ? (
                    <div className="text-success">Төлсөн {paidAt}</div>
                  ) : (
                    <div className="text-error">Төлөөгүй</div>
                  )}
                </div>
              </div>
    
              <div className="card bg-base-300 mt-4">
                <div className="card-body">
                  <h2 className="card-title">Бүтээгдэхүүн</h2>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Бүтээгдэхүүн</th>
                        <th>Тоо ширхэг</th>
                        <th>Үнэ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item: OrderItem) => (
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
                              />
                              <span className="px-2">
                                {item.name} 
                              </span>
                            </Link>
                          </td>
                          <td>{item.qty}</td>
                          <td>{item.price}₮</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
    
            <div>
              <div className="card bg-base-300">
                <div className="card-body">
                  <h2 className="card-title">Захиалгын мэдээлэл</h2>
                  <ul>
                    <li>
                      <div className="mb-2 flex justify-between">
                        <div>Бүтээгдэхүүн</div>
                        <div>{itemsPrice}₮</div>
                      </div>
                    </li>
                    <li>
                      <div className="mb-2 flex justify-between">
                        <div>Хүргэлтийн төлбөр</div>
                        <div>{shippingPrice}₮</div>
                      </div>
                    </li>
                    <li>
                      <div className="mb-2 flex justify-between">
                        <div>Нийт</div>
                        <div>{totalPrice}₮</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }