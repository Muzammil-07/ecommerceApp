import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Navbar from './Component/Navbar'
import Topbar from './Component/Topbar'
import Home from './Home'
import Footer from './Component/Footer'
import { useRouter } from 'next/router'
import MainContent from './Component/MainContent'

const Layout = ({ children }) => {
  const [home, setHome] = useState(true)
  const router = useRouter();
  console.log(router.route)
  useEffect(() => {
    if (router.route != "/") {
      setHome(false)
    }

  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"></script>
      </Head>
      <div className={styles.parent}>
        <div className={styles.topBar}>
          <Topbar />
        </div>
        <div className={styles.crousal}>
          <Home />
        </div>
        <div className={styles.mainContent}>
         <MainContent/>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>



      </div>
      <Navbar/> 
      {/* <Topbar/> 
 
 {
   home?  <Home/> :""
  
 }
    {children}
    <Footer/> */}

    </div>
  )
}

export default Layout