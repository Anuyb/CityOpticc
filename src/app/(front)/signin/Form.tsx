'use client'
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
    email: string 
    password: string
}
const Form = () => {
    const { data: session } = useSession()

    const params = useSearchParams()
    let callbackUrl = params.get
    ('callbackUrl') || '/'
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>({
        defaultValues: {
            email:'',
            password: '',
        },
    })
    
    useEffect(() =>{
        if (session && session.user) {
            router.push(callbackUrl)
        }
    },[callbackUrl, params, router, session])

    const formSubmit: SubmitHandler<Inputs> = async (form) => {
        const { email, password } = form
        signIn('credentials', {
          email,
          password,
        })
      }
      return (
        <div className="max-w-sm  mx-auto card bg-base-300 my-4">
          <div className="card-body">
            <h1 className="card-title">Нэвтрэх</h1>
            {params.get('error') && (
              <div className="alert text-error">
                {params.get('error') === 'CredentialsSignin'
                  ? 'И-мэйл эсвэл нууц үг тохирохгүй байна'
                  : params.get('error')}
              </div>
            )}
            {params.get('success') && (
              <div className="alert text-success">{params.get('success')}</div>
            )}
            <form onSubmit={handleSubmit(formSubmit)}>
              <div className="my-2">
                <label className="label" htmlFor="email">
                  И-мэйл
                </label>
                <input
                  type="text"
                  id="email"
                  {...register('email', {
                    required: 'И-мэйлээ оруулна уу',
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'И-мэйл тохирохгүй байна',
                    },
                  })}
                  className="input input-bordered w-full max-w-sm"
                />
                {errors.email?.message && (
                  <div className="text-er ror">{errors.email.message}</div>
                )}
              </div>
              <div className="my-2">
                <label className="label" htmlFor="password">
                  Нууц үг
                </label>
                <input
                  type="password"
                  id="password"
                  {...register('password', {
                    required: 'Нууц үг оруулна уу',
                  })}
                  className="input input-bordered w-full max-w-sm"
                />
                {errors.password?.message && (
                  <div className="text-error">{errors.password.message}</div>
                )}
              </div>
              <div className="my-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting && (
                    <span className="loading loading-spinner"></span>
                  )}
                  Нэвтрэх
                </button>
              </div>
            </form>
            <div>
              Бүртгэл үүсгэх үү?{' '}
              <Link className="link" href={`/register?callbackUrl=${callbackUrl}`}>
                Бүртгүүлэх
              </Link>
            </div>
          </div>
        </div>
      )
} 
export default Form