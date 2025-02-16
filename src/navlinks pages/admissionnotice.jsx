import React from 'react'
import myStyle from './admissionnotice.module.css'
export function Admissionnotice() {
    return (
        <>
            <div className={myStyle.container}>
                <h2 className={myStyle.section_title}>Admission Notice</h2>

                <div className={myStyle.grid}>
                    <div className={myStyle.contact_info}>
                        <p>No content available right now</p>
                    </div>
                </div>
            </div>
        </>
    )
}
