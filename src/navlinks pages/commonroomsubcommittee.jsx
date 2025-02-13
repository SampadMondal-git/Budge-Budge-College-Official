import React from 'react'
import myStyles from './commonroomsubcommittee.module.css'
export function Commonroomsubcommittee() {
    return (
        <>
            <div className={myStyles.common_room_subcommittee}>
                <h1>Common Room Sub-Committee</h1>
            </div>
            <div className={myStyles.staffs}>
                <table>
                    <tr>
                        <th>Sub Committee Name</th>
                        <th>Member</th>
                        <th>Designation</th>
                    </tr>
                    <tr>
                        <td>Common Room Sub-Committee</td>
                        <td>Dr. Debasis Upadhay</td>
                        <td>Asst. Prof.,Dept. of Botany</td>
                    </tr>
                    <tr>
                        <td>Common Room Sub-Committee</td>
                        <td>Dr. Anup Kumar Sahoo</td>
                        <td>Convenor,Asst. Professor, Dept. of Physics</td>
                    </tr>
                    <tr>
                        <td>Common Room Sub-Committee</td>
                        <td>Dr. Dipak Mandal</td>
                        <td>Associate Prof., Dept. of History</td>
                    </tr>
                    <tr>
                        <td>Common Room Sub-Committee</td>
                        <td>Dr. Samiran Panday</td>
                        <td>Asst. Prof.,Dept. of Botany</td>
                    </tr>
                    <tr>
                        <td>Common Room Sub-Committee</td>
                        <td>Buddham Tamang</td>
                        <td>Asst. Prof., Dept. of Political Science</td>
                    </tr>
                    <tr>
                        <td>Common Room Sub-Committee</td>
                        <td>Sumit Santra</td>
                        <td>SACT-II, Dept. of History</td>
                    </tr>
                </table>
            </div>
        </>
    )
}
