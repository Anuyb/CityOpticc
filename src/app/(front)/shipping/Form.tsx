'use client'

import useCartService from "@/lib/hooks/useCartStore"
import { ShippingAddress } from "@/lib/models/OrderModel"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { SubmitHandler, useForm, ValidationRule } from "react-hook-form"
import CheckoutSteps from "../../../../components/CheckoutSteps"

const Form = () => {
  const router = useRouter()
  const { saveShippingAddrress, shippingAddress } = useCartService  ()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ShippingAddress>({
    defaultValues: {
      fullName: '',
      address: '',
      district: '',
      phoneNumber: '',
    },
  })
  useEffect(() => {
    setValue('fullName', shippingAddress.fullName)
    setValue('address', shippingAddress.address)
    setValue('district', shippingAddress.district)
    setValue('phoneNumber', shippingAddress.phoneNumber)
  }, [setValue, shippingAddress])

  const formSubmit: SubmitHandler<ShippingAddress> = async (form) => {
    saveShippingAddrress(form)
    router.push('/payment') 
  }
  const FormInput = ({
    id,
    name,
    required,
    pattern,
  }: {
    id: keyof ShippingAddress
    name: string
    required?: boolean
    pattern?: ValidationRule<RegExp>
  }) => (
    <div className="mb-2">
      <label className="label" htmlFor={id}>
        {name}
      </label>
      <input
        type="text"
        id={id}
        {...register(id, {
          required: required && `${name} оруулах шаардлагатай`,
          pattern,
        })}
        className="input input-bordered w-full max-w-sm"
      />
      {errors[id]?.message && (
        <div className="text-error">{errors[id]?.message}</div>
      )}
    </div>
  )

  return (
    <div>
      <CheckoutSteps current={1} />
      <div className="max-w-sm mx-auto card bg-base-300 my-4">
        <div className="card-body">
          <h1 className="card-title">Хүргэлтийн хаяг</h1>
          <form onSubmit={handleSubmit(formSubmit)}>
            <FormInput name="Нэр" id="fullName" required />
            <FormInput name="Дүүрэг" id="district" required />
            <FormInput name="Хаяг" id="address" required />
            <FormInput name="Утасны дугаар" id="phoneNumber" required />
            <div className="my-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
              >
                {isSubmitting && (
                  <span className="loading loading-spinner"></span>
                )}
                Дараагийнх
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Form