import React from 'react'
import myStyles from './intakecapacity.module.css'

export function Intakecapacity() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Intake Capacity for the Academic Session 2024-2025</h2>
            
            <div className={myStyles.grid}>
                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Bengali Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 147</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Education Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 77</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>English Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 45</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Geography Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 77</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>History Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 112</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Philosophy Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 45</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Political Science Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 112</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Economics Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 31</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Botany Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 24</p>
                        <p><span className={myStyles.highlight}>Category:</span> Science</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Food & Nutrition Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 32</p>
                        <p><span className={myStyles.highlight}>Category:</span> Science</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Zoology Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 44</p>
                        <p><span className={myStyles.highlight}>Category:</span> Science</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>B.Com. Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 176</p>
                        <p><span className={myStyles.highlight}>Category:</span> Commerce</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>B.Sc. General</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 42</p>
                        <p><span className={myStyles.highlight}>Category:</span> Science</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>B.A. General</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 895</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>B.Com. General</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 72</p>
                        <p><span className={myStyles.highlight}>Category:</span> Commerce</p>
                    </div>
                </div>
            </div>

            <div className={myStyles.notes}>
                <p>* Reservation of seats for SC, ST, OBC-A, OBC-B categories as per Government norms</p>
                <p>** PWD reservation applicable in all categories as per Government rules</p>
            </div>
        </div>
    )
}