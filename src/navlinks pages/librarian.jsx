import React from 'react'
import myStyles from './librarian.module.css'
export function Librarian() {
    return (
        <>
            <div className={myStyles.librarian}>
                <h1>Librarian</h1>
            </div>
            <div className={myStyles.staffs}>
                <table>
                    <tr>
                        <th>Member</th>
                        <th>Designation</th>
                        <th>Qualification</th>
                        <th>Stream</th>
                        <th>Subject</th>
                        <th>Resume</th>
                    </tr>
                    <tr>
                        <td>DR. RESHMI SARKAR</td>
                        <td>Librarian</td>
                        <td>M.LIS., Ph.D</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </>
    )
}
