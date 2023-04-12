import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import pic1 from '../Component/images/logo1.png'
import styles from "../../styles/Home.module.css"
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={`${styles.nav} bg-danger bg-opacity-25`}>
            <div className='row '>
                <div className='col-5  h-50 mt-5'>
                    <div className='d-flex justify-content-evenly  p-2'>
                        <button className={`${styles.new} btn btn-link-light text-white`} >New In</button>
                        <button className={`${styles.new} btn btn-link-light text-white`} >Shop</button>
                        <button className={`${styles.new} btn btn-link-light text-white`}>Gallery</button>
                        <button className={`${styles.new} btn btn-link-light text-white`}>About</button>
                    </div>

                </div>
                  <div className='col-2  mt-5 ' style={{display:"flex" ,justifyContent:"center"}}>
                    <Image src={pic1} width={140} height={30} quality={75} alt={"logo"}  />
                  </div>
                  <div className='col-4 bg-light-50 mt-5 '>
                    <div className='d-flex justify-content-evenly  p-2'>
                        <Link  className={`${styles.new}`} href={"/"}>
                        Home
                        </Link>
                        <button className={`${styles.new} btn btn-link-light text-white`}>Shop</button>
                        <button className={`${styles.new} btn btn-link-light text-white`}>Gallery</button>
                        <button className={`${styles.new} btn btn-link-light text-white`}>About</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar