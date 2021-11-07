import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import { BackButton } from '@/components/BackButton'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pathname = router.pathname

  return (
    <>
      <Head>
        <title>Next.js+TypeScript+Tailwind CSS Template</title>
        <meta name='description' content='Template of Next.js+TypeScript+Tailwind CSS' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
      {<>{pathname !== '/' ? <BackButton /> : null}</>}
    </>
  )
}

export default MyApp
