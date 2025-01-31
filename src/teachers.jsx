import React from 'react'
import myStyles from './teachers.module.css'

export function Teachers() {
    return (
        <>
            <div className={myStyles.certified_teachers}>
                <div className={myStyles.teachers_heading}>
                    <h1>Certified Teachers</h1>
                    <p>Dedicated certified teacher with a proven track record of enhancing student learning and engagement through innovative teaching methods.
                    </p>
                </div>

                <div className={myStyles.teachers_list}>
                    <div className={`${myStyles.teachers} ${myStyles.color} ${myStyles.max_width}`}>
                        <img src="./" alt="teacher 1" />
                        <h1>Dr.</h1>
                        <p>Bachelor of Arts</p>
                    </div>
                    <div className={`${myStyles.teachers} ${myStyles.min_width}`}>
                        <img src="./" alt="teacher 2" />
                        <h1>Dr.</h1>
                        <p>Bachelor of Science</p>
                    </div>
                    <div className={`${myStyles.teachers} ${myStyles.color} ${myStyles.min_width}`}>
                        <img src="./" alt="teacher 3" />
                        <h1>Dr.</h1>
                        <p>Bachelor of Science</p>
                    </div>
                    <div className={`${myStyles.teachers} ${myStyles.max_width}`}>
                        <img src="./" alt="teacher 4" />
                        <h1>Dr.</h1>
                        <p>Bachelor of Commerce</p>
                    </div>
                </div>
            </div>
        </>
    )
}
