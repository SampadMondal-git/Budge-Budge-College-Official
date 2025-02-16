// import React from 'react'
// import myStyles from './intakecapacity.module.css'
// export function Intakecapacity() {
//     return (
//         <><div className={myStyles.container}>
//             <h2 className={myStyles.section_title}>Intake Capacity</h2>

//             <div className={myStyles.div_container}>
//                 <div className={myStyles.header}>
//                     <h1>BUDEE BUDEE COLLEGE</h1>
//                     <h2>Intake Capacity for Academic Session 2024-2025</h2>
//                 </div>

//                 <div className={myStyles.table_container}>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>SL. NO.</th>
//                                 <th>NAME OF THE COURSE (SUBJECT WISE)</th>
//                                 <th>NO OF SEATS APPROVED BY UNIVERSITY OF CALCUTTA</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>1</td>
//                                 <td>BENGALI HONOURS</td>
//                                 <td className={myStyles.center}>147</td>
//                             </tr>
//                             <tr>
//                                 <td>2</td>
//                                 <td>EDUCATION HONOURS</td>
//                                 <td className={myStyles.center}>77</td>
//                             </tr>
//                             <tr>
//                                 <td>3</td>
//                                 <td>ENGLISH HONOURS</td>
//                                 <td className={myStyles.center}>45</td>
//                             </tr>
//                             <tr>
//                                 <td>4</td>
//                                 <td>GEOGRAPHY HONOURS</td>
//                                 <td className={myStyles.center}>77</td>
//                             </tr>
//                             <tr>
//                                 <td>5</td>
//                                 <td>HISTORY HONOURS</td>
//                                 <td className={myStyles.center}>112</td>
//                             </tr>
//                             <tr>
//                                 <td>6</td>
//                                 <td>PHILOSOPHY HONOURS</td>
//                                 <td className={myStyles.center}>45</td>
//                             </tr>
//                             <tr>
//                                 <td>7</td>
//                                 <td>POLITICAL SCIENCE HONOURS</td>
//                                 <td className={myStyles.center}>112</td>
//                             </tr>
//                             <tr>
//                                 <td>8</td>
//                                 <td>ECONOMICS HONOURS</td>
//                                 <td className={myStyles.center}>31</td>
//                             </tr>
//                             <tr>
//                                 <td>9</td>
//                                 <td>BOTANY HONOURS</td>
//                                 <td className={myStyles.center}>24</td>
//                             </tr>
//                             <tr>
//                                 <td>10</td>
//                                 <td>FOOD & NUTRITION HONOURS</td>
//                                 <td className={myStyles.center}>32</td>
//                             </tr>
//                             <tr>
//                                 <td>11</td>
//                                 <td>ZOOLOGY HONOURS</td>
//                                 <td className={myStyles.center}>44</td>
//                             </tr>
//                             <tr>
//                                 <td>12</td>
//                                 <td>B.COM. HONOURS</td>
//                                 <td className={myStyles.center}>176</td>
//                             </tr>
//                             <tr>
//                                 <td>13</td>
//                                 <td>B.A. GENERAL</td>
//                                 <td className={myStyles.center}>895</td>
//                             </tr>
//                             <tr>
//                                 <td>14</td>
//                                 <td>B.COM. GENERAL</td>
//                                 <td className={myStyles.center}>72</td>
//                             </tr>
//                             <tr>
//                                 <td>15</td>
//                                 <td>B.SC. GENERAL</td>
//                                 <td className={myStyles.center}>42</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>

//                 <div className={myStyles.notes}>
//                     <p>* Reservation of seat for SC, ST, 08C-A, 08C-B categories as per existing Govt. rules</p>
//                     <p>** Reservation of PWD categories is applicable in all categories as per existing Govt. rules</p>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }

import React from 'react'
import myStyles from './intakecapacity.module.css'

export function Intakecapacity() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Intake Capacity for the Academic Session 2024-2025</h2>
            
            <div className={myStyles.grid}>
                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Bengali Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 147</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Education Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 77</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>English Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 45</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Geography Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 77</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>History Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 112</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Philosophy Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 45</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Political Science Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 112</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Economics Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 31</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Botany Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 24</p>
                        <p><span className={myStyles.highlight}>Category:</span> Science</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Food & Nutrition Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 32</p>
                        <p><span className={myStyles.highlight}>Category:</span> Science</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>Zoology Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 44</p>
                        <p><span className={myStyles.highlight}>Category:</span> Science</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>B.Com. Honours</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 176</p>
                        <p><span className={myStyles.highlight}>Category:</span> Commerce</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>B.Sc. General</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 42</p>
                        <p><span className={myStyles.highlight}>Category:</span> Science</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>B.A. General</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 895</p>
                        <p><span className={myStyles.highlight}>Category:</span> Arts</p>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3 className={myStyles.course_title}>B.Com. General</h3>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Approved Seats:</span> 72</p>
                        <p><span className={myStyles.highlight}>Category:</span> Commerce</p>
                    </div>
                </div>
            </div>

            <div className={myStyles.notes}>
                <p>* Reservation of seats for SC, ST, OBC-A, OBC-B categories as per Government norms</p>
                <p>** PWD reservation applicable in all categories as per Government rules</p>
            </div>
        </div>
    )
}