import React from 'react'
import myStyles from './buildingsubcommittee.module.css'
export function Buildingsubcommittee() {
    return (
        <>
            <div className={myStyles.building_subcommittee}>
                <h1>Building Sub-Committee</h1>
            </div>
            <div className={myStyles.staffs}>
                <table>
                    <tr>
                        <th>Sub Committee Name</th>
                        <th>Member</th>
                        <th>Designation</th>
                    </tr>
                    <tr>
                        <td>Building Sub-Committee</td>
                        <td>Dr. Debjani Datta</td>
                        <td>Convenor, Principal</td>
                    </tr>
                    <tr>
                        <td>Building Sub-Committee</td>
                        <td>Dr. Anup Kumar Sahoo</td>
                        <td>Asst. Prof., Dept. of Physics</td>
                    </tr>
                    <tr>
                        <td>Building Sub-Committee</td>
                        <td>Dr. Dipak Mandal</td>
                        <td>Associate Prof., Dept. of History</td>
                    </tr>
                </table>
            </div>
        </>
    )
}
