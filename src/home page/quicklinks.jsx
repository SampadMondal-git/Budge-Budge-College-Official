import React from 'react'
import myStyles from './quicklinks.module.css'

export function Quicklinks() {
    return (
        <>
            <div className={myStyles.links_section}>
                <div className={myStyles.questions}>
                    <h1>Have Questions?</h1>
                    <div className={myStyles.contact_foot}>
                        <div className={myStyles.foot_location}>
                        <i className="ri-map-pin-user-fill"></i>
                            <p>7, Deshbandhu Chittaranjan Road, Budge Budge, 24 Parganas (South), Kolkata - 700137 </p>
                        </div>
                        <div className={myStyles.foot_email}>
                        <i className="ri-message-3-fill"></i>
                            <p>budgebudgecollege@gmail.com</p>
                        </div>
                        <div className={myStyles.foot_call}>
                        <i className="ri-phone-fill"></i>
                            <p>033 24701454 | 033 24805168</p>
                        </div>
                    </div>
                </div>
                <div className={myStyles.location}>
                    <h1>Location</h1>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.4268636368583!2d88.18944770000002!3d22.4881622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027dbe3883acf3%3A0x457fd9ee56f8d738!2sBudge%20Budge%20College!5e0!3m2!1sen!2sin!4v1725213824188!5m2!1sen!2sin"
                        width="500" height="180" allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" title="Location of Budge Budge College"></iframe>
                </div>
                <div className={myStyles.links}>
                    <h1>Quick Links</h1>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Courses</a></li>
                        <li><a href="/">Admission</a></li>
                        <li><a href="/">Notice</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
