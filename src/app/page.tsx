/* eslint-disable @next/next/no-img-element */
import App from './App';
import React from 'react';
import ProductItem from '../../components/ProductItem';
import data from './data';
import { Metadata } from 'next';
import productService from '../../lib/services/productService';
import Tailbar from '../../components/Tailbar';
import Link from 'next/link';
import Category from '../../components/Category';


export const metadata: Metadata = {
    title: process.env.NEXT_PUBLIC_APP_NAME || 'CityOptic',
    description: process.env.NEXT_PUBLIC_APP_DESC || 'Хараа зүйн төв',
};


export default async function Home() {
      const latestProducts = await productService.getLatest()
  return (   
      <React.StrictMode>
      <App />   
      <div className="content-container">
      <div className="container mx-auto">
          <div className="content-children mt-8">
              <div className="grid md:grid-cols-4 gap-4">
                  {/* <div className="md:col-span-1 p-2">
                      <div className="shadow-md md:block hidden">
                          <div className="bg-white border relative shadow-sm">
                              <a href="" id="searchAtag" className="hidden"></a>
                              <input className="input w-full  p-4 text-sm" placeholder="Хайлт хийх" type="text" id="search"/>
                              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" >
                                  <span className="icon">
                                      <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.1">
                                          <circle cx="9" cy="9" r="7"></circle>
                                          <path d="M14,14 L18,18 L14,14 Z"></path>
                                      </svg>
                                  </span>
                              </span>
                          </div>
                          <div className="menu-title bg-slate-600 text-gray-500 pt-4 pb-2 px-4 text-xs font-semibold border-b border-gray-700">
                              ЛИНЗНИЙ ТӨРЛҮҮД </div>
                          <ul className="list-none divide-y  bg-slate-600 divide-gray-700 text-xs  font-medium text-gray-400">
                              <li className="py-3">
                                  <a href="?category=1&amp;tab=Контакт линз" id="categorySearch" className="hover:text-white px-4">
                                      1 өдрийн хугацаатай
                                  </a>
                              </li>
                              <li className="py-3">
                                  <a href="?category=3&amp;tab=Контакт линз" id="categorySearch" className="hover:text-gray-400 px-4">
                                      1 сарын хугацаатай
                                  </a>
                              </li>
                              <li className="py-3">
                                  <a href="?category=10&amp;tab=Контакт линз" id="categorySearch" className="hover:text-gray-400 px-4">
                                      3 сарын хугацаатай
                                  </a>
                              </li>
                              <li className="py-3">
                                  <a href="?category=6&amp;tab=Контакт линз" id="categorySearch" className="hover:text-gray-400 px-4">
                                      1 жилийн хугацаатай
                                  </a>
                              </li>
                              <li className="py-3">
                                  <a href="?category=4&amp;tab=Контакт линз" id="categorySearch" className="hover:text-gray-400 px-4">
                                      Өнгөтэй
                                  </a>
                              </li>
                              <li className="py-3">
                                  <a href="?category=5&amp;tab=Контакт линз" id="categorySearch" className="hover:text-gray-400 px-4">
                                      Өнгөгүй
                                  </a>
                              </li>
                              <li className="py-3">
                                  <a href="?category=11&amp;tab=Контакт линз" id="categorySearch" className="hover:text-gray-400 px-4">
                                      Уусмал, сав
                                  </a>
                              </li>
                              <li className="py-3">
                                  <a href="?category=13&amp;tab=Контакт линз" id="categorySearch" className="hover:text-gray-400 px-4">
                                      Салбараас захиалах
                                  </a>
                              </li>
                          </ul>
                          <div className="menu-title  bg-slate-600 text-gray-500 pt-4 pb-2 px-4 text-xs font-semibold border-b border-t border-gray-700"> Брэндийн нэр</div>
                          <ul className="list-none divide-y  bg-slate-600 divide-gray-400 text-xs  font-medium text-gray-400">
                              <li className="py-3">
                                  <a href="?brand_html=1" className="hover:text-gray-400 px-4">
                                      Cooper Vision
                                  </a>
                              </li>
                              <li className="py-3">
                                  <a href="?brand_html=6" className="hover:text-gray-400 px-4">
                                      Seed
                                  </a>
                              </li>
                              <li className="py-3">
                                  <a href="?brand_html=7" className="hover:text-gray-400 px-4">
                                      Interojo
                                  </a>
                              </li>
                              <li className="py-3">
                                  <a href="?brand_html=9" className="hover:text-gray-400 px-4">
                                      Gegee
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <div className="main-menu-mobile md:hidden block">
                          <div className="grid grid-cols-3">
                              <div className="col-span-1">
                                  <div className="column">
                                      <a className="active" href="?tab=Контакт линз">Контакт линз</a>
                                  </div>
                              </div>
                              <div className="col-span-1">
                                  <div className="column">
                                      <a className="" href="?tab=Нүдний шил">Нүдний шил</a>
                                  </div>
                              </div>
                              <div className="col-span-1">
                                  <div className="column">
                                      <a className="" href="?tab=Оптикийн линз">Оптикийн линз</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="bg-gray-800 md:hidden block">
                          <a className="button block text-white font-bold text-sm py-4" href="#lens-type" data-toggle>
                              Сонгоно уу
                              <span className="icon">
                                  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                      <polygon points="5 7 15 7 10 12"></polygon>
                                  </svg>
                              </span>
                          </a>
                      </div>
                  </div> */}
                  <Category />
                  <div className="md:col-span-3">
                      <div className="mobile-search md:hidden mt-4">
                          <form className="forms-sample" action="/" method="GET" encType="multipart/form-data">
                              <div className="relative w-full">
                                  <a href="" id="searchAtagMobile" className="hidden"></a>
                                  <input className="input w-full" placeholder="Хайлт хийх" type="text" id="searchMobile"/>
                                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" >
                                      <span className="icon">
                                          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.1">
                                              <circle cx="9" cy="9" r="7"></circle>
                                              <path d="M14,14 L18,18 L14,14 Z"></path>
                                          </svg>
                                      </span>
                                  </span>
                              </div>
                          </form>
                      </div>
                      <div className="gap-2 grid lg:grid-cols-3 md:grid-cols-2 ">
                          {latestProducts && latestProducts.map((product) => (
                          <ProductItem key={product.slug} product={product} />
                        ))}
                      </div>
                    </div>
              </div>
          </div>
      </div>
  </div>
  
      <Tailbar/>
      </React.StrictMode>
  
  );
}

