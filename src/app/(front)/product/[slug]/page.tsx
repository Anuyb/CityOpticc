// "use client";

// import { useState, useEffect } from 'react';
// import data from '@/app/data';
// import Image from 'next/image';
// import AddToCart from '../../../../../components/AddToCart';
// import React from 'react';
// import Tailbar from '../../../../../components/Tailbar';
// import productService from '../../../../../lib/services/productService';
// import { title } from 'process';
// import { describe } from 'node:test';

// export async function generateMetedata({
//   params,
// }:{
//   params:{ slug: string}
// }){
//   const product = await productService.getBySlug(params.slug)
//   if (!product){
//     return {title: 'Бүтээгдэхүүн олдсонгүй'}
//   }
//   return {
//     title: product.name,
//     description:product.description
//   }
// }
// export default async function ProductDetails({
//     params,
//   }:{
//     params:{ slug: string}
//   }){
//   const product = await productService.getBySlug(params.slug)
//   // const product = data.products.find(x => x.slug === params.slug);

//   const [quantityR, setQuantityR] = useState(0);
//   const [quantityL, setQuantityL] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     if (product) {
//       setTotalPrice((quantityR + quantityL) * product.price);
//     }
//   }, [quantityR, quantityL, product]);

//   const increaseR = () => setQuantityR(quantityR + 1);
//   const decreaseR = () => quantityR > 0 && setQuantityR(quantityR - 1);
//   const increaseL = () => setQuantityL(quantityL + 1);
//   const decreaseL = () => quantityL > 0 && setQuantityL(quantityL - 1);

//   const [visionL, setVisionL] = useState('');
//   const [visionR, setVisionR] = useState('');

//   if (!product) {
//     return <div className="text-center text-xl">Бүтээгдэхүүн олдсонгүй</div>;
//   }

//   return (
//     <>
//       <div className="flex flex-wrap min-[900px]:flex-nowrap lg:flex-nowrap lg:space-x-8 sm\:py-32 bg-gray-100 w-full h-33">
//         <div className="w-full pl-24 pr-24 lg:w-1/2 h-full">
//           <div className="bg-white border h-64 shadow-sm flex items-center justify-center mt-8">
//             <Image
//               id="cover_image"
//               src={product.image}
//               alt={product.slug}
//               width={640}
//               height={100}
//               sizes="100vw"
//               className="object-contain"
//               style={{ width: 'auto', height: '100%' }}
//             />
//           </div>
//           <div className="mt-2 relative visible-overflow-hidden text-white slider-container">
//             <ul className="flex space-x-2 items-center justify-center overflow-x-auto">
//               <li className="active">
//                 <Image src={product.banner} className="active w-1/4 h-auto cursor-pointer" alt="" />
//               </li>
//               <li className="active">
//                 <Image src={product.banner} alt="" />
//               </li>
//               <li className="active">
//                 <Image src={product.banner} alt="" />
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2 max-[900px]:mx-24">
//           <div className="min-[900px]:mt-20">
//             <div className="flex space-x-2">
//               <span className="text-xs font-semibold">{product.category}</span>
//               <span className="text-xs font-semibold">{product.category1}</span>
//             </div>
//             <h1 className="text-2xl text-dark font-bold">{product.name}</h1>
//             <div className="mt-12">
//               <div className="flex">
//                 <div className="more-product-number">
//                   <div className="text-sm">Бүтээгдэхүүний үнэ</div>
//                   <div className="font-bold text-xl text-dark">{product.price}₮</div>
//                 </div>
//               </div>
//             </div>
//             <p className="text-dark text-base mt-4"></p>
//           </div>
//         </div>
//       </div>

//       <div className="shadow-sm mt-12 pt-4 pb-4 ml-24 mr-24 border m-10 bg-white">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div className="col-span-3">
//             <div className="overflow-auto">
//               <div className="text-center">
//                 <div className="grid grid-cols-2 gap-4 items-center">
//                   <div></div>
//                   <div className="grid grid-cols-2 gap-4 items-center">
//                     <div>Хараа</div>
//                     <div>Тоо ширхэг</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="text-center border-t mt-4">
//                 <div className="grid grid-cols-2 gap-4 items-center">
//                   <div>
//                     <div className="text-3xl font-bold text-dark">R</div>
//                     <div className="text-xs text-gray-500">Баруун</div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4 items-center">
//                     <div className="flex items-center justify-center w-full h-10">
//                       <div className="relative flex border-gray-300 w-20 h-10 pl-1 pr-1 border items-center justify-center">
//                         <select className="form-select w-full h-full" value={visionR} onChange={(e) => setVisionR(e.target.value)}>
//                           <option value="0.00">0.00</option>
//                           <option value="-0.75">-0.75</option>
//                           <option value="-1.00">-1.00</option>
//                           <option value="-1.25">-1.25</option>
//                           <option value="-1.50">-1.50</option>
//                           <option value="-1.75">-1.75</option>
//                           <option value="-2.00">-2.00</option>
//                           <option value="-2.25">-2.25</option>
//                           <option value="-2.50">-2.50</option>
//                           <option value="-2.75">-2.75</option>
//                           <option value="-3.00">-3.00</option>
//                           <option value="-3.25">-3.25</option>
//                           <option value="-3.50">-3.50</option>
//                           <option value="-3.75">-3.75</option>
//                           <option value="-4.00">-4.00</option>
//                           <option value="-4.25">-4.25</option>
//                           <option value="-4.50">-4.50</option>
//                           <option value="-4.75">-4.75</option>
//                           <option value="-5.00">-5.00</option>
//                           <option value="-5.25">-5.25</option>
//                           <option value="-5.50">-5.50</option>
//                           <option value="-5.75">-5.75</option>
//                           <option value="-6.00">-6.00</option>
//                           <option value="-6.50">-6.50</option>
//                           <option value="-7.00">-7.00</option>
//                           <option value="-7.50">-7.50</option>
//                           <option value="-8.00">-8.00</option>
//                           <option value="-8.50">-8.50</option>
//                           <option value="-9.00">-9.00</option>
//                           <option value="-9.50">-9.50</option>
//                           <option value="-10.00">-10.00</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="flex items-center justify-center">
//                       <div className="relative flex items-center border border-gray-300 group">
//                         <input
//                           type="number"
//                           id="numberR"
//                           value={quantityR}
//                           className="custom-number-input text-left pl-2 w-20 h-10 text-sm border-none peer"
//                           readOnly
//                         />
//                         <div className="absolute right-0 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity">
//                           <button
//                             onClick={increaseR}
//                             className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-1 py-0.5 text-xs"
//                           >
//                             &#x25B2;
//                           </button>
//                           <button
//                             onClick={decreaseR}
//                             className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-1 py-0.5 text-xs"
//                           >
//                             &#x25BC;
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 items-center mt-4">
//                   <div>
//                     <div className="text-3xl font-bold text-dark">L</div>
//                     <div className="text-xs text-gray-500">Зүүн</div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4 items-center">
//                     <div className="flex items-center justify-center w-full h-10">
//                       <div className="relative flex border-gray-300 pl-1 pr-1 w-20 h-10 border items-center justify-center">
//                         <select className="form-select w-full h-full" value={visionL} onChange={(e) => setVisionL(e.target.value)}>
//                           <option value="0.00">0.00</option>
//                           <option value="-0.75">-0.75</option>
//                           <option value="-1.00">-1.00</option>
//                           <option value="-1.25">-1.25</option>
//                           <option value="-1.50">-1.50</option>
//                           <option value="-1.75">-1.75</option>
//                           <option value="-2.00">-2.00</option>
//                           <option value="-2.25">-2.25</option>
//                           <option value="-2.50">-2.50</option>
//                           <option value="-2.75">-2.75</option>
//                           <option value="-3.00">-3.00</option>
//                           <option value="-3.25">-3.25</option>
//                           <option value="-3.50">-3.50</option>
//                           <option value="-3.75">-3.75</option>
//                           <option value="-4.00">-4.00</option>
//                           <option value="-4.25">-4.25</option>
//                           <option value="-4.50">-4.50</option>
//                           <option value="-4.75">-4.75</option>
//                           <option value="-5.00">-5.00</option>
//                           <option value="-5.25">-5.25</option>
//                           <option value="-5.50">-5.50</option>
//                           <option value="-5.75">-5.75</option>
//                           <option value="-6.00">-6.00</option>
//                           <option value="-6.50">-6.50</option>
//                           <option value="-7.00">-7.00</option>
//                           <option value="-7.50">-7.50</option>
//                           <option value="-8.00">-8.00</option>
//                           <option value="-8.50">-8.50</option>
//                           <option value="-9.00">-9.00</option>
//                           <option value="-9.50">-9.50</option>
//                           <option value="-10.00">-10.00</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="flex items-center justify-center">
//                       <div className="relative flex  border border-gray-300 group">
//                         <input
//                           type="number"
//                           id="numberL"
//                           value={quantityL}
//                           className="custom-number-input text-left pl-2 w-20 h-10 text-sm border-none peer"
//                           readOnly
//                         />
//                         <div className="absolute right-0 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity">
//                           <button
//                             onClick={increaseL}
//                             className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-1 py-0.5 text-xs">
//                             &#x25B2;
//                           </button>
//                           <button
//                             onClick={decreaseL}
//                             className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-1 py-0.5 text-xs">
//                             &#x25BC;
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <div className="flex items-center justify-center mt-8">
//                   <button
//                     onClick={() => alert(`Right: ${quantityR}, Left: ${quantityL}`)}
//                     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                   >
//                     Confirm
//                   </button>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-span-1 max-[767px]:m-8">
//             <div>
//               <div className="text-dark font-bold">
//                 Нийт үнэ: <span className="font-bold">{totalPrice}₮</span>
//               </div>
//               {product.countInStock !== 0 ? (
//                 <div className="card-actions justify-center mr-2 mt-2">
//                   <AddToCart item={{
//                     ...product,
//                     qty: quantityL + quantityR,
//                     qtyR: quantityR,
//                     qtyL: quantityL,
//                     color: '',
//                     visionR: visionR,
//                     visionL: visionL
//                   }}                  
//                   />
//                 </div>
//               ) : (
//                 <div id="emptyDIV" className="p-5 bg-gray-50 rounded-lg shadow-inner mt-4 text-center">
//                   <img src="http://cityoptic.mn/img/empty-white-box.svg" width="40" alt="" />
//                   <div className="text-pink font-bold">Үлдэгдэл хүрэлцэхгүй байна.</div>
//                   <div className="text-black mt-2 text-sm">
//                     Та дараах <span className="font-bold">70134567</span> утсаар холбогдон лавлана уу!
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-8 ml-24 mr-24 text-sm">
//         <div className="p-8 bg-slate-100">
//           <div className="product-spec">
//             <h3 className="font-bold text-xl mb-4">Дэлгэрэнгүй тайлбар</h3>
//             <ul className="list-disc pl-5 space-y-2">
//               <li className="pb-1 pt-1">1 жилийн хугацаатай.</li>
//               <li className="pb-1 pt-1">Монгол шошготой, манай анхны брэнд.</li>
//               <li className="pb-1 pt-1">Хэт ягаан туяанаас хамгаална.</li>
//               <li className="pb-1 pt-1">Дүрслэлийн алдааг багасгасан.</li>
//               <li className="pb-1 pt-1">Өндөр нарийвчлалтай хараатай.</li>
//               <li className="pb-1 pt-1">Зөөлөн нимгэн материалтай.</li>
//               <li className="pb-1 pt-1">Асфер загвартай, гадаргуутай.</li>
//               <li className="pb-1 pt-1">Тогтмол зүүх бол 6 сарын дараа солихыг зөвлөнө.</li>
//               <li className="pb-1 pt-1">-10.00 хүртэл захиалах боломжтой.</li>
//             </ul>
//           </div>
//         </div>
//         <div className="p-8 bg-slate-100">
//           <div className="product-spec">
//             <h3 className="font-bold text-xl mb-4">Үзүүлэлтүүд</h3>
//             <div className="grid grid-cols-2 gap-0 items-center">
//               <div>
//                 <ul>
//                   <li className="pb-4 pt-4 border-t">BC:</li>
//                   <li className="pb-4 pt-4 border-t">Диаметр:</li>
//                   <li className="pb-4 pt-4 border-t">График диаметр:</li>
//                   <li className="pb-4 pt-4 border-t">Усны агууламж:</li>
//                   <li className="pb-4 pt-4 border-t">Материал:</li>
//                   <li className="pb-4 pt-4 border-t">Үйлдвэсэн улс:</li>
//                   <li className="pb-4 pt-4 border-t">Баглаа:</li>
//                 </ul>
//               </div>
//               <div>
//                 <ul>
//                   <li className="pb-4 pt-4 border-t">{product.bc} мм</li>
//                   <li className="pb-4 pt-4 border-t">{product.dia} мм</li>
//                   <li className="pb-4 pt-4 border-t">{product.graDia} мм</li>
//                   <li className="pb-4 pt-4 border-t">{product.water}%</li>
//                   <li className="pb-4 pt-4 border-t">{product.material}</li>
//                   <li className="pb-4 pt-4 border-t">{product.country}</li>
//                   <li className="pb-4 pt-4 border-t">{product.baglaa} ширхэг</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Tailbar/>
//     </>
//   );
// }



// import data from '@/app/data';
// import Image from 'next/image';
// import AddToCart from '../../../../../components/AddToCart';
// import React from 'react';
// import Tailbar from '../../../../../components/Tailbar';
// import productService from '../../../../../lib/services/productService';
// import { title } from 'process';
// import { describe } from 'node:test';
// import { convertDocToObj } from '../../../../../lib/utils';

// export async function generateMetedata({
//   params,
// }:{
//   params:{ slug: string}
// }){
//   const product = await productService.getBySlug(params.slug)
//   if (!product){
//     return {title: 'Бүтээгдэхүүн олдсонгүй'}
//   }
//   return {
//     title: product.name,
//     description:product.description
//   }
// }
// export default async function ProductDetails({
//     params,
//   }:{
//     params:{ slug: string}
//   }){
//   const product = await productService.getBySlug(params.slug)
//   // const product = data.products.find(x => x.slug === params.slug);

//   // const [quantityR, setQuantityR] = useState(0);
//   // const [quantityL, setQuantityL] = useState(0);
//   // const [totalPrice, setTotalPrice] = useState(0);

//   // useEffect(() => {
//   //   if (product) {
//   //     setTotalPrice((quantityR + quantityL) * product.price);
//   //   }
//   // }, [quantityR, quantityL, product]);

//   // const increaseR = () => setQuantityR(quantityR + 1);
//   // const decreaseR = () => quantityR > 0 && setQuantityR(quantityR - 1);
//   // const increaseL = () => setQuantityL(quantityL + 1);
//   // const decreaseL = () => quantityL > 0 && setQuantityL(quantityL - 1);

//   // const [visionL, setVisionL] = useState('');
//   // const [visionR, setVisionR] = useState('');

//   if (!product) {
//     return <div className="text-center text-xl">Бүтээгдэхүүн олдсонгүй</div>;
//   }

//   return (
//     <>
//       <div className="flex flex-wrap min-[900px]:flex-nowrap lg:flex-nowrap lg:space-x-8 sm\:py-32 bg-gray-100 w-full h-33">
//         <div className="w-full pl-24 pr-24 lg:w-1/2 h-full">
//           <div className="bg-white border h-64 shadow-sm flex items-center justify-center mt-8">
//             <Image
//               id="cover_image"
//               src={product.image}
//               alt={product.slug}
//               width={640}
//               height={100}
//               sizes="100vw"
//               className="object-contain"
//               style={{ width: 'auto', height: '100%' }}
//             />
//           </div>
//           <div className="mt-2 relative visible-overflow-hidden text-white slider-container">
//             {/* <ul className="flex space-x-2 items-center justify-center overflow-x-auto">
//               <li className="active">
//                 <Image src={product.banner} className="active w-1/4 h-auto cursor-pointer" alt="" />
//               </li>
//               <li className="active">
//                 <Image src={product.banner} alt="" />
//               </li>
//               <li className="active">
//                 <Image src={product.banner} alt="" />
//               </li>
//             </ul> */}
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2 max-[900px]:mx-24">
//           <div className="min-[900px]:mt-20">
//             <div className="flex space-x-2">
//               <span className="text-xs font-semibold">{product.category}</span>
//               <span className="text-xs font-semibold">{product.category1}</span>
//             </div>
//             <h1 className="text-2xl text-dark font-bold">{product.name}</h1>
//             <div className="mt-12">
//               <div className="flex">
//                 <div className="more-product-number">
//                   <div className="text-sm">Бүтээгдэхүүний үнэ</div>
//                   <div className="font-bold text-xl text-dark">{product.price}₮</div>
//                 </div>
//               </div>
//             </div>
//             <p className="text-dark text-base mt-4"></p>
//           </div>
//         </div>
//       </div>

//       <div className="shadow-sm mt-12 pt-4 pb-4 ml-24 mr-24 border m-10 bg-white">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div className="col-span-3">
//             <div className="overflow-auto">
//               <div className="text-center">
//                 <div className="grid grid-cols-2 gap-4 items-center">
//                   <div></div>
//                   <div className="grid grid-cols-2 gap-4 items-center">
//                     <div>Хараа</div>
//                     <div>Тоо ширхэг</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="text-center border-t mt-4">
//                 <div className="grid grid-cols-2 gap-4 items-center">
//                   <div>
//                     <div className="text-3xl font-bold text-dark">R</div>
//                     <div className="text-xs text-gray-500">Баруун</div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4 items-center">
//                     <div className="flex items-center justify-center w-full h-10">
//                       <div className="relative flex border-gray-300 w-20 h-10 pl-1 pr-1 border items-center justify-center">
//                         <select className="form-select w-full h-full" value={0} >
//                           <option value="0.00">0.00</option>
//                           <option value="-0.75">-0.75</option>
//                           <option value="-1.00">-1.00</option>
//                           <option value="-1.25">-1.25</option>
//                           <option value="-1.50">-1.50</option>
//                           <option value="-1.75">-1.75</option>
//                           <option value="-2.00">-2.00</option>
//                           <option value="-2.25">-2.25</option>
//                           <option value="-2.50">-2.50</option>
//                           <option value="-2.75">-2.75</option>
//                           <option value="-3.00">-3.00</option>
//                           <option value="-3.25">-3.25</option>
//                           <option value="-3.50">-3.50</option>
//                           <option value="-3.75">-3.75</option>
//                           <option value="-4.00">-4.00</option>
//                           <option value="-4.25">-4.25</option>
//                           <option value="-4.50">-4.50</option>
//                           <option value="-4.75">-4.75</option>
//                           <option value="-5.00">-5.00</option>
//                           <option value="-5.25">-5.25</option>
//                           <option value="-5.50">-5.50</option>
//                           <option value="-5.75">-5.75</option>
//                           <option value="-6.00">-6.00</option>
//                           <option value="-6.50">-6.50</option>
//                           <option value="-7.00">-7.00</option>
//                           <option value="-7.50">-7.50</option>
//                           <option value="-8.00">-8.00</option>
//                           <option value="-8.50">-8.50</option>
//                           <option value="-9.00">-9.00</option>
//                           <option value="-9.50">-9.50</option>
//                           <option value="-10.00">-10.00</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="flex items-center justify-center">
//                       <div className="relative flex items-center border border-gray-300 group">
//                         <input
//                           type="number"
//                           id="numberR"
//                           value={0}
//                           className="custom-number-input text-left pl-2 w-20 h-10 text-sm border-none peer"
//                           readOnly
//                         />
//                         <div className="absolute right-0 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity">
//                           <button
//                             className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-1 py-0.5 text-xs"
//                           >
//                             &#x25B2;
//                           </button>
//                           <button
//                             className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-1 py-0.5 text-xs"
//                           >
//                             &#x25BC;
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 items-center mt-4">
//                   <div>
//                     <div className="text-3xl font-bold text-dark">L</div>
//                     <div className="text-xs text-gray-500">Зүүн</div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4 items-center">
//                     <div className="flex items-center justify-center w-full h-10">
//                       <div className="relative flex border-gray-300 pl-1 pr-1 w-20 h-10 border items-center justify-center">
//                         <select className="form-select w-full h-full" value={0} >
//                           <option value="0.00">0.00</option>
//                           <option value="-0.75">-0.75</option>
//                           <option value="-1.00">-1.00</option>
//                           <option value="-1.25">-1.25</option>
//                           <option value="-1.50">-1.50</option>
//                           <option value="-1.75">-1.75</option>
//                           <option value="-2.00">-2.00</option>
//                           <option value="-2.25">-2.25</option>
//                           <option value="-2.50">-2.50</option>
//                           <option value="-2.75">-2.75</option>
//                           <option value="-3.00">-3.00</option>
//                           <option value="-3.25">-3.25</option>
//                           <option value="-3.50">-3.50</option>
//                           <option value="-3.75">-3.75</option>
//                           <option value="-4.00">-4.00</option>
//                           <option value="-4.25">-4.25</option>
//                           <option value="-4.50">-4.50</option>
//                           <option value="-4.75">-4.75</option>
//                           <option value="-5.00">-5.00</option>
//                           <option value="-5.25">-5.25</option>
//                           <option value="-5.50">-5.50</option>
//                           <option value="-5.75">-5.75</option>
//                           <option value="-6.00">-6.00</option>
//                           <option value="-6.50">-6.50</option>
//                           <option value="-7.00">-7.00</option>
//                           <option value="-7.50">-7.50</option>
//                           <option value="-8.00">-8.00</option>
//                           <option value="-8.50">-8.50</option>
//                           <option value="-9.00">-9.00</option>
//                           <option value="-9.50">-9.50</option>
//                           <option value="-10.00">-10.00</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="flex items-center justify-center">
//                       <div className="relative flex  border border-gray-300 group">
//                         <input
//                           type="number"
//                           id="numberL"
//                           value='0'
//                           className="custom-number-input text-left pl-2 w-20 h-10 text-sm border-none peer"
//                           readOnly
//                         />
//                         <div className="absolute right-0 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity">
//                           <button
//                             className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-1 py-0.5 text-xs">
//                             &#x25B2;
//                           </button>
//                           <button
//                             className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-1 py-0.5 text-xs">
//                             &#x25BC;
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <div className="flex items-center justify-center mt-8">
//                   <button
//                     onClick={() => alert(`Right: ${quantityR}, Left: ${quantityL}`)}
//                     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                   >
//                     Confirm
//                   </button>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-span-1 max-[767px]:m-8">
//             <div>
//               <div className="text-dark font-bold">
//                 Нийт үнэ: <span className="font-bold">₮</span>
//               </div>
//               {product.countInStock !== 0 ? (
//                 <div className="card-actions justify-center mr-2 mt-2">
//                   <AddToCart item={{ ...convertDocToObj(product),
//                     name: '', 
//                     slug: '',
//                     qty: 0,
//                     qtyR: 0,
//                     qtyL: 0,
//                     image: '',
//                     price: 0,
//                     color: '',
//                     visionR: '',
//                     visionL: ''
//                   }}  />
//                 </div>
//               ) : (
//                 <div id="emptyDIV" className="p-5 bg-gray-50 rounded-lg shadow-inner mt-4 text-center">
//                   <img src="http://cityoptic.mn/img/empty-white-box.svg" width="40" alt="" />
//                   <div className="text-pink font-bold">Үлдэгдэл хүрэлцэхгүй байна.</div>
//                   <div className="text-black mt-2 text-sm">
//                     Та дараах <span className="font-bold">70134567</span> утсаар холбогдон лавлана уу!
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-8 ml-24 mr-24 text-sm">
//         <div className="p-8 bg-slate-100">
//           <div className="product-spec">
//             <h3 className="font-bold text-xl mb-4">Дэлгэрэнгүй тайлбар</h3>
//             <ul className="list-disc pl-5 space-y-2">
//               <li className="pb-1 pt-1">1 жилийн хугацаатай.</li>
//               <li className="pb-1 pt-1">Монгол шошготой, манай анхны брэнд.</li>
//               <li className="pb-1 pt-1">Хэт ягаан туяанаас хамгаална.</li>
//               <li className="pb-1 pt-1">Дүрслэлийн алдааг багасгасан.</li>
//               <li className="pb-1 pt-1">Өндөр нарийвчлалтай хараатай.</li>
//               <li className="pb-1 pt-1">Зөөлөн нимгэн материалтай.</li>
//               <li className="pb-1 pt-1">Асфер загвартай, гадаргуутай.</li>
//               <li className="pb-1 pt-1">Тогтмол зүүх бол 6 сарын дараа солихыг зөвлөнө.</li>
//               <li className="pb-1 pt-1">-10.00 хүртэл захиалах боломжтой.</li>
//             </ul>
//           </div>
//         </div>
//         <div className="p-8 bg-slate-100">
//           <div className="product-spec">
//             <h3 className="font-bold text-xl mb-4">Үзүүлэлтүүд</h3>
//             <div className="grid grid-cols-2 gap-0 items-center">
//               <div>
//                 <ul>
//                   <li className="pb-4 pt-4 border-t">BC:</li>
//                   <li className="pb-4 pt-4 border-t">Диаметр:</li>
//                   <li className="pb-4 pt-4 border-t">График диаметр:</li>
//                   <li className="pb-4 pt-4 border-t">Усны агууламж:</li>
//                   <li className="pb-4 pt-4 border-t">Материал:</li>
//                   <li className="pb-4 pt-4 border-t">Үйлдвэсэн улс:</li>
//                   <li className="pb-4 pt-4 border-t">Баглаа:</li>
//                 </ul>
//               </div>
//               <div>
//                 <ul>
//                   <li className="pb-4 pt-4 border-t">{product.bc} мм</li>
//                   <li className="pb-4 pt-4 border-t">{product.dia} мм</li>
//                   <li className="pb-4 pt-4 border-t">{product.graDia} мм</li>
//                   <li className="pb-4 pt-4 border-t">{product.water}%</li>
//                   <li className="pb-4 pt-4 border-t">{product.material}</li>
//                   <li className="pb-4 pt-4 border-t">{product.country}</li>
//                   <li className="pb-4 pt-4 border-t">{product.baglaa} ширхэг</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Tailbar/>
//     </>
//   );
// }


import productService from '@/lib/services/productService';
import ProductDetails from './ProductDetails';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = await productService.getBySlug(params.slug);
  if (!product) {
    return { title: 'Бүтээгдэхүүн олдсонгүй' };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await productService.getBySlug(params.slug);

  if (!product) {
    return <div className="text-center text-xl">Бүтээгдэхүүн олдсонгүй</div>;
  }

  return <ProductDetails product={product} />;
}

