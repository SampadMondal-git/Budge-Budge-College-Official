import React from 'react';
import myStyles from './studentzone.module.css';
import pdf_1 from '../Pdf files/Programme and Course Outcomes/11666POCO-CCF.pdf';
import pdf_2 from '../Pdf files/Programme and Course Outcomes/82083POCO-CBCS.pdf';
export function Studentzone() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Student Zone</h2>
            <div className={myStyles.container}>
                <h2 className={myStyles.section_title}>Kanyashree Prakalpa</h2>

                <div className={myStyles.grid}>
                    <div className={myStyles.card}>
                        <h3>Key Objectives</h3>
                        <div className={`${myStyles.point} ${myStyles.highlight}`}>
                            Prevent child marriage & promote education
                        </div>
                        <div className={myStyles.point}>
                            <span className={myStyles.highlight}>Goals:</span>
                            <ul className={myStyles.equipment_list}>
                                <li>Delay marriage until 18+</li>
                                <li>Reduce school dropouts</li>
                                <li>Provide financial aid</li>
                                <li>Empower girls through scholarships</li>
                            </ul>
                        </div>

                        <h3>Categories & Benefits</h3>
                        <div className={myStyles.point}><span className={myStyles.highlight}>K1:</span> ₹1,000/year (13-18 years)</div>
                        <div className={myStyles.point}><span className={myStyles.highlight}>K2:</span> ₹25,000 (18-19 years)</div>
                        <div className={myStyles.point}><span className={myStyles.highlight}>K3:</span> Science: ₹2,500/month | Arts: ₹2,000/month</div>
                    </div>

                    <div className={myStyles.card}>
                        <h3>Eligibility</h3>
                        <div className={myStyles.point}>
                            <span className={myStyles.highlight}>K1:</span>
                            <ul className={myStyles.equipment_list}>
                                <li>Resident of West Bengal, unmarried, 13-18 years</li>
                                <li>Studying in class 8 or above, family income ≤ ₹1.2 lakh/year</li>
                                <li>Valid bank account, exemptions for disabled, orphans</li>
                            </ul>
                        </div>
                        <div className={myStyles.point}>
                            <span className={myStyles.highlight}>K2:</span>
                            <ul className={myStyles.equipment_list}>
                                <li>Resident of West Bengal, unmarried, 18-19 years</li>
                                <li>Enrolled in higher education/training, income ≤ ₹1.2 lakh/year</li>
                                <li>Bank account required, exemptions for special cases</li>
                            </ul>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3>Beneficiary Stats (Budge Budge College)</h3>
                        <div className={myStyles.point}>
                            <table className={myStyles.stats_table}>
                                <thead>
                                    <tr><th>Year</th><th>K1</th><th>K2</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>2014 - 15</td><td>73</td><td>193</td></tr>
                                    <tr><td>2015 - 16</td><td>-</td><td>208</td></tr>
                                    <tr><td>2016 - 17</td><td>5</td><td>352</td></tr>
                                    <tr><td>2017 - 18</td><td>7</td><td>465</td></tr>
                                    <tr><td>2018 - 19</td><td>3</td><td>379</td></tr>
                                    <tr><td>2019 - 20</td><td>38</td><td>331</td></tr>
                                    <tr><td>2020 - 21</td><td>15</td><td>89</td></tr>
                                    <tr><td>2021 - 22</td><td>01</td><td>16</td></tr>
                                    <tr><td>2022 - 23</td><td>04</td><td>17</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className={myStyles.container}>
                <h2 className={myStyles.section_title}>Scholarship Concession</h2>

                <div className={myStyles.grid}>
                    <div className={myStyles.card}>
                        <h3>Unlock Opportunities</h3>
                        <div className={`${myStyles.point} ${myStyles.highlight}`}>
                            We support talented students from underprivileged backgrounds, ensuring financial barriers never limit their potential.
                        </div>
                        <div className={myStyles.point}>
                            <span className={myStyles.highlight}>Key Benefits:</span>
                            <ul className={myStyles.equipment_list}>
                                <li>Diverse scholarship programs</li>
                                <li>Exclusive area-based financial aid</li>
                                <li>Dedicated support for SC/ST communities</li>
                                <li>Strong partnerships with leading corporations</li>
                            </ul>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3>Explore Scholarship Categories</h3>

                        <div className={`${myStyles.point} ${myStyles.govt_scheme}`}>
                            <span className={myStyles.highlight}>1. Chief Minister Relief Fund (CMRF)</span>
                            <ul className={myStyles.equipment_list}>
                                <li>Eligibility: 60%+ in Higher Secondary</li>
                                <li>Annual stipend for all undergraduate years</li>
                                <li>Active since 2011-2012</li>
                                <li>71 applications received in 2015-2016</li>
                            </ul>
                        </div>

                        <div className={`${myStyles.point} ${myStyles.corporate}`}>
                            <span className={myStyles.highlight}>2. Jindal Group Merit Scholarship</span>
                            <p>Awarded to students demonstrating exceptional academic performance.</p>
                        </div>

                        <div className={`${myStyles.point} ${myStyles.area_special}`}>
                            <span className={myStyles.highlight}>3. Area-Specific Scholarships</span>
                            <ul className={myStyles.equipment_list}>
                                <li>Financial aid for LIC employees' children</li>
                                <li>Scholarships for factory workers' wards</li>
                            </ul>
                        </div>

                        <div className={`${myStyles.point} ${myStyles.community}`}>
                            <span className={myStyles.highlight}>4. Community-Based Scholarships</span>
                            <ul className={myStyles.equipment_list}>
                                <li>Support from Ramakrishna Mission</li>
                                <li>Scholarships for SC and ST students</li>
                            </ul>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3>Impact in Numbers</h3>
                        <div className={myStyles.point}>
                            <table className={myStyles.stats_table}>
                                <tbody>
                                    <tr>
                                        <td className={myStyles.highlight}>CMRF Applications (2015-16)</td>
                                        <td>71 aspiring scholars supported</td>
                                    </tr>
                                    <tr>
                                        <td className={myStyles.highlight}>Area-Specific Beneficiaries</td>
                                        <td>35% of students received tailored financial aid</td>
                                    </tr>
                                    <tr>
                                        <td className={myStyles.highlight}>SC/ST Scholarship Coverage</td>
                                        <td>42% of students empowered through inclusive funding</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className={myStyles.container}>
                <h2 className={myStyles.section_title}>Student Welfare</h2>

                <div className={myStyles.grid}>
                    <div className={myStyles.card}>
                        <h3>Comprehensive Growth</h3>
                        <p>The college fosters all-round development through a blend of academic, cultural, and sports activities. Events such as the annual sports meet, inter-college and national competitions, freshers’ welcome, Saraswati Puja, Bhasha Dibash, Rabindra-Nazrul Jayanti, and College Social create vibrant cultural exchanges.</p>
                    </div>

                    <div className={myStyles.card}>
                        <h3>Student Welfare Initiatives</h3>
                        <div className={myStyles.point}>
                            <span className={myStyles.highlight}>Curricular and Co-Curricular Facilities:</span>
                            <ul className={myStyles.equipment_list}>
                                <li>28 well-ventilated classrooms with blackboards, desks, and benches</li>
                                <li>Technology-enabled learning spaces and laboratories for practical subjects like Physics, Chemistry, Zoology, and more</li>
                                <li>Dedicated reading rooms with internet-equipped computers</li>
                                <li>Modern seminar hall for workshops and seminars</li>
                                <li>Smart Boards and projectors for advanced learning</li>
                            </ul>
                        </div>

                        <div className={myStyles.point}>
                            <span className={myStyles.highlight}>Extra-Curricular Activities:</span>
                            <ul className={myStyles.equipment_list}>
                                <li>Sports facilities including indoor and outdoor games</li>
                                <li>Open-air stage for cultural programs</li>
                                <li>Gymnasium for physical fitness</li>
                                <li>NSS initiatives focusing on yoga, health, and hygiene</li>
                                <li>Active NCC unit engaged in community service</li>
                            </ul>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3>Students' Union</h3>
                        <p>Due to the absence of official notifications from the Department of Higher Education, Government of West Bengal, students' union elections have not been held in recent years. Consequently, there is currently no official Students' Union in the college.</p>
                    </div>
                </div>

                <div className={myStyles.container}>
                    <h2 className={myStyles.section_title}>Anti-Ragging Cell</h2>

                    <div className={myStyles.grid}>
                        <div className={myStyles.card}>
                            <h3>Commitment to a Safe Campus</h3>
                            <p>Budge Budge College strictly adheres to UGC Regulations on “Curbing the Menace of Ragging in Higher Educational Institutions, 2009.” The Anti-Ragging Cell oversees measures to prevent ragging both on and off-campus. Posters highlighting anti-ragging laws and penalties are prominently displayed across the campus. The college maintains vigilant surveillance to address any complaints, though no incidents have been reported since the cell's inception.</p>
                        </div>

                        <div className={myStyles.card}>
                            <h3>Role of the Anti-Ragging Committee</h3>
                            <p>The committee ensures full compliance with UGC regulations. Students and parents are encouraged to contact committee members for guidance and information regarding anti-ragging policies.</p>
                        </div>

                    </div>
                </div>
                <div className={myStyles.container}>
                    <h2 className={myStyles.section_title}>Anti-Ragging Cell Members</h2>

                    <div className={myStyles.teaching_staffs}>
                        <div className={myStyles.staffs}>
                            <h5>Dr. Debjani Datta</h5>
                            <div className={myStyles.details}>
                                <p><span className={myStyles.highlight}>Designation:</span> Principal - Chairperson</p>
                                <p><span className={myStyles.highlight}>Contact:</span> 9874224929</p>
                            </div>
                        </div>

                        <div className={myStyles.staffs}>
                            <h5>Pritha Barua (Sen)</h5>
                            <div className={myStyles.details}>
                                <p><span className={myStyles.highlight}>Designation:</span> Associate Professor, Dept. of Bengali</p>
                                <p><span className={myStyles.highlight}>Contact:</span> 7980452423</p>
                            </div>
                        </div>

                        <div className={myStyles.staffs}>
                            <h5>Dr. Partha Pratim Chaudhuri</h5>
                            <div className={myStyles.details}>
                                <p><span className={myStyles.highlight}>Designation:</span> Associate Professor, Dept. of Zoology</p>
                                <p><span className={myStyles.highlight}>Contact:</span> 9433579204</p>
                            </div>
                        </div>

                        <div className={myStyles.staffs}>
                            <h5>Dr. Bhanusuta Mitra</h5>
                            <div className={myStyles.details}>
                                <p><span className={myStyles.highlight}>Designation:</span> Associate Professor, Dept. of Chemistry</p>
                                <p><span className={myStyles.highlight}>Contact:</span> 9051169272</p>
                            </div>
                        </div>

                        <div className={myStyles.staffs}>
                            <h5>Dr. Kishor Naskar</h5>
                            <div className={myStyles.details}>
                                <p><span className={myStyles.highlight}>Designation:</span> Asst. Prof., Dept. of Economics</p>
                                <p><span className={myStyles.highlight}>Contact:</span> 9239088525</p>
                            </div>
                        </div>

                        <div className={myStyles.staffs}>
                            <h5>Dr. Reshmi Sarkar</h5>
                            <div className={myStyles.details}>
                                <p><span className={myStyles.highlight}>Designation:</span> Librarian</p>
                                <p><span className={myStyles.highlight}>Qualification:</span> 9933839674</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={myStyles.container}>
                    <h2 className={myStyles.section_title}>Anti Sexual Harassment Cell</h2>

                    <div className={myStyles.grid}>
                        <div className={myStyles.card}>
                            <h3>Safe and Inclusive Campus</h3>
                            <p>Budge Budge College, despite being located on the suburban fringes of Kolkata, ensures a congenial environment free from harassment, exploitation, and intimidation. The Anti-Sexual Harassment Sub-Committee/Cell plays a pivotal role in maintaining a campus atmosphere conducive to the holistic development of students, faculty, and staff.</p>
                        </div>

                        <div className={myStyles.card}>
                            <h3>Objectives of the Cell</h3>
                            <div className={myStyles.point}>
                                <li>Ensure free access to facilities without gender bias, promoting equal participation in campus activities.</li>
                                <li>Foster an environment free from gender-based discrimination.</li>
                                <li>Raise awareness about sexual harassment in all its forms.</li>
                            </div>
                            <p>Students who experience harassment can submit a written complaint by placing it in the cell’s locked complaint box. All complaints are treated confidentially, with measures in place to protect the complainant’s security and anonymity.</p>
                        </div>
                    </div>
                </div>

                <div className={myStyles.container}>
                    <h2 className={myStyles.section_title}>Anti Sexual Harassment Cell Members</h2>

                    <div className={myStyles.teaching_staffs}>
                        <div className={myStyles.staffs}>
                            <h5>Dr. Debjani Datta</h5>
                            <div className={myStyles.details}>
                                <p><span className={myStyles.highlight}>Designation:</span> Principal - Chairperson</p>
                                <p><span className={myStyles.highlight}>Contact:</span> 9874224929</p>
                            </div>
                        </div>

                        <div className={myStyles.staffs}>
                            <h5>Dr. Bhanusuta Mitra</h5>
                            <div className={myStyles.details}>
                                <p><span className={myStyles.highlight}>Designation:</span> Associate Professor, Dept. of Chemistry</p>
                                <p><span className={myStyles.highlight}>Contact:</span> 9051169272</p>
                            </div>
                        </div>

                        <div className={myStyles.staffs}>
                            <h5>Dr. Sweta Dutta</h5>
                            <div className={myStyles.details}>
                                <p><span className={myStyles.highlight}>Designation:</span> Asst. Prof., Dept. of History</p>
                                <p><span className={myStyles.highlight}>Contact:</span> 8617793532</p>
                            </div>
                        </div>

                        <div className={myStyles.staffs}>
                            <h5>Dr. Shruti Agrawal</h5>
                            <div className={myStyles.details}>
                                <p><span className={myStyles.highlight}>Designation:</span> Asst. Prof., Dept. of Food & Nutrition</p>
                                <p><span className={myStyles.highlight}>Contact:</span> 9903009197</p>
                            </div>
                        </div>

                        <div className={myStyles.staffs}>
                            <h5>Dr. Papia Das</h5>
                            <div className={myStyles.details}>
                                <p><span className={myStyles.highlight}>Designation:</span> Asst. Prof., Dept. of Zoology</p>
                                <p><span className={myStyles.highlight}>Contact:</span> 9674206701</p>
                            </div>
                        </div>

                        <div className={myStyles.staffs}>
                            <h5>Dr. Reshmi Sarkar</h5>
                            <div className={myStyles.details}>
                                <p><span className={myStyles.highlight}>Designation:</span> Librarian</p>
                                <p><span className={myStyles.highlight}>Qualification:</span> 9933839674</p>
                            </div>
                        </div>

                        <div className={myStyles.staffs}>
                            <h5>Sri Tapas Show</h5>
                            <div className={myStyles.details}>
                                <p><span className={myStyles.highlight}>Designation:</span> Non-teaching Staff</p>
                                <p><span className={myStyles.highlight}>Contact:</span> 9874802114</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={myStyles.container}>
                    <h2 className={myStyles.section_title}>Regulation / Guidelines</h2>
                    <div className={myStyles.grid}>
                        <div className={myStyles.staffs}>
                            <h5>Anti-Ragging Regulation / Guidelines</h5>
                            <div className={myStyles.details}>
                                <p><span className={myStyles.highlight}>Visit Link:</span> <a href="https://www.antiragging.in/">https://www.antiragging.in/</a></p>
                            </div>
                        </div>
                        <div className={myStyles.staffs}>
                            <h5>Anti-Sexual Harassment Regulation / Guidelines</h5>
                            <div className={myStyles.details}>
                                <p><span className={myStyles.highlight}>Visit Link:</span> <a href="https://saksham.ugc.ac.in/Home/Downloads">https://saksham.ugc.ac.in/Home/Downloads</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={myStyles.container}>
                    <h2 className={myStyles.section_title}>Programme and Course Outcomes</h2>
                    <div className={myStyles.grid}>
                        <div className={myStyles.card}>
                            <h3>Sustainability Measures</h3>
                            <div className={myStyles.point}><a href={pdf_1} download="11666POCO-CCF.pdf">11666POCO-CCF</a></div>
                            <div className={myStyles.point}><a href={pdf_2} download="82083POCO-CBCS.pdf">82083POCO-CBCS</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
