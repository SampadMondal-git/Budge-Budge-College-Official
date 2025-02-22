import React from 'react'
import myStyles from './library.module.css'

export function Library() {
    return (
        <>
            <div className={myStyles.container}>
                <h2 className={myStyles.section_title}>College Library</h2>

                <div className={myStyles.grid}>
                    <div className={myStyles.card}>
                        <h3>Repository of Resources</h3>
                        <div className={myStyles.point}>
                            <ul className={myStyles.equipment_list}>
                                <li><span className={myStyles.highlight}>23,409+</span> books in English & Bengali</li>
                                <li><span className={myStyles.highlight}>1,206</span> reference books, <span className={myStyles.highlight}>12,595</span> unique titles</li>
                                <li>Journals, magazines, periodicals & media (<span className={myStyles.highlight}>51 CDs + 24 DVDs</span>)</li>
                            </ul>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3>Research Environment</h3>
                        <div className={myStyles.point}>
                            <ul className={myStyles.equipment_list}>
                                <li><span className={myStyles.highlight}>INFLIBNET</span> access for faculty</li>
                                <li>E-books & journals from <span className={myStyles.highlight}>Cambridge</span>, <span className={myStyles.highlight}>Oxford</span>, EPW & more</li>
                                <li><span className={myStyles.highlight}>N-LIST</span> program for online resources</li>
                            </ul>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3>Digital Access</h3>
                        <div className={myStyles.point}>
                            <ul className={myStyles.equipment_list}>
                                <li><span className={myStyles.highlight}>Koha</span> library management system</li>
                                <li>OPAC search from <span className={myStyles.highlight}>anywhere</span></li>
                                <li><span className={myStyles.highlight}>4</span> student computers with internet</li>
                            </ul>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3>Infrastructure</h3>
                        <div className={myStyles.point}>
                            <ul className={myStyles.equipment_list}>
                                <li>Printing, scanning, photocopying & <span className={myStyles.highlight}>digital archiving</span></li>
                                <li><span className={myStyles.highlight}>6 CCTV</span> cameras, air-conditioned study areas</li>
                                <li>Purified drinking water</li>
                            </ul>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3>Student Guidelines</h3>
                        <div className={myStyles.point}>
                            <ul className={myStyles.equipment_list}>
                                <li><span className={myStyles.highlight}>Honours:</span> 2 books | <span className={myStyles.highlight}>General:</span> 1 book</li>
                                <li>₹1/day late fee, strict damage rules</li>
                                <li>Return books <span className={myStyles.highlight}>before final exams</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3>Departmental Seminar Libraries</h3>
                        <div className={myStyles.point}>
                            <ul className={myStyles.equipment_list}>
                                <li>Books for <span className={myStyles.highlight}>specific subjects</span></li>
                                <li>Separate <span className={myStyles.highlight}>registers</span> for book issues</li>
                                <li>Extra borrowing options for <span className={myStyles.highlight}>needy students</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={myStyles.container}>
                <h2 className={myStyles.section_title}>WBCLOLR database</h2>

                <div className={myStyles.grid}>
                    <div className={myStyles.card}>
                        <h3>Collaborative Learning Platform</h3>
                        <div className={myStyles.point}>
                            <p>
                                State-aided college librarians have developed a centralized database of
                                Open Learning Resources covering all CBCS syllabus subjects, available
                                for non-commercial educational and research purposes.
                            </p>
                        </div>
                        <div className={myStyles.point}>
                            <a href="https://wbcolor.in/"
                                className={myStyles.highlight}
                                target="_blank"
                                rel="noopener noreferrer">
                                Access Open Learning Resources Portal
                            </a>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3>Key Features</h3>
                        <div className={myStyles.point}>
                            <ul className={myStyles.equipment_list}>
                                <li>Covers entire CBCS syllabus</li>
                                <li>Collaborative effort by West Bengal librarians</li>
                                <li>Non-commercial educational use only</li>
                                <li>Centralized resource repository</li>
                                <li>Pandemic-era digital initiative</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
