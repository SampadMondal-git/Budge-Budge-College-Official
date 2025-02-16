import React from "react";
import myStyles from "./aims&objective.module.css";

export function Aimsandobjective() {
    return (
        <div className={myStyles.container}>
        <h2 className={myStyles.section_title}>Aims & Objectives</h2>
        
        <div className={myStyles.grid}>
            <div className={myStyles.card}>
                <h3>Educational Philosophy</h3>
                <div className={myStyles.point}>
                    <p>The College aims to foster an atmosphere of all-round development amongst the students through:</p>
                    <ul className={myStyles.equipment_list}>
                        <li>Innovative teaching-learning processes</li>
                        <li>Modern academic curriculum</li>
                        <li>Vibrant campus activities</li>
                        <li>Comprehensive co-curricular programs</li>
                    </ul>
                </div>
            </div>

            <div className={myStyles.card}>
                <h3>Core Objectives</h3>
                <div className={myStyles.point}>
                    <p><span className={myStyles.highlight}>1. Value-Based Education:</span> 
                        Inculcate moral values and nurture student potential across all dimensions
                    </p>
                    <p><span className={myStyles.highlight}>2. Digital Empowerment:</span> 
                        Provide access to modern ICT resources and learning materials
                    </p>
                    <p><span className={myStyles.highlight}>3. Social Commitment:</span> 
                        Empower rural and female students for better societal participation
                    </p>
                </div>

                <div className={myStyles.point} style={{backgroundColor: "#e8f4fc", marginTop: "20px"}}>
                    <p>🌟 Special Focus: Upliftment of female students from South 24 Parganas region</p>
                </div>
            </div>
        </div>
    </div>
    );
}
