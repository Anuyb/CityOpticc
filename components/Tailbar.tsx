/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Tailbar() {
  return (  
    <div className="bg-white py-4 text-center font-arial sm:py-8">
        <div className="max-w-full px-6 lg:px-20">
            <dl className="grid max-w-full grid-cols-1 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative border-b border-r border-l border-gray-300">
                <div className="border-t-4 border-blue-400 pt-12">
                <dt className="flex justify-center">
                <img src="http://cityoptic.mn/img/deliver-one.png" width="50" alt="" />
                </dt>
                <dt className="text-sm font-semibold leading-7 text-gray-900"> Хүргэлтийн нөхцөл</dt>
                </div>
                <dd className="mt-2 text-xs leading-5 text-black p-4">
                Захиалгын хүргэлт нь 5,000 төгрөг байх бөгөөд таны захиалга 24-48 цагт таны гар дээр
                очно. Хүргэгч хүргэхээс өмнө тантай утсаар холбогдоно. <br /> <br />  <b>Хүргэлтийн бүс:</b> Улаанбаатар хотын
                А,Б бүс дотор мөн Хан-Уул дүүрэг Зайсангийн хэсэгт хүргэлттэй. Хүргэлтийн бүсээс гадуурх хэсэгт
                хүргүүлэх шаардлагатай байгаа бол та манай Facebook, Instagram хаяг болон <b>70134567</b> утсаар
                холбогдоорой.
                </dd>
            </div>
            <div className="relative border-b border-r border-l border-gray-300">
                <div className="border-t-4 border-orange-300 pt-12">
                <dt className="flex justify-center"><img src="http://cityoptic.mn/img/deliver-two.png" width="50" alt="" /></dt>
                <dt className="text-sm font-semibold leading-7 text-gray-900">
                    Төлбөрийн мэдээлэл
                </dt>
                </div>
                <dd className="mt-2 text-xs leading-5 text-black p-4">
                Та авах бүтээгдэхүүнийхээ үнийн дүнг 100% шилжүүлснээр таны захиалга баталгаажих бөгөөд бид тантай
                эргэн холбогдох болно. <b>Мөн 20,000 ба түүнээс дээш үнийн дүнд захиалга хийж боломжтой болохыг
                    анхаарна уу.</b>
                </dd>
            </div>
            </dl>
        </div>
    </div>
  )
}
