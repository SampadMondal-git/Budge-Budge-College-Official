import React from 'react'
import myStyles from './alumni.module.css'

export function Alumni() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Alumni</h2>

            <div className={myStyles.grid}>
                <div className={myStyles.card}>
                    <h3>College Address</h3>
                    <div className={myStyles.point}>
                        <p>Budge Budge College</p>
                        <p>7, Deshbandhu Chittaranjan Road</p>
                        <p>24 Parganas (South), Kolkata 700137</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3>Contact Details</h3>
                    <div className={myStyles.point}>
                        <p><span className={myStyles.highlight}>Telephone: </span>
                            <a href="tel:03324701454">033 24701454</a>,
                            <a href="tel:03324805168">033 24805168</a>
                        </p>
                    </div>
                    <div className={myStyles.point}>
                        <p><span className={myStyles.highlight}>Email: </span>
                            <a href="mailto:budgebudgecollege@gmail.com">budgebudgecollege@gmail.com</a>
                        </p>
                    </div>
                    <h3>Office Hours</h3>
                    <div className={myStyles.point}>
                        <p>Monday-Friday: 10:30 AM - 5:00 PM</p>
                    </div>
                    <div className={myStyles.point}>
                        <p>Saturday: 10:30 AM - 2:00 PM</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3>Alumni Details Request</h3>
                    <div className={myStyles.point}>
                        <p>Please provide following details to {''}
                            <a href="mailto:budgebudgecollege@gmail.com">
                                budgebudgecollege@gmail.com
                            </a>:
                        </p>
                        <ul className={myStyles.equipment_list}>
                            <li><span className={myStyles.highlight}>Name</span></li>
                            <li><span className={myStyles.highlight}>Department & Stream</span></li>
                            <li><span className={myStyles.highlight}>Year of Graduation</span></li>
                            <li><span className={myStyles.highlight}>Occupation Details</span></li>
                            <li><span className={myStyles.highlight}>Contact Number</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
