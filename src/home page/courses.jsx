import React from 'react'
import myStyles from './courses.module.css'
import BA from '../icons/arts.png'
import BSc from '../icons/science.png'
import BCom from '../icons/commerce.png'
export function Courses() {
    return (
        <>
            <div className={myStyles.our_courses}>
                <div className={myStyles.title}>
                    <h1>Our Courses</h1>
                    <p>Our courses offer expert-led, practical learning experiences designed to build and enhance your
                        skills effectively.</p>
                </div>
                <div className={myStyles.course}>
                    <div className={myStyles.course1}>
                        <img src={BA} alt="Bachelor of Arts" />
                        <h2>Bachelor of Arts (B.A.)</h2>
                        <p>
                            This course offers students a strong foundation in arts, enabling them to develop and apply their
                            skills in various fields, such as education, political science, geography, history, bengali,
                            english, philosophy, psychology, sociology and sanskrit.
                        </p>
                    </div>
                    <div className={myStyles.course2}>
                        <img src={BSc} alt="Bachelor of Science" />
                        <h2>Bachelor of Science (B.Sc.)</h2>
                        <p>
                            This course offers students a strong foundation in science, enabling them to develop and apply their
                            skills in various fields, such as physics, chemistry, zoology, botany and mathematics.
                        </p>
                    </div>
                    <div className={myStyles.course3}>
                        <img src={BCom} alt="Bachelor of Commerce" />
                        <h2>Bachelor of Commerce (B.Com.)</h2>
                        <p>
                            This course offers students a strong foundation in commerce, enabling them to develop and apply
                            their skills in various fields, such as financial accounting, business laws, corporate laws,
                            principal of management, micro and macro economics, business mathematics and statistics.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
