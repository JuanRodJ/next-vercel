import { NextPage } from 'next';
import '../styles/globals.css'
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';

// NOTA: ReactNode y JSX.Element son lo mismo

type NextPageWithLayout = NextPage & {
    getLayout?: (page: JSX.Element) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  
  // Si existe, retorna el layout. Sino, la página normal.
  const getLayout = Component.getLayout || ((page) => page);

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )

  return getLayout(<Component {...pageProps} />)
}
