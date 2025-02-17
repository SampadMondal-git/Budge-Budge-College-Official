import React from 'react'
import myStyles from './notification.module.css'
//General Notice
import notice1 from '../Pdf files/General Notice/59513Seat Arrangment - 17.2.25- HOME CENTRE.pdf'
import notice2 from '../Pdf files/General Notice/33552Schedule_B.Com_Sem_III_2024.pdf'
import notice3 from '../Pdf files/General Notice/1161Not_Admit_ Semester-I_2024_CCF.pdf'
import notice4 from '../Pdf files/General Notice/93929Not_Admit_ Semester-III_2024.pdf'
import notice5 from '../Pdf files/General Notice/7653Not result-dis-1.pdf'
import notice6 from '../Pdf files/General Notice/36067Student Feedback Form 2025 -Sem-III.pdf'
import notice7 from '../Pdf files/General Notice/46965Not_Turning_Point.pdf'
import notice8 from '../Pdf files/General Notice/25695Hol_not_Feb_2025.pdf'
import notice9 from '../Pdf files/General Notice/62704Reschedule_of_Sem_V_Hons._Practical_Examination_2024_20250212_0001_638749642412528904.pdf'
import notice10 from '../Pdf files/General Notice/31518Not_Rev_dis_Sem5.pdf'
import notice11 from '../Pdf files/General Notice/1016Not result-dis.pdf'
import notice12 from '../Pdf files/General Notice/7850Not_Sem1_FormfillupExt25.pdf'
import notice13 from '../Pdf files/General Notice/25169Not_Sem3_FormfillupExt25.pdf'
import notice14 from '../Pdf files/General Notice/72726Seat Arrangment 5.2.25-Education.pdf'
import notice15 from '../Pdf files/General Notice/71145Not_res_distri-Sem II(CBCS).pdf'
import notice16 from '../Pdf files/General Notice/73159Not_ rev_Sem1_marksheet_ distriCCF.pdf'
import notice17 from '../Pdf files/General Notice/20994Not_Class_Sem_VI.pdf'
import notice18 from '../Pdf files/General Notice/18520Not_OASIS_Biometrics.pdf'
import notice19 from '../Pdf files/General Notice/5055Not_Class_Suspension3.pdf'

//Admission Notice
import admission1 from '../Pdf files/Admission Notice/55387Notice for Admission 1st Sem UG-1.pdf'
import admission2 from '../Pdf files/Admission Notice/533392nd phase verification.pdf'
import admission3 from '../Pdf files/Admission Notice/28363Sem I 2024.pdf'
import admission4 from '../Pdf files/Admission Notice/56115VERIFICATION OF SEM I.pdf'
import admission5 from '../Pdf files/Admission Notice/38667Admission Sub Committee.pdf'
import admission6 from '../Pdf files/Admission Notice/16570Corrigendum of admission notice.pdf'
import admission7 from '../Pdf files/Admission Notice/67166Verification of sem I.pdf'

//Tender Notice
import tender1 from '../Pdf files/Tender Notice/48312Tender-2-2025.pdf'
import tender2 from '../Pdf files/Tender Notice/91733Tender-1-2025.pdf'
import tender3 from '../Pdf files/Tender Notice/43593tender0001.pdf'
import tender4 from '../Pdf files/Tender Notice/67801TENDER 18.12.23-1.pdf'
import tender5 from '../Pdf files/Tender Notice/14470TENDER 12.12.23-3.pdf'
import tender6 from '../Pdf files/Tender Notice/79389TENDER 12.12.23-2.pdf'
import tender7 from '../Pdf files/Tender Notice/30548TENDER 12.12.23-1.pdf'

//Upcoming Events
import event1 from '../Pdf files/Upcoming Events/67949Not_WBSCC_1_25.pdf'
import event2 from '../Pdf files/Upcoming Events/3758South 24 Parganas District Games & Sports -2025.pdf'



export function Notification() {
    return (
        <>
            <div className={myStyles.container}>
                <h2 className={myStyles.section_title}>Latest Notifications</h2>

                <div className={myStyles.notice}>
                    <div className={myStyles.category}>
                        <h3 className={myStyles.category_title}>General Notices</h3>
                        <div className={myStyles.grid}>
                            <div className={myStyles.card}>
                                <h4>SEATING ARRANGEMENT FOR HOME CENTRE EXAMINATION ON 17/02/2025</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-18</span>
                                    <span><a href={notice1} download="59513Seat Arrangment - 17.2.25- HOME CENTRE.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>CU NOTIFICATION REGARDING REVISED SCHEDULE OF INDIAN FINANCIAL SYSTEM (CC3.2CH FOR HONS.) FOR B.COM. SEMESTER-III EXAMINATION, 2024 (UNDER CBCS)</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-17</span>
                                    <span><a href={notice2} download="33552Schedule_B.Com_Sem_III_2024.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>NOTIFICATION REGARDING DISTRIBUTION OF ADMIT CARD OF FOUR/THREE YEAR B.A./B.SC./B.COM. - SEMESTER-I (UNDER CFF, 2022) EXAMINATION, 2024 </h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-17</span>
                                    <span><a href={notice3} download="1161Not_Admit_ Semester-I_2024_CCF.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>NOTIFICATION REGARDING DISTRIBUTION OF ADMIT CARD OF B.A./B.SC./B.COM. (HONOURS/GENERAL) SEMESTER-III EXAMINATION, 2024 (UNDER CBCS)</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-17</span>
                                    <span><a href={notice4} download="93929Not_Admit_ Semester-III_2024.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>NOTIFICATION REGARDING MARKSHEET DISTRIBUTION</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-17</span>
                                    <span><a href={notice5} download="7653Not result-dis-1.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>LINK FOR STUDENT FEEDBACK FORM SEMESTER-III 2024</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-16</span>
                                    <span><a href={notice6} download="36067Student Feedback Form 2025 -Sem-III.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>NOTIFICATION REGARDING STUDENTS PARTICIPANTS IN THE "OPEN THE DOOR" PROGRAM ON MENTAL HEALTH</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-15</span>
                                    <span><a href={notice7} download="46965Not_Turning_Point.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>HOLIDAY NOTICE</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-15</span>
                                    <span><a href={notice8} download="25695Hol_not_Feb_2025.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>C.U. NOTIFICATION REGARDING RE-SCHEDULING OF PRACTICAL EXAMINATIONS REGARDING  B.A./B.SC. SEMESTER-V HONOURS (UNDER CBCS) EXAMINATIONS,2024</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-15</span>
                                    <span><a href={notice9} download="62704Reschedule_of_Sem_V_Hons._Practical_Examination_2024_20250212_0001_638749642412528904.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>NOTIFICATION REGARDING DISTRIBUTION OF REVISED MARK SHEET/GRADE-SHEET OF B.A./B.SC./B.COM.SEMESTER-VI(HONOURS/GENERAL) EXAMINATIONS,2024 (UNDER CBCS)</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-11</span>
                                    <span><a href={notice10} download="31518Not_Rev_dis_Sem5.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>NOTIFICATION REGARDING PREVIOUS MARKSHEETS DISTRIBUTION</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-11</span>
                                    <span><a href={notice11} download="1016Not result-dis.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>NOTIFICATION REGARDING EXTENSION OF THE SYSTEM OF ONLINE SUBMISSION OF FORMS FOR THE FOUR / THREE-YEAR B.A./B.SC./B.COM. SEMESTER-I EXAMINATION, 2024 (UNDER CCF, 2022)</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-07</span>
                                    <span><a href={notice12} download="7850Not_Sem1_FormfillupExt25.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>NOTIFICATION REGARDING EXTENSION OF THE SYSTEM OF ONLINE SUBMISSION OF FORMS FOR THE B.A./B.SC./B.COM. SEMESTER-III (HONS./GEN. /MAJOR) EXAMINATION, 2024 (UNDER CBCS)</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-07</span>
                                    <span><a href={notice13} download="25169Not_Sem3_FormfillupExt25.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>SEATING ARRANGEMENT FOR TUTORIAL SUBMISSION ON 05/02/2025</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-06</span>
                                    <span><a href={notice14} download="72726Seat Arrangment 5.2.25-Education.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>NOTIFICATION REGARDING DISTRIBUTION OF MARK SHEET/GRADE-SHEET  OF B.A./B.SC./B.COM. (HONOURS/ GENERAL) SEMESTER II  EXAMINATION, 2024 (UNDER CBCS)</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-06</span>
                                    <span><a href={notice15} download="71145Not_res_distri-Sem II(CBCS).pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>NOTIFICATION REGARDING DISTRIBUTION OF REVISED MARK SHEET/GRADE-SHEET OF 4 YEAR/3 YEAR B.A./B.SC./B.COM. SEMESTER-I EXAMINATION 2023 (UNDER CCF)</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-06</span>
                                    <span><a href={notice16} download="73159Not_ rev_Sem1_marksheet_ distriCCF.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>NOTIFICATION REGARDING COMMENCEMENT OF CLASSES OF HONOURS SUBJECT OF B.A./B.Sc. SEMESTER-VI</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-05</span>
                                    <span><a href={notice17} download="20994Not_Class_Sem_VI.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>NOTIFICATION REGARDING BIOMETRIC VERIFICATION FOR OASIS SCHOLARSHIP</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-05</span>
                                    <span><a href={notice18} download="18520Not_OASIS_Biometrics.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>NOTIFICATION REGARDING CLASS SUSPENSION</h4>
                                <div className={myStyles.date}>
                                    <span>2025-02-05</span>
                                    <span><a href={notice19} download="5055Not_Class_Suspension3.pdf">View Notice</a></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={myStyles.category}>
                        <h3 className={myStyles.category_title}>Admission Notices</h3>
                        <div className={myStyles.grid}>
                            <div className={myStyles.card}>
                                <h4>ADMISSION NOTICE FOR 1st SEMESTER UG COURSES FOR THE ACADEMIC SESSION 2024-2025</h4>
                                <div className={myStyles.date}>
                                    <span>2024-11-30</span>
                                    <span><a href={admission1} download="55387Notice for Admission 1st Sem UG-1.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.grid}>
                                <div className={myStyles.card}>
                                    <h4>Schedule for the verification process of Centralized Admission (2024) for semester I Students (who were admitted in 2nd phase) under CCF curriculum for Academic Session 2024-2025</h4>
                                    <div className={myStyles.date}>
                                        <span>2024-09-02</span>
                                        <span><a href={admission2} download="533392nd phase verification.pdf">View Notice</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className={myStyles.grid}>
                                <div className={myStyles.card}>
                                    <h4>Notice regarding commencement of the classes of B.A./B.Sc./B.Com. Four-year Honours and Honours with Research & Three-year Multidisciplinary Program Semester I, 2024 (Under CCF, 2022)</h4>
                                    <div className={myStyles.date}>
                                        <span>2024-08-06</span>
                                        <span><a href={admission3} download="28363Sem I 2024.pdf">View Notice</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className={myStyles.grid}>
                                <div className={myStyles.card}>
                                    <h4>Schedule for the verification process of Semester I, 2024 (under CCF, 2022) for the date of 31.07.2024 & 01.08.2024</h4>
                                    <div className={myStyles.date}>
                                        <span>2024-07-30</span>
                                        <span><a href={admission4} download="56115VERIFICATION OF SEM I.pdf">View Notice</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className={myStyles.grid}>
                                <div className={myStyles.card}>
                                    <h4>Admission Sub Committee</h4>
                                    <div className={myStyles.date}>
                                        <span>2024-07-29</span>
                                        <span><a href={admission5} download="38667Admission Sub Committee.pdf">View Notice</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className={myStyles.grid}>
                                <div className={myStyles.card}>
                                    <h4>Corrigendum of Admission Notice dated 25.07.2024</h4>
                                    <div className={myStyles.date}>
                                        <span>2024-07-27</span>
                                        <span><a href={admission6} download="16570Corrigendum of admission notice.pdf">View Notice</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className={myStyles.grid}>
                                <div className={myStyles.card}>
                                    <h4>Notification regarding Verification Process and Schedule of centralised admission for the Semester I, 2024 students of CCF curriculum</h4>
                                    <div className={myStyles.date}>
                                        <span>2025-02-25</span>
                                        <span><a href={admission7} download="67166Verification of sem I.pdf">View Notice</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={myStyles.category}>
                        <h3 className={myStyles.category_title}>Tender Notices</h3>
                        <div className={myStyles.grid}>
                            <div className={myStyles.card}>
                                <h4>TENDER NOTICE REGARDING CIVIL WORK</h4>
                                <div className={myStyles.date}>
                                    <span>2025-01-06</span>
                                    <span><a href={tender1} download="48312Tender-2-2025.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>TENDER NOTICE REGARDING CIVIL WORK</h4>
                                <div className={myStyles.date}>
                                    <span>2025-01-06</span>
                                    <span><a href={tender2} download="91733Tender-1-2025.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>TENDER FOR APPOINTMENT/EMPANELMENT OF CHARTERED ACCOUNTANT FIRM/FIRMS (PARTNERSHIP/SOLE PROPRIETORSHIP FIRMS) FOR ASSIGNMENT OF INVESTIGATION FOR NON-SETTLEMENT OF UGC FUND</h4>
                                <div className={myStyles.date}>
                                    <span>2024-02-17</span>
                                    <span><a href={tender3} download="43593tender0001.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>TENDER NOTICE REGARDING GREEN AUDIT</h4>
                                <div className={myStyles.date}>
                                    <span>2023-12-18</span>
                                    <span><a href={tender4} download="67801TENDER 18.12.23-1.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>TENDER NOTICE - FOR CONSTRUCTION/RENOVATION OF CAFETERIA-2nd FLOOR</h4>
                                <div className={myStyles.date}>
                                    <span>2023-12-12</span>
                                    <span><a href={tender5} download="14470TENDER 12.12.23-3.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>TENDER NOTICE - FOR CONSTRUCTION/RENOVATION OF CAFETERIA-1st FLOOR</h4>
                                <div className={myStyles.date}>
                                    <span>2023-12-12</span>
                                    <span><a href={tender6} download="79389TENDER 12.12.23-2.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>TENDER NOTICE - FOR CONSTRUCTION/RENOVATION OF CAFETERIA-GROUND FLOOR</h4>
                                <div className={myStyles.date}>
                                    <span>2023-12-12</span>
                                    <span><a href={tender7} download="30548TENDER 12.12.23-1.pdf">View Notice</a></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={myStyles.category}>
                        <h3 className={myStyles.category_title}>Upcoming Events</h3>
                        <div className={myStyles.grid}>
                            <div className={myStyles.card}>
                                <h4>NOTIFICATION REGARDING AWARENESS PROGRAMME FOR WBSCC</h4>
                                <div className={myStyles.date}>
                                    <span>2025-01-30</span>
                                    <span><a href={event1} download="67949Not_WBSCC_1_25.pdf">View Notice</a></span>
                                </div>
                            </div>
                            <div className={myStyles.card}>
                                <h4>SOUTH 24 PARGANAS DISTRICT GAMES &amp; SPORTS - 2025</h4>
                                <div className={myStyles.date}>
                                    <span>2025-01-20</span>
                                    <span><a href={event2} download="3758South 24 Parganas District Games & Sports -2025.pdf">View Notice</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
