import React from 'react'
import v1 from "./Component/images/v2.mp4"
import ReactPlayer from 'react-player'
import styles from '../styles/Home.module.css'
import New from './Component/New'

function Home() {
  return (
    <div className={styles.Home} >
        <video src={v1} autoPlay={true} muted={true} width={"100%"} controls={false} 
         loop={true}  />
       
    </div>
  )
}

export default Home