# Next.js + TypeScript + Tailwind CSS Template

## support

- M1 Mac

## start development server

```sh
yarn dev
```

access to http://localhost:3000/

## environment construction procedure
### create project of Next.js + TypeScript

execute the command

```sh
# yarn
yarn create next-app next-ts-tailwind --typescript

# npm
npx create-next-app@latest --ts
```

 reference: https://nextjs.org/docs/basic-features/typescript

### introduction Tailwind CSS

execute the command

```sh
# yarn
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest

# npm
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

reference: https://fwywd.com/tech/next-tailwind

### create config file of Tailwind CSS

execute the command

```sh
# yarn
yarn tailwindcss init -p

# npm
npx tailwindcss init -p
```

reference: https://fwywd.com/tech/next-tailwind

### edit tailwind.config

add the code

```diff
module.exports = {
+ mode: 'jit',
- purge: [],
+ purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

reference: https://fwywd.com/tech/next-tailwind

### make Tailwind CSS apply globally

edit `pages/_app.tsx`

```diff
- import '../styles/globals.css'
+ import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
```



