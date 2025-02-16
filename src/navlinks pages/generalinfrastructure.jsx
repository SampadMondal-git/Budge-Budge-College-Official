import React from 'react'
import myStyles from './generalinfrastructure.module.css'
export function Generalinfrastructure() {
    return (
        <>
            <div className={myStyles.container}>
                <h2 className={myStyles.section_title}>General Infrastructure</h2>
                <div className={myStyles.container}>
                    <h2 className={myStyles.section_title}>The Office</h2>
                    <div className={myStyles.grid}>
                        <div className={myStyles.card}>
                            <h3>Account & Cash Section</h3>
                            <div className={myStyles.point}>Air-conditioned entity with main server</div>
                            <div className={myStyles.point}>Customized software for financial management</div>
                            <div className={myStyles.point}>Regular auditing by DPI-recommended auditors</div>
                            <div className={myStyles.point}>E-filing system compliant with government norms</div>
                            <div className={myStyles.point}>Currency counting machine with fake note detection</div>
                        </div>

                        <div className={myStyles.card}>
                            <h3>General Office Section</h3>
                            <div className={myStyles.point}>Manages student activities and university relations</div>
                            <div className={myStyles.point}>Handles examinations and scholarship programs</div>
                            <div className={myStyles.point}>
                                <span className={myStyles.highlight}>IT Infrastructure:</span>
                                <ul className={myStyles.equipment_list}>
                                    <li>08 Desktop Computers</li>
                                    <li>Laser Printers</li>
                                    <li>Multifunctional Copier-Scanner</li>
                                    <li>Dot Matrix Printers</li>
                                </ul>
                            </div>
                            <div className={myStyles.point}>32 KVA Generator + Centralized UPS</div>
                            <div className={myStyles.point}>Kent UV Water Purification System</div>
                        </div>
                    </div>

                    <h2 className={myStyles.section_title}>College Infrastructure</h2>
                    <div className={myStyles.grid}>
                        <div className={myStyles.card}>
                            <h3>Educational Facilities</h3>
                            <div className={myStyles.point}>28 Classrooms + 9 Specialized Laboratories</div>
                            <div className={myStyles.point}>Smart Classrooms with Interactive Boards</div>
                            <div className={myStyles.point}>Biosciences Research Laboratory</div>
                            <div className={myStyles.point}>GIS Laboratory with Spatial Analysis Tools</div>
                            <div className={myStyles.point}>80-seat Convention Center with Smart Tech</div>
                        </div>

                        <div className={myStyles.card}>
                            <h3>Student-Faculty Welfare</h3>
                            <div className={myStyles.point}>E-enabled Teachers' Lounge with RO Water</div>
                            <div className={myStyles.point}>Separate Common Rooms for Boys/Girls</div>
                            <div className={myStyles.point}>Medical Emergency Room with First Aid</div>
                            <div className={myStyles.point}>Hygienic Canteen with Subsidized Meals</div>
                            <div className={myStyles.point}>Modern Gymnasium with Fitness Equipment</div>
                        </div>

                        <div className={myStyles.card}>
                            <h3>Miscellaneous Facilities</h3>
                            <div className={myStyles.point}>Complete Power Backup System</div>
                            <div className={myStyles.point}>28 CCTV Security Surveillance</div>
                            <div className={myStyles.point}>Campus-wide LAN Connectivity</div>
                            <div className={myStyles.point}>Green Campus Initiatives</div>
                            <div className={myStyles.point}>Disability-friendly Infrastructure</div>
                        </div>
                    </div>

                    <h2 className={myStyles.section_title}>Special Features</h2>
                    <div className={myStyles.grid}>
                        <div className={myStyles.card}>
                            <h3>Technology Integration</h3>
                            <div className={myStyles.point}>40+ Workstations Across Campus</div>
                            <div className={myStyles.point}>Server-managed LAN Infrastructure</div>
                            <div className={myStyles.point}>Digital Surveillance System</div>
                            <div className={myStyles.point}>E-learning Management System</div>
                        </div>

                        <div className={myStyles.card}>
                            <h3>Sports & Wellness</h3>
                            <div className={myStyles.point}>Annual Sports Meet</div>
                            <div className={myStyles.point}>University-level Athletes Program</div>
                            <div className={myStyles.point}>Fitness Training Facilities</div>
                            <div className={myStyles.point}>Outdoor Sports Complex</div>
                        </div>
                    </div>
                </div>
            </div>
            </>
            )
}
