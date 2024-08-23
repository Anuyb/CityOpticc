import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  category1: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  banner: { type: String },
  countInStock: { type: Number, required: true, default: 0 },
  bc: { type: String },  
  dia: { type: String },  
  pow: { type: String },  
  cylinder: { type: String },  
  axis: { type: String },  
  add: { type: String }, 
  isFeatured: { type: Boolean, default: false },
  graDia: { type: Number },
  water: { type: Number },  
  material: { type: String }, 
  country: { type: String }, 
  baglaa: { type: Number },  
}, {
  timestamps: true,
})

const ProductModel = 
  mongoose.models.Product || mongoose.model('Product', ProductSchema)

export default ProductModel

export type Product = {
    baner: string | undefined;
    name: string;
    slug: string;
    category: string;
    category1: string;
    image: string;
    price: number;
    brand: string;
    description: string;
    banner: string;
    countInStock: number;
    bc: string;
    dia: string;
    pow: string;
    cylinder: string;
    axis: string;
    add: string;
    isFeatured: boolean;
    _id?: string;
    graDia: number;
    water: number;
    material: string;
    country: string;
    baglaa: number;
  }
