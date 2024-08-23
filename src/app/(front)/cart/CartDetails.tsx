'use client'
import useCartService from '../../../../lib/hooks/useCartStore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function CartDetails() {
  const router = useRouter()
  const { items, itemPrice, decrease, increase, decreaseR, increaseR, decreaseL, increaseL } = useCartService()

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
    <>
      <h1 className="py-4 text-xl font-bold ml-24">Сагс</h1>

      {items.length === 0 ? (
        <div className='mx-24'>
          Сагс хоосон байна. <Link href="/"><strong>Худалдан авалт хийх</strong></Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5 mx-24">
          <div className="md:col-span-3 space-y-4">
            <div className="flex md:grid-cols-4 font-bold p-4 border-b">
              <span className='flex w-full justify-center'>Бүтээгдэхүүн</span>
              <span className='flex w-full justify-center'>Хараа</span>
              <span className='flex w-full justify-center'>Тоо ширхэг</span>
              <span className='flex w-full justify-center'>Үнэ</span>
            </div>
            {items.map((item) => (
              <div key={item.slug}>
                {item.visionL === item.visionR ? (
                  <div className="flex md:grid-cols-4 p-4 border-b">
                    <Link href={`/product/${item.slug}`} className="flex items-center w-full justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                      />
                      <span className="px-2">{item.name}</span>
                    </Link>
                    <div className='flex items-center w-full justify-center'>
                      {item.visionR}
                    </div>
                    <div className="flex items-center w-full justify-center">
                      <button
                        className="btn"
                        type="button"
                        onClick={() => decrease(item)}
                      >
                        -
                      </button>
                      <span className="px-2">{item.qty}</span>
                      <button
                        className="btn"
                        type="button"
                        onClick={() => increase(item)}
                      >
                        +
                      </button>
                    </div>
                    <div className='flex items-center w-full justify-center'>{item.price}₮</div>
                  </div>
                ) : (
                  <>
                    <div className="flex md:grid-cols-4 p-4 border-b">
                      <Link href={`/product/${item.slug}`} className="flex items-center w-full justify-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        />
                        <span className="px-2">{item.name}</span>
                      </Link>
                      <div className='flex items-center w-full justify-center'>
                        {item.visionR}
                      </div>
                      <div className="flex items-center w-full justify-center">
                        <button
                          className="btn"
                          type="button"
                          onClick={() => decreaseR(item)}
                        >
                          -
                        </button>
                        <span className="px-2">{item.qtyR}</span>
                        <button
                          className="btn"
                          type="button"
                          onClick={() => increaseR(item)}
                        >
                          +
                        </button>
                      </div>
                      <div className='flex items-center w-full justify-center'>{item.price}₮</div>
                    </div>
                    <div className="flex md:grid-cols-4 p-4 border-b">
                      <Link href={`/product/${item.slug}`} className="flex items-center w-full justify-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        />
                        <span className="px-2">{item.name}</span>
                      </Link>
                      <div className='flex items-center w-full justify-center'>
                        {item.visionL}
                      </div>
                      <div className="flex items-center w-full justify-center">
                        <button
                          className="btn"
                          type="button"
                          onClick={() => decreaseL(item)}
                        >
                          -
                        </button>
                        <span className="px-2">{item.qtyL}</span>
                        <button
                          className="btn"
                          type="button"
                          onClick={() => increaseL(item)}
                        >
                          +
                        </button>
                      </div>
                      <div className='flex items-center w-full justify-center'>{item.price}₮</div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div>
            <div className="card bg-base-300">
              <div className="card-body">
                <ul>
                  <li>
                    <div className="pb-3 font-semibold text-xl">
                      Нийт үнэ ({items.reduce((a, c) => a + c.qty, 0)}) : {itemPrice}₮
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push('/shipping')}
                      className="btn btn-primary w-full"
                    >
                      Захиалах
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
