import React from 'react';
import myStyles from './officeinfrastructure.module.css';

export function Officeinfrastructure() {
    return (
        <>
            <div className={myStyles.container}>
                <h2 className={myStyles.section_title}>Office Infrastructure</h2>
                <div className={myStyles.grid}>
                    <div className={myStyles.card}>
                        <h3>Account & Cash Section</h3>
                        <div className={myStyles.point}>Air-conditioned facility with main server for optimal performance</div>
                        <div className={myStyles.point}>Customized financial management software ensuring accuracy and efficiency</div>
                        <div className={myStyles.point}>DPI-approved auditing system for transparent financial practices</div>
                        <div className={myStyles.point}>Government-compliant e-filing system for seamless tax management</div>
                        <div className={`${myStyles.point} ${myStyles.highlight}`}>
                            Currency counting machine with fake note detection for enhanced security
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3>General Office Section</h3>
                        <div className={myStyles.point}>Efficiently manages records of over 3000 students</div>
                        <div className={myStyles.point}>Coordinates university exams & registrations smoothly</div>
                        <div className={myStyles.point}>Handles scholarship programs to support deserving students</div>
                        <div className={myStyles.point}>
                            <span className={myStyles.highlight}>IT Infrastructure:</span>
                            <ul className={myStyles.equipment_list}>
                                <li>08 Desktop Computers with internet and LAN connectivity</li>
                                <li>02 High-speed Laser Printers for efficient document processing</li>
                                <li>Multifunctional Copier-Scanner for versatile office tasks</li>
                                <li>02 Dot Matrix Printers for specialized printing needs</li>
                                <li>32 KVA Generator Backup ensuring uninterrupted power supply</li>
                                <li>Centralized UPS System for consistent and reliable operations</li>
                            </ul>
                        </div>
                        <div className={myStyles.point}>KENT UV Water Purification System for safe drinking water</div>
                    </div>

                    <div className={myStyles.card}>
                        <h3>Server Infrastructure</h3>
                        <div className={myStyles.point}>Powered by Dell PowerEdge T610 Main Server</div>
                        <div className={myStyles.server_features}>
                            <span className={myStyles.highlight}>Key Features:</span>
                            <ul className={myStyles.equipment_list}>
                                <li>Dual-socket Intel Xeon processors for high-performance computing</li>
                                <li>Advanced virtualization capabilities for efficient resource management</li>
                                <li>Energy-optimized technology reducing power consumption</li>
                                <li>Lifecycle Controller simplifying system management tasks</li>
                                <li>Integrated LCD monitoring system for real-time system health checks</li>
                                <li>Supports mission-critical applications ensuring data integrity and security</li>
                            </ul>
                        </div>
                        <div className={myStyles.point}>Manages entire LAN network ensuring seamless connectivity</div>
                        <div className={myStyles.point}>CCTV surveillance integration for enhanced security monitoring</div>
                        <div className={myStyles.point}>Financial transaction management with high-level security protocols</div>
                    </div>
                </div>
            </div>
        </>
    )
}
