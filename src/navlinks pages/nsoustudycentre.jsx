import React from 'react'
import myStyles from './nsoustudycentre.module.css'

export function Nsoustudycentre() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>NSOU Study Centre</h2>

            <div className={myStyles.grid}>
                <div className={myStyles.card}>
                    <h3>NSOU Study Centre</h3>
                    <div className={myStyles.point}>
                        <p>
                            Budge Budge College collaborates with Netaji Subhas Open University (NSOU)
                            to offer Post Graduate courses through distance mode since July 2017.
                        </p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3>Available PG Courses</h3>
                    <div className={myStyles.point}>
                        <ul className={myStyles.equipment_list}>
                            <li>Bengali</li>
                            <li>English</li>
                            <li>Education</li>
                            <li>History</li>
                            <li>Political Science</li>
                            <li>Public Administration</li>
                            <li>Social Work</li>
                            <li>English Language Teaching</li>
                            <li>Commerce</li>
                        </ul>
                    </div>
                    <div className={myStyles.point}>
                        <p><span className={myStyles.highlight}>Official Website: </span>
                            <a href="https://www.nsou.ac.in/">https://www.nsou.ac.in/</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}