import React from 'react'
import myStyles from './governingbody.module.css'
export function Governingbody() {
    return (
      <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Governing Body</h2>
        <div className={myStyles.governing_staffs}>
        <div className={myStyles.staffs}>
          <h5>President</h5>
          <p>Shri Ashoke Deb - Hon’ble Member of Assembly-Budge Budge, W.B.</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Principal / Secretary</h5>
          <p>Dr. Debjani Datta, M.Sc. (Gold Medalist), Ph. D.</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Nominee, C.U.</h5>
          <p>Dr. Arabindo Ghosh (Ex -Associate Professor)</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Nominee, Govt. of W.B.</h5>
          <p>Dr. Soumendu Sengupta (Ex-Principal, Maheshtala College)</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Teachers’ Representative</h5>
          <p>Dr. Partha Pratim Chaudhuri (Associate Professor, Dept of Zoology)</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Teachers’ Representative</h5>
          <p>Dr. Bhanusuta Mitra (Associate Professor, Dept. of Chemistry)</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Teachers’ Representative</h5>
          <p>Dr. Anup Kr. Sahoo (Assistant Professor, Dept. of Physics)</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Teachers’ Representative</h5>
          <p>Dr. Gautam Das (Associate Professor, Dept of Commerce)</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Non-Teaching Staff Representative</h5>
          <p>Shri Tanay Bhuinya (Lab Attendant)</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Non-Teaching Staff Representative</h5>
          <p>Shri Subrata Karmakar (Lab Attendant)</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Ex-officio member</h5>
          <p>Shri Gautam Dasgupta (Chairman, Budge Budge Municipality)</p>
        </div>
        </div>
      </div>
    )
  }