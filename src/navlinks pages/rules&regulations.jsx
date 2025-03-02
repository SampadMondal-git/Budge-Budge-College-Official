import React from "react";
import myStyles from "./rules&regulations.module.css";

export function Rulesandregulations() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Rules & Regulations</h2>

            <div className={myStyles.grid}>
                <div className={myStyles.card}>
                    <h3>General Conduct Expectations</h3>
                    <div className={myStyles.point}>
                        <p className={myStyles.highlight}>Students must maintain discipline and peace in:</p>
                        <ul className={myStyles.equipment_list}>
                            <li>Class rooms</li>
                            <li>College office</li>
                            <li>Laboratories</li>
                            <li>Library</li>
                            <li>College campus</li>
                        </ul>
                    </div>

                    <div className={myStyles.point}>
                        <p className={myStyles.highlight}>Key Behavioral Expectations:</p>
                        <ul>
                            <li>Maintain modesty and dignity at all times</li>
                            <li>Observe silence in corridors and during off-periods</li>
                            <li>Preserve institutional reputation in the locality</li>
                        </ul>
                    </div>

                    <div className={myStyles.point} style={{backgroundColor: "#ffe6e6", marginTop: "20px"}}>
                        <p>⚠️ Any behavior tarnishing the college's reputation will lead to immediate disciplinary review</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3>Essential Rules & Regulations</h3>
                    <div className={myStyles.point}>
                        <p><span className={myStyles.highlight}>1. Respectful Conduct:</span> Courtesy towards staff and peers on/off campus</p>
                        <p><span className={myStyles.highlight}>2. Class Discipline:</span>
                            <ul>
                                <li>Be seated before bell rings</li>
                                <li>No unauthorized entry/exit</li>
                                <li>Mandatory regular attendance</li>
                            </ul>
                        </p>
                        <p><span className={myStyles.highlight}>3. Movement Restrictions:</span> No corridor loitering</p>
                        <p><span className={myStyles.highlight}>4. Collective Responsibility:</span> Class accountability for member conduct</p>
                    </div>

                    <div className={myStyles.point} style={{marginTop: "15px"}}>
                        <p><span className={myStyles.highlight}>5. Self Governance:</span> Maintain order during teacher absences</p>
                        <p><span className={myStyles.highlight}>6. Academic Integrity:</span> Strict prohibition of exam malpractice</p>
                        <p><span className={myStyles.highlight}>7. Property Care:</span> Proper treatment of college assets</p>
                        <p><span className={myStyles.highlight}>8. Library Etiquette:</span> Absolute no-gossiping policy</p>
                        <p><span className={myStyles.highlight}>9. Disciplinary Actions:</span> Strict handling of rule violations</p>
                    </div>

                    <div className={myStyles.point} style={{backgroundColor: "#ffe6e6", marginTop: "20px"}}>
                        <p>⚠️ Serious breaches may lead to suspension, expulsion, or legal action as per college regulations</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
