import React from 'react'
import myStyle from './admissionprocedure.module.css'
export function Admissionprocedure() {
    return (
        <>
            <div className={myStyle.container}>
                <h2 className={myStyle.section_title}>Admission Procedure</h2>

                <div className={myStyle.grid}>
                    <div className={myStyle.contact_info}>
                        <p>No content available right now</p>
                    </div>
                </div>
            </div>
        </>
    )
}

// import React from 'react';
// import myStyles from './admissionprocedure.module.css';

// export function Admissionprocedure() {
//     return (
//         <div className={myStyles.container}>
//             <h1 className={myStyles.section_title}>Admission Procedure</h1>
            
//             <div className={myStyles.procedure_wrapper}>
//                 <div className={myStyles.timeline}>
//                     <div className={myStyles.timeline_item}>
//                         <div className={myStyles.timeline_marker}></div>
//                         <div className={myStyles.timeline_content}>
//                             <h3>Application Phase</h3>
//                             <ul className={myStyles.procedure_list}>
//                                 <li>Online registration portal access</li>
//                                 <li>Form submission guidelines</li>
//                                 <li>Document upload process</li>
//                             </ul>
//                         </div>
//                     </div>

//                     <div className={myStyles.timeline_item}>
//                         <div className={myStyles.timeline_marker}></div>
//                         <div className={myStyles.timeline_content}>
//                             <h3>Verification Process</h3>
//                             <ul className={myStyles.procedure_list}>
//                                 <li>Document authenticity check</li>
//                                 <li>Eligibility criteria validation</li>
//                                 <li>Application status tracking</li>
//                             </ul>
//                         </div>
//                     </div>

//                     <div className={myStyles.timeline_item}>
//                         <div className={myStyles.timeline_marker}></div>
//                         <div className={myStyles.timeline_content}>
//                             <h3>Admission Confirmation</h3>
//                             <ul className={myStyles.procedure_list}>
//                                 <li>Fee payment process</li>
//                                 <li>Seat allocation system</li>
//                                 <li>Orientation program details</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 <div className={myStyles.important_notice}>
//                     <div className={myStyles.notice_card}>
//                         <h3>Important Information</h3>
//                         <p>Admission portal opens on: June 15, 2024</p>
//                         <p>Last date for applications: July 10, 2024</p>
//                         <button className={myStyles.cta_button}>Download Brochure</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }