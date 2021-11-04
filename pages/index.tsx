import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='sm:px-24 py-24 bg-gradient-to-r from-green-400 to-blue-500 min-h-screen text-gray-50'>
      <div className='mb-5'>
        <h2 className='sm:text-2xl text-md text-center'>
          Next.js+TypeScript+Tailwind CSS Template
        </h2>
      </div>
      <div className='w-1/4 mx-auto sm:text-lg text-sm'>
        <ul className='mt-3 list-disc list-inside'>
          <li className='cursor-pointer hover:underline'>
            <Link href='login'>
              <a>Login Page</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
