import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: 'Хүргэлтийн хаяг',
}

export default async function ShippingPage() {
  return <Form />
}   