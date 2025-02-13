import React from 'react'
import myStyles from './magazinesubcommittee.module.css'
export function Magazinesubcommittee() {
  return (
    <>
    <div className={myStyles.magazine_subcommittee}>
                <h1>Magazine Sub-Committee</h1>
            </div>
            <div className={myStyles.staffs}>
                <table>
                    <tr>
                        <th>Sub Committee Name</th>
                        <th>Member</th>
                        <th>Designation</th>
                    </tr>
                    <tr>
                        <td>Magazine Sub-Committee</td>
                        <td>Dr. Shreya Chakravorty</td>
                        <td>Assistant Prof, Dept. of English</td>
                    </tr>
                    <tr>
                        <td>Magazine Sub-Committee</td>
                        <td>Dr. Papia Das</td>
                        <td>Asst. Prof., Dept. of Zoology</td>
                    </tr>
                    <tr>
                        <td>Magazine Sub-Committee</td>
                        <td>Smita Sahu</td>
                        <td>Asst. Prof., Dept. of Food & Nutrition</td>
                    </tr>
                    <tr>
                        <td>Magazine Sub-Committee</td>
                        <td>Dr. Reshmi Sarkar</td>
                        <td>Convenor, Librarian</td>
                    </tr>
                    <tr>
                        <td>Magazine Sub-Committee</td>
                        <td>Sujit Kumar Mahato</td>
                        <td>Asst. Prof., Dept. of Commerce</td>
                    </tr>
                    <tr>
                        <td>Magazine Sub-Committee</td>
                        <td>Payel Roy</td>
                        <td>SACT-II, Dept. of Political Science</td>
                    </tr>
                    <tr>
                        <td>Magazine Sub-Committee</td>
                        <td>Sumana Das</td>
                        <td>SACT-II, Dept. of Geography</td>
                    </tr>
                </table>
            </div>
    </>
  )
}
