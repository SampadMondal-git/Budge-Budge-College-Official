import React from 'react'
import myStyles from './feedback.module.css'
//feedback pdf
import feedbackPdf from '../Pdf files/Feedback/1.4.1 Feedback 2023-2024 (1)-1.pdf'
import feedbackPdf2 from '../Pdf files/Feedback/1.4.1-website hosting-22-23.pdf'
import feedbackPdf3 from '../Pdf files/Feedback/1.4.1-website hosting-21-22.pdf'
import feedbackPdf4 from '../Pdf files/Feedback/1.4.1-website hosting-20-21.pdf'

export function Feedback() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Student Feedback System</h2>

            <div className={myStyles.grid}>
                <div className={myStyles.card}>
                    <h3>Feedback Mechanism</h3>
                    <div className={myStyles.point}>
                        <p>
                            Our student feedback system evaluates institutional practices and
                            learning environments to enhance educational quality. We believe
                            in learner autonomy and use student responses to improve teaching
                            methodologies and course content handling.
                        </p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3>Feedback Documents</h3>
                    <div className={myStyles.point}>
                        <ul className={myStyles.equipment_list}>
                            <li>
                                <a href={feedbackPdf} download="1.4.1 Feedback 2023-2024 (1)-1.pdf">
                                    Feedback Analysis, Report, ATR, Sample Forms, IQAC ATR: 2023-24
                                </a>
                            </li>
                            <li>
                                <a href={feedbackPdf2} download="1.4.1-website hosting-22-23.pdf">
                                    Feedback Analysis, Report, ATR, Sample Forms, IQAC ATR: 2022-23
                                </a>
                            </li>
                            <li>
                                <a href={feedbackPdf3} download="1.4.1-website hosting-21-22.pdf">
                                    Feedback Analysis, Report, ATR, Sample Forms, IQAC ATR: 2021-22
                                </a>
                            </li>
                            <li>
                                <a href={feedbackPdf4} download="1.4.1-website hosting-20-21.pdf">
                                    Feedback Analysis, Report, ATR, Sample Forms, IQAC ATR: 2020-21
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
