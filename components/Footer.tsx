import React from 'react';

export default function Footer() {
  return (
    <div className="bg-gray-800 py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-0 gap-y-0 text-center lg:grid-cols-4">
          <div className="mx-auto flex flex-col gap-y-4">
            <img className="h-12 w-auto" src="http://cityoptic.mn/img/logo-footer.png" alt="Your Company"/>
          </div>
          <div className="mx-auto flex flex-col gap-y-0 border border-gray-900  w-full p-4 flex-grow">
            <dt className="text-base leading-7 text-white">70134567</dt>
            <dd className="order-first text-sm tracking-tight text-gray-500 sm:text-sm">Бидэнтэй холбогдох</dd>
          </div>
          <div className="mx-auto flex flex-col gap-y-0 border-t border-b border-gray-900 w-full p-4 flex-grow">
            <dt className="text-base leading-7 text-white">/cityoptic</dt>
            <dd className="order-first text-sm font-semibold tracking-tight text-blue-500"><a href="https://www.facebook.com/cityopticMongolia">Facbook хаяг</a></dd>
          </div>
          <div className="mx-auto flex flex-col gap-y-0 border border-gray-900 p-4 w-full flex-grow">
            <dt className="text-base leading-7 text-white">cityoptic</dt>
            <dd className="order-first text-sm font-semibold tracking-tight text-blue-500"><a href="https://www.instagram.com/cityopticmongolia/">Instagram хаяг</a></dd>
          </div>
        </dl>
        <dl className='text-gray-600 font-bold text-right'><br/>Бүх эрх хуулиар хамгаалагдсан. 2020 он</dl>
      </div>
    </div>
  );
}
