import { NextPage } from 'next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RequiredMark } from '@/components/RequiredMark'

type Inputs = {
  email: string
  password: string
}

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ criteriaMode: 'all' })

  const handleLoginSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data))

  return (
    <div className='h-screen bg-gray-50'>
      <div className='w-5/6 sm:w-1/3 mx-auto rounded-xl pt-24'>
        <h2 className='text-center text-3xl py-10'>Login</h2>
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <div className='mb-5'>
            <div className=' flex justify-start my-2'>
              <p className=''>メールアドレス</p>
              <RequiredMark />
            </div>
            <input
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              className='p-2 border rounded-md w-full outline-none'
            />
            {errors.email?.types?.required && <p className='py-3 text-red-500'>必須入力です。</p>}
            {errors.email?.types?.pattern && (
              <p className='py-3 text-red-500'>メールアドレスの形式で入力してください。</p>
            )}
          </div>
          <div className='mb-5'>
            <div className=' flex justify-start my-2'>
              <p className=''>パスワード</p>
              <RequiredMark />
            </div>
            <small className='mb-2 text-gray-500 block'>
              8文字以上の半角英数字で入力してください
            </small>
            <input
              {...register('password', { required: true, pattern: /^([a-zA-Z0-9]{8,})$/ })}
              className='p-2 border rounded-md w-full outline-none'
            />
            {errors.password?.types?.required && (
              <p className='py-3 text-red-500'>必須入力です。</p>
            )}
            {errors.password?.types?.pattern && (
              <p className='py-3 text-red-500'>8文字以上の半角英数字で入力してください。</p>
            )}
          </div>
          <div className='text-center'>
            <input
              type='submit'
              value='ログイン'
              className='bg-gray-700 text-gray-50 py-3 sm:px-20 px-10 mt-8 rounded-md'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
