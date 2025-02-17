import React from 'react'
import myStyles from './naac.module.css'
//Criterion 1
import  cr_1_pd1_1 from '../Pdf files/NAAC/17105920761.3.2-1-200_signed.pdf'
import  cr_1_pd1_2 from '../Pdf files/NAAC/17105923051.3.2-201-400_signed.pdf'
import  cr_1_pd1_3 from '../Pdf files/NAAC/17105925221.3.2-401-640_signed.pdf'
import  cr_1_pd1_4 from '../Pdf files/NAAC/17105927391.3.2-641-838_signed.pdf'
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
    </>
  )
}
