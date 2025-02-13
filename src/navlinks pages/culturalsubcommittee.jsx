import React from 'react'
import myStyles from './culturalsubcommittee.module.css'
export function Culturalsubcommittee() {
  return (
    <>
    <div className={myStyles.cultural_subcommittee}>
                <h1>Cultural Sub-Committee</h1>
            </div>
            <div className={myStyles.staffs}>
                <table>
                    <tr>
                        <th>Sub Committee Name</th>
                        <th>Member</th>
                        <th>Designation</th>
                    </tr>
                    <tr>
                        <td>Cultural Sub-Committee</td>
                        <td>Dr. Priyanka Bose Das</td>
                        <td>Asst. Prof., Dept. of Education</td>
                    </tr>
                    <tr>
                        <td>Cultural Sub-Committee</td>
                        <td>Smita Sahu</td>
                        <td>Asst. Prof., Dept. of Food & Nutrition</td>
                    </tr>
                    <tr>
                        <td>Cultural Sub-Committee</td>
                        <td>Dr. Samiran Panday</td>
                        <td>Associate Prof., Dept. of Botany</td>
                    </tr>
                    <tr>
                        <td>Cultural Sub-Committee</td>
                        <td>Chumki Sarkar</td>
                        <td>SACT-II, Dept. of History</td>
                    </tr>
                    <tr>
                        <td>Cultural Sub-Committee</td>
                        <td>Piyali Das</td>
                        <td>SACT-II, Dept. of Botany</td>
                    </tr>
                    <tr>
                        <td>Cultural Sub-Committee</td>
                        <td>Sumit Santra</td>
                        <td>SACT-II, Dept. of History</td>
                    </tr>
                </table>
            </div>
    </>
  )
}
