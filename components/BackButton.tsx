import Link from 'next/link'

export const BackButton = () => {
  return (
    <button className='fixed top-10 left-10'>
      <Link href='/'>
        <a>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 inline mr-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M11 19l-7-7 7-7m8 14l-7-7 7-7'
            />
          </svg>
          <span className='align-bottom'>back</span>
        </a>
      </Link>
    </button>
  )
}
