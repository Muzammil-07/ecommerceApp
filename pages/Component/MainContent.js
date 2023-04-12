import React from 'react'
import style from '../../styles/content.module.css'
import img1 from '../Component/images/men/2.jpg'
import img2 from '../Component/images/men/3.jpg'
import img3 from '../Component/images/men/4.jpg'

import Image from 'next/image'


const MainContent = () => {
  return (
    <div className={style.parent}>
        <div className={style.cat1}> 
        <Image className={style.img} src={img1} alt='img1'/>
        <h2 className={style.label}>Normal</h2>
        </div>
        <div className={style.cat2}> </div>
        <div className={style.cat3}> </div>
        <div className={style.cat4}> </div>
        <div className={style.p1}> </div>
        <div className={style.p2}> </div>
        <div className={style.p3}> </div>
        <div className={style.p4}> </div>


    </div>
  )
}

export default MainContent