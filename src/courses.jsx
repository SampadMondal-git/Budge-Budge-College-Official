import React from 'react'
import './courses.css'

export function Courses() {
    return (
        <>
        <div className="courses-container">
            <div className="certified-teachers item">
                <h1>45+</h1>
                <p>Certified Teachers</p>
            </div>

            <div className="students item">
                <h1>2000+</h1>
                <p>Students</p>
            </div>

            <div className="courses item">
                <h1>25+</h1>
                <p>Courses</p>
            </div>

            <div className="awards-won item">
                <h1>20+</h1>
                <p>Awards Won</p>
            </div>
        </div>

            <div className="our-courses">
                <div class="title">
                    <h1>Our Courses</h1>
                    <p>Our courses offer expert-led, practical learning experiences designed to build and enhance your
                        skills effectively.</p>
                </div>
                <div className="course">
                    <div class="course1">
                        <img src="Icons/arts.png" alt="Bachelor of Arts" />
                        <h2>Bachelor of Arts (B.A.)</h2>
                        <p>
                            This course offers students a strong foundation in arts, enabling them to develop and apply their
                            skills in various fields, such as education, political science, geography, history, bengali,
                            english, philosophy, psychology, sociology and sanskrit.
                        </p>
                    </div>
                    <div className="course2">
                        <img src="Icons/science.png" alt="Bachelor of Science" />
                        <h2>Bachelor of Science (B.Sc.)</h2>
                        <p>
                            This course offers students a strong foundation in science, enabling them to develop and apply their
                            skills in various fields, such as physics, chemistry, zoology, botany and mathematics.
                        </p>
                    </div>
                    <div className="course3">
                        <img src="Icons/commerce.png" alt="Bachelor of Commerce" />
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
