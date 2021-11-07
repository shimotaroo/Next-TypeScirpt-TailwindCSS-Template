import { NextPage } from 'next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RequiredMark } from '@/components/RequiredMark'
// ErrorMessageComponent
import { ErrorMessage } from '@hookform/error-message'

type Inputs = {
  email: string
  password: string
}

const LoginErrorMessage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ criteriaMode: 'all' })

  const handleLoginSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data))

  return (
    <div className='h-screen bg-gray-50'>
      <div className='w-5/6 sm:w-1/3 mx-auto rounded-xl py-24'>
        <h2 className='text-center text-3xl py-10'>Login</h2>
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <div className='mb-5'>
            <div className='flex justify-start my-2'>
              <p>メールアドレス</p>
              <RequiredMark />
            </div>
            <input
              {...register('email', {
                required: '必須入力です。',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'メールアドレスの形式で入力してください。',
                },
              })}
              className='p-2 border rounded-md w-full outline-none'
            />
            <ErrorMessage
              errors={errors}
              name='email'
              render={({ message }) => <p className='py-3 text-red-500'>{message}</p>}
            />
          </div>
          <div className='mb-5'>
            <div className='flex justify-start my-2'>
              <p>パスワード</p>
              <RequiredMark />
            </div>
            <small className='mb-2 text-gray-500 block'>
              8文字以上の半角英数字で入力してください
            </small>
            <input
              {...register('password', {
                required: '必須入力です。',
                pattern: {
                  value: /^([a-zA-Z0-9]{8,})$/,
                  message: '8文字以上の半角英数字で入力してください',
                },
              })}
              className='p-2 border rounded-md w-full outline-none'
            />
            <ErrorMessage
              errors={errors}
              name='password'
              render={({ message }) => <p className='py-3 text-red-500'>{message}</p>}
            />
          </div>
          <div className='text-center'>
            <input
              type='submit'
              value='ログイン'
              className='bg-gray-700 text-gray-50 py-3 sm:px-20 px-10 mt-8 rounded-md cursor-pointer drop-shadow-md hover:bg-gray-600'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginErrorMessage
