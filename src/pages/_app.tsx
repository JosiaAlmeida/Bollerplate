import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from './styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avancado -- Boilerplate</title>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
