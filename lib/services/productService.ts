import {cache} from 'react'
import dbConnect from '../dbConnect'
import ProductModel, { Product } from '../models/ProductModel'
import BranchModel, { Branch } from '../models/BranchModel'

export const revalidate = 3600

const getLatest = cache(async () =>{
    await dbConnect() 
    const products = await ProductModel.find({}).sort({ _id:-1 }).limit(9).lean()
    return products as Product[]
})

const getBySlug = cache(async (slug: string) =>{
    await dbConnect()
    const products = await ProductModel.findOne({slug}).lean()
    return products as Product
}) 

const getBLatest = cache(async () =>{
    await dbConnect() 
    const branchs = await BranchModel.find({}).sort({ _id:1 }).limit(16).lean()
    return branchs as Branch[]
})

const productService = {
    getLatest,
    getBySlug,  
    getBLatest,
}
export default productService