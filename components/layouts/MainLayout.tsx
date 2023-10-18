import Head from 'next/head';
import styles from './MainLayout.module.css';
import { Navbar } from '../Navbar';
import { FC, PropsWithChildren } from 'react';



export const MainLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={styles.container}>
          
          <Head>
            <title>Home - Juan</title>
            <meta name="description" content='Home Page' />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* <Head>
            <meta name="keywords" content="juan, rodriguez, curso, next.js" />
          </Head> */}
    
          <Navbar />
    
          <main className={styles.main}>
            {children}
          </main>
        </div>
      )
}
