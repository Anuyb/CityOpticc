import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: 'City Optic',
}

export default async function Signin() {
  return <Form />
}