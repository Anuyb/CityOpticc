import React from 'react';
import Image from 'next/image';
import Tailbar from '../../../components/Tailbar';
import data from '../data';
import Branch from '../../../components/Branch';
import productService from '@/lib/services/productService';


export default async function Page() {
  const latestBranch = await productService.getBLatest()

  return (
    <>
    <h1 className='px-24 font-semibold text-2xl py-8 bg-slate-100'>Манай салбарууд</h1>
    <div className="container mx-auto mt-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {
            latestBranch.map((branch) => (<Branch key={branch.slug} branch={branch} />))
          }
        </div>
      </div>
    <Tailbar/>
    </>
  )
}