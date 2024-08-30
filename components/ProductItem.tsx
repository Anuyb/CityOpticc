import Link from 'next/link';
// import {Product} from '../lib/models/ProductModel';
import React from 'react'

export default function ProductItem({product}: {product: Product }) {
  return ( 
      <div className="w-full p-2 font-arial">
      <div className="bg-white shadow-md border border-solid">
          <Link href={`/product/${product.slug}`}>
            <div className="relative overflow-hidden pl-8 pr-8">
              <img src={product.image} alt={product.name} className="w-full h-auto" />
            </div>
          </Link>
        <div className="p-4 bg-slate-100">
          <div>
            <span className="text-xs font-medium text-black">{product.category}</span>
            <span className="text-xs font-medium text-black ml-2">{product.category1}</span>
          </div>
            <Link  href={`/product/${product.slug}`} className="block mt-2 text-base font-bold text-gray-900 ">{product.name}</Link>
          <div className="mt-3">
            <span className="text-sm font-bold">{product.price}₮</span>
          </div>
        </div>
      </div>
    </div>
  )
} 