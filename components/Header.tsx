/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Menu from '../components/Menu'; 
import Image from 'next/image';

export default function Header() {
  return (
<header className="bg-cover bg-center font-arial inset-x-0 top-0 z-30  text-xs font-bold border-b sticky" style={{ backgroundPosition: '0% 0px' }}>
  <div className="bg-white top-0 z-50">
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-5">
        <div className="flex items-center">
          <div className="lg:hidden mr-2.5">
            <button id="mobile-menu-button">
              <Image
                src="http://cityoptic.mn/img/list.svg"
                width={30}
                height={30}
                alt="Menu"
              />
            </button>
          </div>
          <div>
            <a href="/">
              <Image
                src="/images/logo.png"
                width={120}
                height={30}
                alt="logo"
              />
            </a>
          </div>
          <div className="hidden lg:flex items-center ml-4 space-x-4">
            <a className="active" href="">КОНТАКТ ЛИНЗ</a>
            <a className="" href="">НҮДНИЙ ШИЛ</a>
            <a className="" href="">ОПТИКИЙН ЛИНЗ</a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:flex items-center mr-4">
            <a href="/about" className="flex items-center btn btn-ghost rounded-btn">
              <img src="http://cityoptic.mn/img/branch.png" alt="Branches" width="17" height={17} className="mr-1"/>
              САЛБАРУУД
            </a>
          </div>
          <div className="relative">
            <Menu />
          </div>
        </div>
      </div>
      <div id="mobile-menu" className="hidden lg:hidden">
        <div className="flex flex-col space-y-4 mt-4">
          <a href="/?tab=Контакт линз" className="py-2">Контакт линз</a>
          <a href="/?tab=Нүдний шил" className="py-2">Нүдний шил</a>
          <a href="/?tab=Оптикийн линз" className="py-2">Оптикийн линз</a>
          <a href="http://cityoptic.mn/contact" className="py-2">Манай салбарууд</a>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-gray-100 sticky top-[76px] md:top-[96px] lg:top-[104px]  flex justify-center items-center py-1.5 px-4 sm:py-2.5 sm:px-8">
    <p className="inline-block leading-none text-xs md:text-sm lg:text-base">Таны нүдийг бүрэн хамгаална</p>
  </div>
</header>



  )
}
