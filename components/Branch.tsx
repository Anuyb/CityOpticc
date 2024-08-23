import React from 'react';
import Image from 'next/image';
import {Branch} from '../lib/models/BranchModel';

export default function Page({branch}: {branch: Branch}) {
  return (
    <>
        <div className="flex grid-cols-1 md:grid-cols-2 items-center">
          <div className="w-full sm:w-1/2">
            <Image
              src={branch.image}
              alt={branch.slug}
              layout="responsive"
              width={1}
              height={1}
              className="object-contain "
            />
          </div>
          <div className="w-full text-sm sm:w-1/2 p-5">
            <h6 className="text-sm font-bold text-black">{branch.name}</h6>
            <p className="text-sm text-black">{branch.location}</p>
            <div className="flex items-center mt-4 text-sm text-black">
              <img src="http://cityoptic.mn/img/phone.svg" width="15" alt="" className="mr-2" />
              {/* <span>{branch.phone}</span> */}
            </div>
            <div className="mt-4 text-sm text-black">
              <p className="font-bold">Цагийн хуваарь</p>
              <p>{branch.schedule}<br />Бя-Ня: 11:00-20:00</p>
            </div>
          </div>
        </div>
    </>
  )
}