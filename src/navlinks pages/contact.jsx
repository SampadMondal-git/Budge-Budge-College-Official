import React from 'react'
import myStyle from './contact.module.css'
export function Contact() {
    return (
        <>
            <div className={myStyle.container}>
                <h2 className={myStyle.section_title}>Contact Us</h2>

                <div className={myStyle.grid}>
                    <div className={myStyle.card}>
                        <h3>Address</h3>
                        <div className={myStyle.point}>
                            <p>7, Deshbandhu Chittaranjan Road, Budge Budge, 24 Parganas (South), Kolkata - 700137</p>
                        </div>
                    </div>

                    <div className={myStyle.card}>
                        <h3>Telephone</h3>
                        <div className={myStyle.point}>
                            <p><span className={myStyle.highlight}>Telephone: </span>
                                <a href="tel:03324701454">033 24701454</a>,
                                <a href="tel:03324805168">033 24805168</a>
                            </p>
                        </div>
                    </div>

                    <div className={myStyle.card}>
                        <h3>Email</h3>
                        <div className={myStyle.point}>
                            <p><span className={myStyle.highlight}>Email: </span>
                                <a href="mailto:budgebudgecollege@gmail.com">budgebudgecollege@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
