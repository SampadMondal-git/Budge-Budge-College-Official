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
                        <div className={myStyle.contact_info}>
                            <p>7, Deshbandhu Chittaranjan Road, Budge Budge, 24 Parganas (South), Kolkata - 700137</p>
                        </div>
                    </div>

                    <div className={myStyle.card}>
                        <h3>Telephone</h3>
                        <div className={myStyle.contact_info}>
                            <p>033 24701454</p>
                            <p>033 24805168</p>
                        </div>
                    </div>

                    <div className={myStyle.card}>
                        <h3>Email</h3>
                        <div className={myStyle.contact_info}>
                            <a href="mailto:budgebudgecollege@gmail.com">
                                budgebudgecollege@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
