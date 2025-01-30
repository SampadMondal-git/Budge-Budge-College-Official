import React from 'react'
import './offer.css'

export function Offer() {
    return (
        <>
            <div className="div">
                <div className="offers">
                    <div className="offer-head">
                        <h1>What We Offer</h1>
                        <p>Our college is dedicated to providing a holistic educational experience that goes beyond academics.
                            We
                            offer a wide range of services and facilities designed to nurture your growth, well-being, and
                            success.
                        </p>
                    </div>
                    <div className="offers-container">
                        <div className="offer-items">
                            <img src="Icons/safety.png" alt="Safety First" />
                            <h2>Safety First</h2>
                            <p>Your safety is our top priority. We maintain a secure campus environment where students can learn
                                and
                                grow without any concerns.</p>
                        </div>
                        <div className="offer-item">
                            <img src="Icons/reading.png" alt="Regular Classes" />
                            <h2>Regular Classes</h2>
                            <p>Consistent and well-structured classes ensure that you stay on track with your studies, helping
                                you
                                achieve academic excellence.</p>
                        </div>
                        <div className="offer-item">
                            <img src="Icons/certified.png" alt="Certified Teachers" />
                            <h2>Certified Teachers</h2>
                            <p>Learn from highly qualified and experienced teachers who are dedicated to guiding you towards
                                your
                                academic and professional goals.</p>
                        </div>
                        <div className="offer-items">
                            <img src="Icons/classroom.png" alt="Sufficient Classrooms" />
                            <h2>Sufficient Classrooms</h2>
                            <p>Our spacious and well-equipped classrooms provide a conducive environment for effective learning
                                and
                                collaboration.</p>
                        </div>
                        <div className="offer-items">
                            <img src="Icons/creative.png" alt="Creative Lessons" />
                            <h2>Creative Lessons</h2>
                            <p>We encourage creativity and critical thinking through innovative lessons that go beyond
                                traditional
                                teaching methods.</p>
                        </div>
                        <div className="offer-item">
                            <img src="Icons/pass-the-baton.png" alt="Sports Facilities" />
                            <h2>Sports Facilities</h2>
                            <p>Stay active and healthy with access to top-notch sports facilities, promoting physical well-being
                                and
                                team spirit.</p>
                        </div>
                    </div>
                </div>
                <div className="principal-desk">
                    <div className="principal">
                        <div className="image">
                            <img src="Images/principle.png" alt="Principal Dr. Debjani Dutta" />
                        </div>
                        <div className="about-principal">
                            <h1>Our Principal</h1>
                            <p className="speech">It is an honor to speak at Budge Budge College, founded in 1971. Initially operating from a different location, the college later moved to its current site. We are fortunate to have had renowned writer Narayan Ganguly as our Founder President and Professor Prithwis Dutta as our founding principal. For decades, this institution has been a beacon of education in the Kolkata suburbs.</p>
                        </div>
                        <div className="principal-button">
                            <a href="Pdf files/PRINCIPAL CV.pdf">
                                <button>Download Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
