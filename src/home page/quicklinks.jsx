import React from 'react'
import { Link } from 'react-router-dom'
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
                            <li><Link to="mailto:budgebudgecollege@gmail.com">budgebudgecollege@gmail.com</Link></li>
                        </div>
                        <div className={myStyles.foot_call}>
                        <i className="ri-phone-fill"></i>
                            <li><Link to="tel:03324701454">033 24701454</Link> | <Link to="tel:03324805168">033 24805168</Link></li>
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
                        <li><Link to="/budgebudgecollege">Home</Link></li>
                        <li><Link to="/coursesoffered">Courses</Link></li>
                        <li><Link to="/admissionnotice">Admission</Link></li>
                        <li><Link to="/notification">Notice</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="mailto:sampadm310@outlook.com">Feedback</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
