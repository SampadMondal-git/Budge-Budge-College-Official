import React from 'react'
import './teachers.css'

export function Teachers() {
    return (
        <>
            <div className="certified-teachers">
                <div className="teachers-heading">
                    <h1>Certified Teachers</h1>
                    <p>Dedicated certified teacher with a proven track record of enhancing student learning and engagement through innovative teaching methods.
                    </p>
                </div>

                <div className="teachers-list">
                    <div className="teachers color max-width">
                        <img src="./" alt="teacher 1" />
                        <h1>Dr.</h1>
                        <p>Bachelor of Arts</p>
                    </div>
                    <div className="teachers min-width">
                        <img src="./" alt="teacher 2" />
                        <h1>Dr.</h1>
                        <p>Bachelor of Science</p>
                    </div>
                    <div className="teachers color min-width">
                        <img src="./" alt="teacher 3" />
                        <h1>Dr.</h1>
                        <p>Bachelor of Science</p>
                    </div>
                    <div className="teachers max-width">
                        <img src="./" alt="teacher 4" />
                        <h1>Dr.</h1>
                        <p>Bachelor of Commerce</p>
                    </div>
                </div>
            </div>
        </>
    )
}
