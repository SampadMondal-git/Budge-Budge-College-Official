import React from 'react'
import myStyles from './campus.module.css'
import smokefreezone from './images/smokefree-zone.jpg'
import raggingfreezone from './images/anti-ragging.jpg'
import plasticfreezone from './images/plastic-free.jpg'
import freewifizone from './images/wifi.jpg'
export function Campus() {
  return (
    <>
    <div className={myStyles.campus}>
        <div className={myStyles.campus_photo}>
            <img src={smokefreezone} alt="smoking free zone" />
        </div>
        <div className={myStyles.campus_photo}>
            <img src={raggingfreezone} alt="ragging free zone" />
        </div>
        <div className={myStyles.campus_photo}>
            <img src={plasticfreezone} alt="plastic free zone" />
        </div>
        <div className={myStyles.campus_photo}>
            <img src={freewifizone} alt="free wifi zone" />
        </div>
    </div>
    </>
  )
}
