import React from 'react'
import myStyles from './admissionnotice.module.css'
export function Admissionnotice() {
    return (
        <>
            <div className={myStyles.admission_notice}>
                <h1>Admission Notice</h1>
            </div>

            <div className={myStyles.content}>
                <p>No content available right now</p>
            </div>
        </>
    )
}
