import React from 'react'
import './campus.css'

export function Campus() {
  return (
    <>
    <div className="campus">
        <div className="campus-photo">
            <img src="images/smokefree-zone.jpg" alt="smoking free zone" />
        </div>
        <div className="campus-photo">
            <img src="images/anti-ragging.jpg" alt="ragging free zone" />
        </div>
        <div className="campus-photo">
            <img src="images/plastic-free.jpg" alt="plastic free zone" />
        </div>
        <div className="campus-photo">
            <img src="images/wifi.jpg" alt="free wifi zone" />
        </div>
    </div>
    </>
  )
}
