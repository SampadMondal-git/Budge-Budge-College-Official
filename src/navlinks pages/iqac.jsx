import React from 'react'
import myStyles from './iqac.module.css'
export function Iqac() {
    return (
      <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>IQAC Committee</h2>
        <div className={myStyles.iqac_staffs}>
        <div className={myStyles.staffs}>
          <h5>Chairman / Principal</h5>
          <p>Dr. Debjani Datta, M.Sc. (Gold Medalist), Ph. D.</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Co-ordinator</h5>
          <p>Dr. Anup Kr. Sahoo (Assistant Professor, Dept. of Physics)</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Member</h5>
          <p>Dr. Kakali Ghosal (Assistant Professor, Dept. of Philosophy)</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Teachers’ Representative</h5>
          <p>Dr. Partha Pratim Chaudhuri (Associate Professor, Dept of Zoology)</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Member</h5>
          <p>Dr. Shruti Agrawal (Asst. Prof.,Dept. of Food & Nutrition)</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Member</h5>
          <p>Dr. Srabani Debnath (Assistant Professor, Dept. of Mathematics)</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Member</h5>
          <p>Dr. Reshmi Sarkar (Librarian)</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Member- Eminent Educationist</h5>
          <p>Dr. Suchismita Ray Paul (Associate Professor, Dept. of Sociology, Jogamaya Devi College)</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Member</h5>
          <p>Smt. Smita Sahu (Assistant Professor, Dept. of Food & Nutrition)</p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Member</h5>
          <p>Dr. Debasis Upadhyay (Associate Professor, Dept. of Botany)</p>
        </div>
        </div>
      </div>
    )
  }