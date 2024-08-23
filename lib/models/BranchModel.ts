import mongoose from 'mongoose';

const BranchSchema = new mongoose.Schema(
  {
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: Number, required: true }, 
  schedule: { type: String, required: true },
}, {
  timestamps: true,
})

const BranchModel = 
  mongoose.models.Branch || mongoose.model('Branch', BranchSchema)

export default BranchModel

export type Branch = {
    name: string;
    slug: string;
    image: string;
    location: string;
    phone: Number;
    schedule: string;
    _id?: string;
  }
