import React from 'react'
import myStyles from './sportssubcommittee.module.css'
export function Sportssubcommittee() {
  return (
    <>
    <div className={myStyles.sports_subcommittee}>
                <h1>Sports Sub-Committee</h1>
            </div>
            <div className={myStyles.staffs}>
                <table>
                    <tr>
                        <th>Sub Committee Name</th>
                        <th>Member</th>
                        <th>Designation</th>
                    </tr>
                    <tr>
                        <td>Sports Sub-Committee</td>
                        <td>Dr. Dipak Mandal</td>
                        <td>Associate Prof., Dept. of History</td>
                    </tr>
                    <tr>
                        <td>Sports Sub-Committee</td>
                        <td>Sajid Qamar</td>
                        <td>Asst. Prof., Dept. of Geography</td>
                    </tr>
                    <tr>
                        <td>Sports Sub-Committee</td>
                        <td>Sujit Kumar Mahato</td>
                        <td>Asst. Prof., Dept. of Commerce</td>
                    </tr>
                    <tr>
                        <td>Sports Sub-Committee</td>
                        <td>Mriganka Mallick</td>
                        <td>SACT-II, Dept. of Commerce</td>
                    </tr>
                    <tr>
                        <td>Sports Sub-Committee</td>
                        <td>Raj Kumar Shaw</td>
                        <td>SACT-II, Dept. of Psychology</td>
                    </tr>
                    <tr>
                        <td>Sports Sub-Committee</td>
                        <td>Sumit Santra</td>
                        <td>SACT-II, Dept. of History</td>
                    </tr>
                </table>
            </div>
    </>
  )
}
