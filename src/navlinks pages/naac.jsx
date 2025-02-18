import React from 'react'
import myStyles from './naac.module.css'
//Criterion 1
import cr_1_pd1_1 from '../Pdf files/NAAC/17105920761.3.2-1-200_signed.pdf'
import cr_1_pd1_2 from '../Pdf files/NAAC/17105923051.3.2-201-400_signed.pdf'
import cr_1_pd1_3 from '../Pdf files/NAAC/17105925221.3.2-401-640_signed.pdf'
import cr_1_pd1_4 from '../Pdf files/NAAC/17105927391.3.2-641-838_signed.pdf'
import cr_1_feedback1 from '../Pdf files/NAAC/17105931981.4.1-Feedback Analysis_signed.pdf'
import cr_1_feedback2 from '../Pdf files/NAAC/17105933311.4.1-Sample Feedback Forms_signed.pdf'
//Criterion 2
import cr_2_pdf_1 from '../Pdf files/NAAC/17105954162.3.1 sign.pdf'
import cr_2_pdf_2 from '../Pdf files/NAAC/17105960602.4.2-Copies of PhD Certificates attested.pdf'
import cr_2_pdf_3 from '../Pdf files/NAAC/1777772.6.1 2.6.2 BudgeBudgeCollege_POCOCBCS_signed.pdf'
//Criterion 3
import cr_3_pdf_1 from '../Pdf files/NAAC/17107435373.2.2-Seminar-report-Final sign.pdf'
import cr_3_pdf_2 from '../Pdf files/NAAC/17107415603.3.2-Copy of relevant pages_signed.pdf'
import cr_3_pdf_3 from '../Pdf files/NAAC/17107422463.4.3 (a) Photographs sign.pdf'
import cr_3_pdf_4 from '../Pdf files/NAAC/17106790213.5.1 (a)-List of year-wise actvities sign.pdf'
import cr_3_pdf_5 from '../Pdf files/NAAC/17106790983.5.1(b)Copies of MOUs attested.pdf'
//Criterion 4
import cr_4_pdf_1 from '../Pdf files/NAAC/17107525764.3.2.1 Photographs of Computers Used by the Students.pdf'
import cr_4_pdf_2 from '../Pdf files/NAAC/17105965314.4.1-Audited Statement.pdf'
//Criterion 5
import cr_5_pdf_1 from '../Pdf files/NAAC/17105967375.1.1.1. (a) Year-wise list of beneficiary students sign.pdf'
import cr_5_pdf_2 from '../Pdf files/NAAC/17105968335.2.1.1. List of students placed sign.pdf'
import cr_5_pdf_3 from '../Pdf files/NAAC/17105970275.2.1.1. List of students progressing for Higher Education sign.pdf'
import cr_5_pdf_4 from '../Pdf files/NAAC/17105971855.3.2.1-Supporting Documents sign.pdf'
//Criterion 6
import cr_6_pdf_1 from '../Pdf files/NAAC/17105982606.3.3 (b)-Copy of the certificates of the program sign.pdf'
import cr_6_pdf_2 from '../Pdf files/NAAC/17107506706.5.2-Quality Audit Report.pdf'
import cr_6_pdf_3 from '../Pdf files/NAAC/17106829016.5.2-Minutes of IQAC Meetings attested-1.pdf'
//Criterion 7
import cr_7_pdf_1 from '../Pdf files/NAAC/17106793577.1.2-Supporting Documents.pdf'
import cr_7_pdf_2 from '../Pdf files/NAAC/17107589807.1.2-Divyagjan sign.pdf'
import cr_7_pdf_3 from '../Pdf files/NAAC/17107477597.1.3-Beyond the campus env protection sign.pdf'
import cr_7_pdf_4 from '../Pdf files/NAAC/17106824467.1.3-Green Audit Report.pdf'
import cr_7_pdf_5 from '../Pdf files/NAAC/17107450887.2.1-Best practices sign.pdf'
import cr_7_pdf_6 from '../Pdf files/NAAC/17107451477.3.1-Insitutional Distinctiveness sign.pdf'
//SSR
import cr_ssr_pdf_1 from '../Pdf files/NAAC/58309SSR-WBCOGN12389.pdf'
import cr_ssr_pdf_2 from '../Pdf files/NAAC/SSR-Cycle 2.pdf'
//AQAR
import cr_aqar_pdf_1 from '../Pdf files/NAAC/AQAR/83172AQAR 2023-24 REPORT.pdf'
import cr_aqar_pdf_2 from '../Pdf files/NAAC/AQAR/17356Cateogry-wise Sem 1 All Students 2023-2024-Final.pdf'
import cr_aqar_pdf_3 from '../Pdf files/NAAC/AQAR/466475.1.2.pdf'
import cr_aqar_pdf_4 from '../Pdf files/NAAC/AQAR/152907.1.8_2023-24.pdf'
import cr_aqar_pdf_5 from '../Pdf files/NAAC/AQAR/662187.1.6.1-Green Audit Report_2023-24.pdf'
import cr_aqar_pdf_6 from '../Pdf files/NAAC/AQAR/9236ICT PHOTOS.pdf'
import cr_aqar_pdf_7 from '../Pdf files/NAAC/AQAR/625084.1.2 AUDITORIUM &  BILLS.pdf'
import cr_aqar_pdf_8 from '../Pdf files/NAAC/AQAR/207043.2.2 -2023-24.pdf'
import cr_aqar_pdf_9 from '../Pdf files/NAAC/AQAR/466272.6.1 2.6.2 BudgeBudgeCollege_POCOCBCS_signed.pdf'
import cr_aqar_pdf_10 from '../Pdf files/NAAC/AQAR/371642.5.1 2.5.2 2023-24.pdf'
import cr_aqar_pdf_11 from '../Pdf files/NAAC/AQAR/11452.4.2 PHD 2023-24.pdf'
import cr_aqar_pdf_12 from '../Pdf files/NAAC/AQAR/536773.2 2.4.1 Sanctioned Post 2023-24.pdf'
import cr_aqar_pdf_13 from '../Pdf files/NAAC/AQAR/179992.4.1 BudgeBudgeCOllege_Appointment Letters 2023-24.pdf'
import cr_aqar_pdf_14 from '../Pdf files/NAAC/AQAR/715482.1.2.pdf'
import cr_aqar_pdf_15 from '../Pdf files/NAAC/AQAR/203161.3.2 & 1.3.3.pdf'
import cr_aqar_pdf_16 from '../Pdf files/NAAC/AQAR/293501.3.1.pdf'
import cr_aqar_pdf_17 from '../Pdf files/NAAC/AQAR/991571.1.3.pdf'
import cr_aqar_pdf_18 from '../Pdf files/NAAC/AQAR/7471.4.2.pdf'
import cr_aqar_pdf_19 from '../Pdf files/NAAC/AQAR/891501.1.2.pdf'
import cr_aqar_pdf_20 from '../Pdf files/NAAC/AQAR/602571.1.1.pdf'
import cr_aqar_pdf_21 from '../Pdf files/NAAC/AQAR/582672.7.1.pdf'
import cr_aqar_pdf_22 from '../Pdf files/NAAC/AQAR/925552.6.3.2.pdf'
import cr_aqar_pdf_23 from '../Pdf files/NAAC/AQAR/892062.3.2.pdf'
import cr_aqar_pdf_24 from '../Pdf files/NAAC/AQAR/700774.1.3.pdf'
import cr_aqar_pdf_25 from '../Pdf files/NAAC/AQAR/264624.1.2.pdf'
import cr_aqar_pdf_26 from '../Pdf files/NAAC/AQAR/405124.1.1.pdf'
import cr_aqar_pdf_27 from '../Pdf files/NAAC/AQAR/894026.5.1.pdf'
import cr_aqar_pdf_28 from '../Pdf files/NAAC/AQAR/923246.4.3.pdf'
import cr_aqar_pdf_29 from '../Pdf files/NAAC/AQAR/566896.4.1.pdf'
import cr_aqar_pdf_30 from '../Pdf files/NAAC/AQAR/66806.2.2.pdf'
import cr_aqar_pdf_31 from '../Pdf files/NAAC/AQAR/684836.2.1.pdf'
import cr_aqar_pdf_32 from '../Pdf files/NAAC/AQAR/810926.1.2.pdf'
import cr_aqar_pdf_33 from '../Pdf files/NAAC/AQAR/520336.1.1.pdf'
import cr_aqar_pdf_34 from '../Pdf files/NAAC/AQAR/254497.1.1.pdf'
import cr_aqar_pdf_35 from '../Pdf files/NAAC/AQAR/21637.2.1-BEST PRACTICES.pdf'
import cr_aqar_pdf_36 from '../Pdf files/NAAC/AQAR/50937IQAC Meeting 2023-24.pdf'
import cr_aqar_pdf_37 from '../Pdf files/NAAC/AQAR/1707113324IQAC Meetings & ATR.pdf'
import cr_aqar_pdf_38 from '../Pdf files/NAAC/AQAR/1698830592Final AQAR 2022-23.pdf'
import cr_aqar_pdf_39 from '../Pdf files/NAAC/AQAR/1675413766AQAR 2021-22.pdf'
import cr_aqar_pdf_40 from '../Pdf files/NAAC/AQAR/1668595372AQAR 2020-21.pdf'
import cr_aqar_pdf_41 from '../Pdf files/NAAC/AQAR/1659182957AQAR-2019-20.pdf'
import cr_aqar_pdf_42 from '../Pdf files/NAAC/AQAR/1658479572AQAR 2018-19.pdf'
import cr_aqar_pdf_43 from '../Pdf files/NAAC/AQAR/1658214731AQAR submitted 2017-18.pdf'
import cr_aqar_pdf_44 from '../Pdf files/NAAC/AQAR/1657700865AQAR-2016-17.pdf'
//IIQA
import cr_iiqa_pdf_1 from '../Pdf files/NAAC//IIQA/49890IIQA-UNDERTAKING.pdf'
import cr_iiqa_pdf_2 from '../Pdf files/NAAC/IIQA/1707113324IQAC Meetings & ATR.pdf'
import cr_iiqa_pdf_3 from '../Pdf files/NAAC/IIQA/BBC-IIQA Final.pdf'
//DVV
import cr_dvv_pdf_1 from '../Pdf files/NAAC/DVV/93282DVV-1.3.2_signed.pdf'
import cr_dvv_pdf_2 from '../Pdf files/NAAC/DVV/92304DVV-1.4.1 sign.pdf'
import cr_dvv_pdf_3 from '../Pdf files/NAAC/DVV/12325DVV-2.2.1 Sign.pdf'
import cr_dvv_pdf_4 from '../Pdf files/NAAC/DVV/43045DVV2.4.1_signed.pdf'
import cr_dvv_pdf_5 from '../Pdf files/NAAC/DVV/42708DVV-2.4.2 sign.pdf'
import cr_dvv_pdf_6 from '../Pdf files/NAAC/DVV/72368DVV-2.6.3 Sign.pdf'
import cr_dvv_pdf_7 from '../Pdf files/NAAC/DVV/55636DVV 2.1.1 signed.pdf'
import cr_dvv_pdf_8 from '../Pdf files/NAAC/DVV/95412DVV 2.1.2 signed.pdf'
import cr_dvv_pdf_9 from '../Pdf files/NAAC/DVV/484173.3.1-Journal Articles sign.pdf'
import cr_dvv_pdf_10 from '../Pdf files/NAAC/DVV/89698DVV-3.2.2 Sign.pdf'
import cr_dvv_pdf_11 from '../Pdf files/NAAC/DVV/71522DVV-3.3.1 Sign.pdf'
import cr_dvv_pdf_12 from '../Pdf files/NAAC/DVV/16526DVV-3.3.2 signed.pdf'
import cr_dvv_pdf_13 from '../Pdf files/NAAC/DVV/30757DVV-3.4.3 sign.pdf'
import cr_dvv_pdf_14 from '../Pdf files/NAAC/DVV/28624DVV-3.5.1 sign.pdf'
import cr_dvv_pdf_15 from '../Pdf files/NAAC/DVV/93676DVV-4.1.2.pdf'
import cr_dvv_pdf_16 from '../Pdf files/NAAC/DVV/76511DVV-4.3.2.pdf'
import cr_dvv_pdf_17 from '../Pdf files/NAAC/DVV/36836DVV-4.4.1.pdf'
import cr_dvv_pdf_18 from '../Pdf files/NAAC/DVV/96982DVV-5.1.1 sign.pdf'
import cr_dvv_pdf_19 from '../Pdf files/NAAC/DVV/83596DVV-5.1.3 sign.pdf'
import cr_dvv_pdf_20 from '../Pdf files/NAAC/DVV/87635DVV-5.2.2 sign.pdf'
import cr_dvv_pdf_21 from '../Pdf files/NAAC/DVV/93507DVV-5.3.1 sign.pdf'
import cr_dvv_pdf_22 from '../Pdf files/NAAC/DVV/34215DVV-5.3.2 sign.pdf'
import cr_dvv_pdf_23 from '../Pdf files/NAAC/DVV/5233DVV-5.2.1_signed.pdf'
import cr_dvv_pdf_24 from '../Pdf files/NAAC/DVV/80773DVV-5.1.4 sign.pdf'
import cr_dvv_pdf_25 from '../Pdf files/NAAC/DVV/997045.1.4-Mechanism for timely redressal.pdf'
import cr_dvv_pdf_26 from '../Pdf files/NAAC/DVV/52035DVV-6.3.3 sign.pdf'
import cr_dvv_pdf_27 from '../Pdf files/NAAC/DVV/79668DVV-6.2.2 sign.pdf'
import cr_dvv_pdf_28 from '../Pdf files/NAAC/DVV/58175DVV-6.5.2 sign.pdf'
import cr_dvv_pdf_29 from '../Pdf files/NAAC/DVV/10133DVV-7.1.3_signed.pdf'
import cr_dvv_pdf_30 from '../Pdf files/NAAC/DVV/34243DVV-7.1.2 sign.pdf'
import cr_dvv_pdf_31 from '../Pdf files/NAAC/DVV/2703DVV-2.1 Sign.pdf'
import cr_dvv_pdf_32 from '../Pdf files/NAAC/DVV/52289DVV-2.2 Sign.pdf'
import cr_dvv_pdf_33 from '../Pdf files/NAAC/DVV/90904DVV-3.1 Sign.pdf'
import cr_dvv_pdf_34 from '../Pdf files/NAAC/DVV/96268DVV EP 1.1 Admission approval documents sign.pdf'
import cr_dvv_pdf_35 from '../Pdf files/NAAC/DVV/34697DVV-EP1.1_signed.pdf'


export function Naac() {
    return (
        <>
            <div className={myStyles.container}>
                <h2 className={myStyles.section_title}>NAAC Committee</h2>

                <div className={myStyles.governing_staffs}>
                    <div className={myStyles.staffs}>
                        <h5>Chairperson</h5>
                        <p>Dr. Debjani Datta<br /><span className={myStyles.designation}>Principal</span></p>
                    </div>

                    <div className={myStyles.staffs}>
                        <h5>Member</h5>
                        <p>Dr. Partha Pratim Chaudhuri<br /><span className={myStyles.designation}>Associate Prof.,Dept. of Zoology</span></p>
                    </div>

                    <div className={myStyles.staffs}>
                        <h5>Member</h5>
                        <p>Dr. Bhanusuta Mitra<br /><span className={myStyles.designation}>Associate Prof.,Dept. of Chemistry</span></p>
                    </div>

                    <div className={myStyles.staffs}>
                        <h5>Joint Co-ordinator</h5>
                        <p>Dr. Sandip Sinha<br /><span className={myStyles.designation}>Associate Prof.,Dept. of Commerce</span></p>
                    </div>

                    <div className={myStyles.staffs}>
                        <h5>Joint Co-ordinator</h5>
                        <p>Dr. Gautam Das<br /><span className={myStyles.designation}>Associate Prof.,Dept. of Commerce</span></p>
                    </div>

                    <div className={myStyles.staffs}>
                        <h5>Member</h5>
                        <p>Dr. Kishor Naskar<br /><span className={myStyles.designation}>Assistant Prof., Dept. of Economics</span></p>
                    </div>
                    <div className={myStyles.staffs}>
                        <h5>Member</h5>
                        <p>Dr. Papia Das<br /><span className={myStyles.designation}>Assistant Prof., Dept. of Zoology</span></p>
                    </div>
                    <div className={myStyles.staffs}>
                        <h5>Member</h5>
                        <p>Dr. Reshmi Sarkar<br /><span className={myStyles.designation}>Librarian </span></p>
                    </div>
                </div>
            </div>

            <div class={myStyles.container}>
                <h2 class={myStyles.section_title}>SSR</h2>
                <div class={myStyles.grid}>
                    <div class={myStyles.card}>
                        <h3>Criterion 1</h3>
                        <div class={`${myStyles.point} ${myStyles.highlight}`}>1.3.2.1: Number of students undertaking project work/field work/internship</div>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_1_pd1_1} download="1.3.2.1-A">1.3.2.1-A</a></li>
                                <li><a href={cr_1_pd1_2} download="1.3.2.1-B">1.3.2.1-B</a></li>
                                <li><a href={cr_1_pd1_3} download="1.3.2.1-C">1.3.2.1-C</a></li>
                                <li><a href={cr_1_pd1_4} download="1.3.2.1-D">1.3.2.1-D</a></li>
                                <li><a href={cr_1_feedback1} download="Feedback Analysis">1.4.1: Feedback Analysis</a></li>
                                <li><a href={cr_1_feedback2} download="Sample Feedback Forms">1.4.1: Sample Feedback Forms</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class={myStyles.card}>
                        <h3>Criterion 2</h3>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_2_pdf_1} download="17105954162.3.1 sign.PDF">2.3.1: Additional Information</a></li>
                                <li><a href={cr_2_pdf_2} download="17105960602.4.2-Copies of PhD Certificates attested.pdf">2.4.2: Copies of Ph.D. Certificates</a></li>
                                <li><a href={cr_2_pdf_3} download="1777772.6.1 2.6.2 BudgeBudgeCollege_POCOCBCS_signed.pdf">2.6.1: Programme Outcomes (POs) and Course Outcomes (COs)</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class={myStyles.card}>
                        <h3>Criterion 3</h3>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_3_pdf_1} download="17107435373.2.2-Seminar-report-Final sign.pdf">3.2.2: Seminar Report</a></li>
                                <li><a href={cr_3_pdf_2} download="17107415603.3.2-Copy of relevant pages_signed.pdf">3.3.2: Relevant Pages</a></li>
                                <li><a href={cr_3_pdf_3} download="17107422463.4.3 (a) Photographs sign.pdf">3.4.3: Photographs</a></li>
                                <li><a href={cr_3_pdf_4} download="17106790213.5.1 (a)-List of year-wise actvities sign.pdf">3.5.1(a): Year wise Activities</a></li>
                                <li><a href={cr_3_pdf_5} download="17106790983.5.1(b)Copies of MOUs attested.pdf">3.5.1(b): Copies of MOUs</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class={myStyles.card}>
                        <h3>Criterion 4</h3>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_4_pdf_1} download="17107525764.3.2.1 Photographs of Computers Used by the Students.pdf">4.3.2.1: Computers Used by the Students</a></li>
                                <li><a href={cr_4_pdf_2} download="17105965314.4.1-Audited Statement.pdf">4.4.1: Audited Statement</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class={myStyles.card}>
                        <h3>Criterion 5</h3>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_5_pdf_1} download="17105967375.1.1.1. (a) Year-wise list of beneficiary students sign.pdf">5.1.1.1: Year-wise List of Beneficiary Students</a></li>
                                <li><a href={cr_5_pdf_2} download="17105968335.2.1.1. List of students placed sign.pdf">5.2.1.1: List of Students Placed</a></li>
                                <li><a href={cr_5_pdf_3} download="17105970275.2.1.1. List of students progressing for Higher Education sign.pdf">5.2.1.1: List of Students Progressing for Higher Education</a></li>
                                <li><a href={cr_5_pdf_4} download="17105971855.3.2.1-Supporting Documents sign.pdf">5.3.2.1: Supporting Documents</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class={myStyles.card}>
                        <h3>Criterion 6</h3>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_6_pdf_1} download="17105982606.3.3 (b)-Copy of the certificates of the program sign.pdf">6.3.3.1: Copy of the Certificates of the Program</a></li>
                                <li><a href={cr_6_pdf_2} download="17107506706.5.2-Quality Audit Report.pdf">6.5.2: Quality Audit Report</a></li>
                                <li><a href={cr_6_pdf_3} download="17106829016.5.2-Minutes of IQAC Meetings attested-1.pdf">6.5.2: Minutes of IQAC Meetings Attested</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class={myStyles.card}>
                        <h3>Criterion 7</h3>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_7_pdf_1} download="17106793577.1.2-Supporting Documents.pdf">7.1.2: Supporting Documents</a></li>
                                <li><a href={cr_7_pdf_2} download="17107589807.1.2-Divyagjan sign.pdf">7.1.2: Divyagjan</a></li>
                                <li><a href={cr_7_pdf_3} download="17107477597.1.3-Beyond the campus env protection sign.pdf">7.1.3: Beyond the Campus Environment Protection</a></li>
                                <li><a href={cr_7_pdf_4} download="17106824467.1.3-Green Audit Report.pdf">7.1.3: Green and Energy Audit Reports</a></li>
                                <li><a href={cr_7_pdf_5} download="17107450887.2.1-Best practices sign.pdf">7.2.1: Best Practices</a></li>
                                <li><a href={cr_7_pdf_6} download="17107451477.3.1-Insitutional Distinctiveness sign.pdf">7.3.1: Institutional Distinctiveness</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class={myStyles.card}>
                        <h3>SSR</h3>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_ssr_pdf_1} download="58309SSR-WBCOGN12389.pdf">SSR-CYCLE-3</a></li>
                                <li><a href={cr_ssr_pdf_2} download="SSR-Cycle 2.pdf">SSR-CYCLE-2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class={myStyles.container}>
                <h2 class={myStyles.section_title}>AQAR</h2>
                <div class={myStyles.grid}>
                    <div class={myStyles.card}>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_aqar_pdf_1} download="83172AQAR 2023-24 REPORT.pdf">AQAR REPORT 2023-24</a></li>
                                <li><a href={cr_aqar_pdf_2} download="17356Cateogry-wise Sem 1 All Students 2023-2024-Final.pdf">AQAR 2023-24 EXTENDED 2.2</a></li>
                                <li><a href={cr_aqar_pdf_3} download="466475.1.2.pdf">AQAR 2023-24 5.1.2</a></li>
                                <li><a href={cr_aqar_pdf_4} download="152907.1.8_2023-24.pdf">AQAR 2023-24 7.1.8</a></li>
                                <li><a href={cr_aqar_pdf_5} download="662187.1.6.1-Green Audit Report_2023-24.pdf">AQAR 2023-24 7.1.6</a></li>
                                <li><a href={cr_aqar_pdf_6} download="9236ICT PHOTOS.pdf">AQAR 2023-24 4.1.3</a></li>
                                <li><a href={cr_aqar_pdf_7} download="625084.1.2 AUDITORIUM &  BILLS.pdf">AQAR 2023-24 4.1.2</a></li>
                                <li><a href={cr_aqar_pdf_8} download="207043.2.2 -2023-24.pdf">AQAR 2023-24 3.2.2</a></li>
                                <li><a href={cr_aqar_pdf_9} download="466272.6.1 2.6.2 BudgeBudgeCollege_POCOCBCS_signed.pdf">AQAR 2023-24 2.6.1 & 2.6.2</a></li>
                                <li><a href={cr_aqar_pdf_10} download="371642.5.1 2.5.2 2023-24.pdf">AQAR 2023-24 2.5.1 & 2.5.2</a></li>
                                <li><a href={cr_aqar_pdf_11} download="11452.4.2 PHD 2023-24.pdf">AQAR 2023-24 2.4.2</a></li>
                                <li><a href={cr_aqar_pdf_12} download="536773.2 2.4.1 Sanctioned Post 2023-24.pdf">AQAR 2023-24 2.4.1-2</a></li>
                                <li><a href={cr_aqar_pdf_13} download="179992.4.1 BudgeBudgeCOllege_Appointment Letters 2023-24.pdf">AQAR 2023-24 2.4.1-1</a></li>
                                <li><a href={cr_aqar_pdf_14} download="715482.1.2.pdf">AQAR 2023-24 2.1.2</a></li>
                                <li><a href={cr_aqar_pdf_15} download="203161.3.2 & 1.3.3.pdf">AQAR 2023-24 1.3.2 & 1.3.3</a></li>
                                <li><a href={cr_aqar_pdf_16} download="293501.3.1.pdf">AQAR 2023-24 1.3.1</a></li>
                                <li><a href={cr_aqar_pdf_17} download="991571.1.3.pdf">AQAR 2023-24 1.1.3</a></li>
                                <li><a href={cr_aqar_pdf_18} download="7471.4.2.pdf">AQAR 2023-24 1.4.2</a></li>
                                <li><a href={cr_aqar_pdf_19} download="891501.1.2.pdf">AQAR 2023-24 1.1.2</a></li>
                                <li><a href={cr_aqar_pdf_20} download="602571.1.1.pdf">AQAR 2023-24 1.1.1</a></li>
                                <li><a href={cr_aqar_pdf_21} download="582672.7.1.pdf">AQAR 2023-24 2.7.1</a></li>
                                <li><a href={cr_aqar_pdf_22} download="925552.6.3.2.pdf">AQAR 2023-24 2.6.3.2</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class={myStyles.card}>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_aqar_pdf_23} download="892062.3.2.pdf">AQAR 2023-24 2.3.2</a></li>
                                <li><a href={cr_aqar_pdf_24} download="700774.1.3.pdf">AQAR 2023-24 4.1.3</a></li>
                                <li><a href={cr_aqar_pdf_25} download="264624.1.2.pdf">AQAR 2023-24 4.1.2</a></li>
                                <li><a href={cr_aqar_pdf_26} download="405124.1.1.pdf">AQAR 2023-24 4.1.1</a></li>
                                <li><a href={cr_aqar_pdf_27} download="894026.5.1.pdf">AQAR 2023-24 6.5.1</a></li>
                                <li><a href={cr_aqar_pdf_28} download="923246.4.3.pdf">AQAR 2023-24 6.4.3</a></li>
                                <li><a href={cr_aqar_pdf_29} download="566896.4.1.pdf">AQAR 2023-24 6.4.1</a></li>
                                <li><a href={cr_aqar_pdf_30} download="66806.2.2.pdf">AQAR 2023-24 6.2.2</a></li>
                                <li><a href={cr_aqar_pdf_31} download="684836.2.1.pdf">AQAR 2023-24 6.2.1</a></li>
                                <li><a href={cr_aqar_pdf_32} download="810926.1.2.pdf">AQAR 2023-24 6.1.2</a></li>
                                <li><a href={cr_aqar_pdf_33} download="520336.1.1.pdf">AQAR 2023-24 6.1.1</a></li>
                                <li><a href={cr_aqar_pdf_34} download="254497.1.1.pdf">AQAR 2023-24 7.1.1</a></li>
                                <li><a href={cr_aqar_pdf_35} download="21637.2.1-BEST PRACTICES.pdf">AQAR 2023-24 7.2.1 BEST PRACTICES</a></li>
                                <li><a href={cr_aqar_pdf_36} download="50937IQAC Meeting 2023-24.pdf">MINUTES OF IQAC MEETINGS FOR THE ACADEMIC YEAR 2024-25</a></li>
                                <li><a href={cr_aqar_pdf_37} download="1707113324IQAC Meetings & ATR.pdf">IIQA MINUTES OF MEETINGS AND ACTION TAKEN REPORT FOR THE ACADEMIC YEARS 2018-19, 2019-20, 2020-21, 2021-22, 2022-23</a></li>
                                <li><a href={cr_aqar_pdf_38} download="1698830592Final AQAR 2022-23.pdf">AQAR 2022-23</a></li>
                                <li><a href={cr_aqar_pdf_39} download="1675413766AQAR 2021-22.pdf">AQAR 2021-22</a></li>
                                <li><a href={cr_aqar_pdf_40} download="1668595372AQAR 2020-21.pdf">AQAR 2020-21</a></li>
                                <li><a href={cr_aqar_pdf_41} download="1659182957AQAR-2019-20.pdf">AQAR 2019-20</a></li>
                                <li><a href={cr_aqar_pdf_42} download="1658479572AQAR 2018-19.pdf">AQAR 2018-19</a></li>
                                <li><a href={cr_aqar_pdf_43} download="1658214731AQAR submitted 2017-18.pdf">AQAR 2017-18</a></li>
                                <li><a href={cr_aqar_pdf_44} download="1657700865AQAR-2016-17.pdf">AQAR 2016-17</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class={myStyles.container}>
                <h2 class={myStyles.section_title}>IIQA</h2>
                <div class={myStyles.grid}>
                    <div class={myStyles.card}>
                        <h3>Sustainability Measures</h3>
                        <div class={myStyles.point}><a href={cr_iiqa_pdf_1} download="IIQA-UNDERTAKING.pdf">IIQA UNDERTAKING</a></div>
                        <div class={myStyles.point}><a href={cr_iiqa_pdf_2} download="IQAC Meetings & ATR.pdf">Minutes of IQAC Meeting & Action Taken Report</a></div>
                        <div class={myStyles.point}><a href={cr_iiqa_pdf_3} download="IIQA.pdf">IIQA</a></div>
                    </div>
                </div>
            </div>

            <div class={myStyles.container}>
                <h2 class={myStyles.section_title}>DVV</h2>
                <div class={myStyles.grid}>
                    <div class={myStyles.card}>
                        <h3>Criterion 1</h3>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_dvv_pdf_1} download="93282DVV-1.3.2_signed.pdf">1.3.2 Percentage of students undertaking project work/field work/ internships</a></li>
                                <li><a href={cr_dvv_pdf_2} download="92304DVV-1.4.1 sign.pdf">1.4.1 Institution obtains feedback on the academic performance and ambience of the institution from various stakeholders and action taken report on the feedback is made available on institutional website</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class={myStyles.card}>
                        <h3>Criterion 2</h3>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_dvv_pdf_3} download="12325DVV-2.2.1 Sign.pdf">2.2.1 Student – Full time Teacher Ratio</a></li>
                                <li><a href={cr_dvv_pdf_4} download="43045DVV2.4.1_signed.pdf">2.4.1 Percentage of full-time teachers against sanctioned posts during the last five years</a></li>
                                <li><a href={cr_dvv_pdf_5} download="72368DVV-2.6.3 Sign.pdf">2.4.2 Percentage of full time teachers with NET/SET/SLET/ Ph. D./D.Sc. / D.Litt./L.L.D. during the last five years</a></li>
                                <li><a href={cr_dvv_pdf_6} download="55636DVV 2.1.1 signed.pdf">2.6.3 Pass percentage of Students during last five years</a></li>
                                <li><a href={cr_dvv_pdf_7} download="95412DVV 2.1.2 signed.pdf">2.1.1 Enrolment percentage</a></li>
                                <li><a href={cr_dvv_pdf_8} download="95412DVV 2.1.2 signed.pdf">2.1.2 Percentage of seats filled against reserved categories (SC, ST, OBC etc.) as per applicable reservation policy for the first year admission during the last five years</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class={myStyles.card}>
                        <h3>Criterion 3</h3>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_dvv_pdf_9} download="484173.3.1-Journal Articles sign.pdf">3.3.1 B - Research papers published by teachers in UGC CARE listed Journals</a></li>
                                <li><a href={cr_dvv_pdf_10} download="89698DVV-3.2.2 Sign.pdf">3.2.2 Number of workshops/seminars/conferences including on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship conducted during the last five years</a></li>
                                <li><a href={cr_dvv_pdf_11} download="71522DVV-3.3.1 Sign.pdf">3.3.1 Number of research papers published per teacher in the Journals notified on UGC care list during the last five years</a></li>
                                <li><a href={cr_dvv_pdf_12} download="16526DVV-3.3.2 signed.pdf">3.3.2 Number of books and chapters in edited volumes/books published and papers published in national/ international conference proceedings per teacher during last five years</a></li>
                                <li><a href={cr_dvv_pdf_13} download="30757DVV-3.4.3 sign.pdf">3.4.3 Number of extension and outreach programs conducted by the institution through organized forums including NSS/NCC with involvement of community during the last five years</a></li>
                                <li><a href={cr_dvv_pdf_14} download="28624DVV-3.5.1 sign.pdf">3.5.1 : Number of functional MoUs/linkages with institutions/ industries in India and abroad for internship, on-the-job training, project work, student / faculty exchange and collaborative research during the last five years.</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class={myStyles.card}>
                        <h3>Criterion 4</h3>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_dvv_pdf_15} download="93676DVV-4.1.2.pdf">4.1.2 Percentage of expenditure for infrastructure development and augmentation excluding salary during the last five years</a></li>
                                <li><a href={cr_dvv_pdf_16} download="76511DVV-4.3.2.pdf">4.3.2 Student – Computer ratio</a></li>
                                <li><a href={cr_dvv_pdf_17} download="36836DVV-4.4.1.pdf">4.4.1 Percentage expenditure incurred on maintenance of physical facilities and academic support facilities excluding salary component, during the last five years</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class={myStyles.card}>
                        <h3>Criterion 5</h3>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_dvv_pdf_18} download="96982DVV-5.1.1 sign.pdf">5.1.1 Percentage of students benefited by scholarships and freeships provided by the institution, government and non-government bodies, industries, individuals, philanthropists during the last five years</a></li>
                                <li><a href={cr_dvv_pdf_19} download="83596DVV-5.1.3 sign.pdf">5.1.3 Percentage of students benefitted by guidance for competitive examinations and career counseling offered by the Institution during the last five years</a></li>
                                <li><a href={cr_dvv_pdf_20} download="17105965314.4.1-Audited Statement.pdf">5.2.2 Percentage of students qualifying in state/national/ international level examinations during the last five years</a></li>
                                <li><a href={cr_dvv_pdf_21} download="17105965314.4.1-Audited Statement.pdf">5.3.1 Number of awards/medals for outstanding performance in sports/ cultural activities at University / state/ national / international level</a></li>
                                <li><a href={cr_dvv_pdf_22} download="17105965314.4.1-Audited Statement.pdf">5.3.2 Average number of sports and cultural programs in which students of the Institution participated during last five years</a></li>
                                <li><a href={cr_dvv_pdf_23} download="17105965314.4.1-Audited Statement.pdf">5.2.1 Percentage of placement of outgoing students and students progressing to higher education during the last five years</a></li>
                                <li><a href={cr_dvv_pdf_24} download="17105965314.4.1-Audited Statement.pdf">5.1.4 : The institution adopts the following for redressal of student grievances including sexual harassment and ragging cases</a></li>
                                <li><a href={cr_dvv_pdf_25} download="17105965314.4.1-Audited Statement.pdf">5.1.4 : Mechanism for timely redressal of the grievances</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class={myStyles.card}>
                        <h3>Criterion 6</h3>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_dvv_pdf_26} download="17105967375.1.1.1. (a) Year-wise list of beneficiary students sign.pdf">6.3.3 Percentage of teaching and non-teaching staff participating in Faculty development Programmes (FDP), Management Development Programmes (MDPs) professional development /administrative training programs during the last five years</a></li>
                                <li><a href={cr_dvv_pdf_27} download="17105968335.2.1.1. List of students placed sign.pdf">6.2.2 : Institution implements e-governance in its operations</a></li>
                                <li><a href={cr_dvv_pdf_28} download="17105970275.2.1.1. List of students progressing for Higher Education sign.pdf">6.5.2:Quality assurance initiatives of the institution</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class={myStyles.card}>
                        <h3>Criterion 7</h3>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_dvv_pdf_29} download="17105982606.3.3 (b)-Copy of the certificates of the program sign.pdf">7.1.3 Quality audits on environment and energy regularly undertaken by the Institution.</a></li>
                                <li><a href={cr_dvv_pdf_30} download="17107506706.5.2-Quality Audit Report.pdf">7.1.2: The Institution has facilities and initiatives for</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class={myStyles.card}>
                        <h3>EXTENDED PROFILE</h3>
                        <div class={myStyles.point}>
                            <ul class={myStyles.equipment_list}>
                                <li><a href={cr_dvv_pdf_31} download="17106793577.1.2-Supporting Documents.pdf">2.1 Number of teaching staff / full time teachers during the last five years</a></li>
                                <li><a href={cr_dvv_pdf_32} download="17107589807.1.2-Divyagjan sign.pdf">2.2 Number of teaching staff / full time teachers year wise during the last five years
                                </a></li>
                                <li><a href={cr_dvv_pdf_33} download="17107477597.1.3-Beyond the campus env protection sign.pdf">3.1 Expenditure excluding salary component year wise during the last five years</a></li>
                                <li><a href={cr_dvv_pdf_34} download="17106824467.1.3-Green Audit Report.pdf">1.1 Certified Admission Approval Document for Asessment Period</a></li>
                                <li><a href={cr_dvv_pdf_35} download="17107450887.2.1-Best practices sign.pdf">1.1 Number of students year wise during the last five years</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
