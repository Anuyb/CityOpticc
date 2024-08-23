import data from "@/app/data";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../../lib/dbConnect";
import ProductModel from "../../../../../lib/models/ProductModel";
import UserModel from "../../../../../lib/models/UserModel";
import BranchModel from "@/lib/models/BranchModel";

export const GET = async (request : NextRequest) =>{
    const {users, products, branchs} = data

    await dbConnect()
    
    await UserModel.deleteMany()
    await UserModel.insertMany(users)

    await ProductModel.deleteMany()
    await ProductModel.insertMany(products)

    await BranchModel.deleteMany()
    await BranchModel.insertMany(branchs)

    return NextResponse.json({
        message:'seeded successfully',
        users,
        products,
        branchs,
    })
}