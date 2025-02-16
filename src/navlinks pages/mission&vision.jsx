import React from "react";
import myStyles from "./mission&vision.module.css";

export function Missionandvision() {
    return (
        <div className={myStyles.container}>
        <h2 className={myStyles.section_title}>Vision & Mission</h2>
        
        <div className={myStyles.grid}>
            <div className={myStyles.card}>
                <h3>Our Vision</h3>
                <div className={myStyles.point}>
                    <p>To create self-reliant individuals who embody:</p>
                    <ul className={myStyles.equipment_list}>
                        <li>Love for knowledge</li>
                        <li>Holistic inclusive education</li>
                        <li>Social responsibility</li>
                        <li>Community development ethos</li>
                    </ul>
                    <p className={myStyles.highlight} style={{marginTop: "15px"}}>
                        "Empowering every stratum of society to create ideal citizens"
                    </p>
                </div>
            </div>

            <div className={myStyles.card}>
                <h3>Our Mission</h3>
                <div className={myStyles.point}>
                    <p>Pursuing excellence in higher education through:</p>
                    <ul className={myStyles.equipment_list}>
                        <li>Coordinated teacher-student-staff collaboration</li>
                        <li>Comprehensive academic &amp; curricular development</li>
                        <li>Innovative pedagogical approaches</li>
                        <li>Gender-sensitive empowerment programs</li>
                    </ul>
                </div>

                <div className={myStyles.point} style={{marginTop: "20px"}}>
                    <p className={myStyles.highlight}>Key Focus Areas:</p>
                    <ul>
                        <li>Developing analytical &amp; rational thinking</li>
                        <li>Fostering progressive outlook</li>
                        <li>Prioritizing women's education</li>
                        <li>Building responsible citizenship</li>
                    </ul>
                </div>

                <div className={myStyles.point} style={{backgroundColor: "#f0f8ff", marginTop: "20px"}}>
                    <p>🌟 Special Emphasis: Creating gender-equitable learning environment</p>
                </div>
            </div>
        </div>
    </div>
    );
}
