import React from 'react'
import myStyles from './librarysubcommittee.module.css'
export function Librarysubcommittee() {
    return (
        <>
            <div className={myStyles.library_subcommittee}>
                <h1>Library Sub-Committee</h1>
            </div>
            <div className={myStyles.staffs}>
                <table>
                    <tr>
                        <th>Sub Committee Name</th>
                        <th>Member</th>
                        <th>Designation</th>
                    </tr>
                    <tr>
                        <td>Library Sub-Committee</td>
                        <td>Dr. Debjani Datta</td>
                        <td>Chairperson - Principal</td>
                    </tr>
                    <tr>
                        <td>Library Sub-Committee</td>
                        <td>Dr. Partha Pratim Chaudhuri</td>
                        <td>Associate Professor, Dept. of Zoology</td>
                    </tr>
                    <tr>
                        <td>Library Sub-Committee</td>
                        <td>Dr. Gautam Das</td>
                        <td>Associate Professor, Dept. of Commerce</td>
                    </tr>
                    <tr>
                        <td>Library Sub-Committee</td>
                        <td>Dr. Dipak Mandal</td>
                        <td>Associate Professor, Dept. of History</td>
                    </tr>
                    <tr>
                        <td>Library Sub-Committee</td>
                        <td>Dr. Shreya Chakravorty</td>
                        <td>Asst. Prof., Dept. of English</td>
                    </tr>
                    <tr>
                        <td>Library Sub-Committee</td>
                        <td>Dr. Reshmi Sarkar</td>
                        <td>Convenor, Librarian</td>
                    </tr>
                </table>
            </div>
        </>
    )
}
