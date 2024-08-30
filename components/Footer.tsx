import React from 'react';

export default function Footer() {
  return (
<div className="bg-gray-800 py-24 sm:py-16">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <dl className="grid grid-cols-1 gap-x-0 gap-y-0 text-center lg:grid-cols-4">
      <div className="mx-auto flex flex-col gap-y-4">
        <img className="h-12 w-auto" src="http://cityoptic.mn/img/logo-footer.png" alt="Your Company" />
      </div>
      <div className="mx-auto flex flex-col gap-y-0 border border-gray-900 w-full p-4 flex-grow">
        <dt className="text-base leading-7 text-white">70134567</dt>
        <dd className="order-first text-sm tracking-tight text-gray-500 sm:text-sm">Бидэнтэй холбогдох</dd>
      </div>
      <div className="mx-auto flex flex-col gap-y-0 border-t border-b border-gray-900 w-full p-4 flex-grow">
        <dt className="text-base leading-7 text-white">
          <a className="flex justify-center"href="https://www.facebook.com/cityopticMongolia">
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351c0 .73.595 1.324 1.325 1.324h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.787 4.658-4.787 1.325 0 2.462.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.714-1.794 1.762v2.312h3.588l-.467 3.622h-3.121V24h6.117c.73 0 1.324-.594 1.324-1.324V1.325C24 .595 23.405 0 22.675 0z"/>
            </svg>
          </a>
        </dt>
        <dd className="order-first text-sm font-semibold tracking-tight text-blue-500">Facbook хаяг</dd>
      </div>
      <div className="mx-auto flex flex-col gap-y-0 border border-gray-900 p-4 w-full flex-grow">
        <dt className="text-base leading-7 text-white">
          <a className="flex justify-center" href="https://www.instagram.com/cityopticmongolia/">
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.335 3.608 1.309.975.975 1.248 2.242 1.31 3.608.057 1.266.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.057-1.645.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.057-1.266-.069-1.645-.069-4.85s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.057 1.645-.069 4.85-.069m0-2.163c-3.259 0-3.67.012-4.947.07-1.636.074-3.094.433-4.23 1.568C2.44 3.986 2.081 5.444 2.007 7.08c-.058 1.276-.07 1.688-.07 4.947s.012 3.671.07 4.947c.074 1.636.433 3.094 1.568 4.23 1.136 1.135 2.594 1.494 4.23 1.568 1.276.058 1.688.07 4.947.07s3.671-.012 4.947-.07c1.636-.074 3.094-.433 4.23-1.568 1.135-1.136 1.494-2.594 1.568-4.23.058-1.276.07-1.688.07-4.947s-.012-3.671-.07-4.947c-.074-1.636-.433-3.094-1.568-4.23-1.136-1.135-2.594-1.494-4.23-1.568-1.276-.058-1.688-.07-4.947-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
            </svg>
          </a>
        </dt>
        <dd className="order-first text-sm font-semibold tracking-tight text-blue-500">Instagram хаяг</dd>
      </div>
    </dl>
    <dl className='flex justify-center text-gray-600 font-bold text-right'><br />Бүх эрх хуулиар хамгаалагдсан. 2020 он</dl>
  </div>
</div>

  );
}
