import React from 'react';
import myStyles from './studentzone.module.css';

export function Studentzone() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Student Zone</h2>
            <div className={myStyles.container}>
                <h2 className={myStyles.section_title}>Kanyashree Prakalpa</h2>

                <div className={myStyles.grid}>
                    <div className={myStyles.card}>
                        <h3>Key Objectives</h3>
                        <div className={`${myStyles.point} ${myStyles.highlight}`}>
                            Prevent child marriage & promote education
                        </div>
                        <div className={myStyles.point}>
                            <span className={myStyles.highlight}>Goals:</span>
                            <ul className={myStyles.equipment_list}>
                                <li>Delay marriage until 18+</li>
                                <li>Reduce school dropouts</li>
                                <li>Provide financial aid</li>
                                <li>Empower girls through scholarships</li>
                            </ul>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3>Categories & Benefits</h3>
                        <div className={myStyles.point}><span className={myStyles.highlight}>K1:</span> ₹1,000/year (13-18 years)</div>
                        <div className={myStyles.point}><span className={myStyles.highlight}>K2:</span> ₹25,000 (18-19 years)</div>
                        <div className={myStyles.point}><span className={myStyles.highlight}>K3:</span> Science: ₹2,500/month | Arts: ₹2,000/month</div>
                    </div>

                    <div className={myStyles.card}>
                        <h3>Eligibility</h3>
                        <div className={myStyles.point}>
                            <span className={myStyles.highlight}>K1:</span>
                            <ul className={myStyles.equipment_list}>
                                <li>Resident of West Bengal, unmarried, 13-18 years</li>
                                <li>Studying in class 8 or above, family income ≤ ₹1.2 lakh/year</li>
                                <li>Valid bank account, exemptions for disabled, orphans</li>
                            </ul>
                        </div>
                        <div className={myStyles.point}>
                            <span className={myStyles.highlight}>K2:</span>
                            <ul className={myStyles.equipment_list}>
                                <li>Resident of West Bengal, unmarried, 18-19 years</li>
                                <li>Enrolled in higher education/training, income ≤ ₹1.2 lakh/year</li>
                                <li>Bank account required, exemptions for special cases</li>
                            </ul>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3>Beneficiary Stats (Budge Budge College)</h3>
                        <div className={myStyles.point}>
                            <table className={myStyles.stats_table}>
                                <thead>
                                    <tr><th>Year</th><th>K1</th><th>K2</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>2014 - 15</td><td>73</td><td>193</td></tr>
                                    <tr><td>2015 - 16</td><td>-</td><td>208</td></tr>
                                    <tr><td>2016 - 17</td><td>5</td><td>352</td></tr>
                                    <tr><td>2017 - 18</td><td>7</td><td>465</td></tr>
                                    <tr><td>2018 - 19</td><td>3</td><td>379</td></tr>
                                    <tr><td>2019 - 20</td><td>38</td><td>331</td></tr>
                                    <tr><td>2020 - 21</td><td>15</td><td>89</td></tr>
                                    <tr><td>2021 - 22</td><td>01</td><td>16</td></tr>
                                    <tr><td>2022 - 23</td><td>04</td><td>17</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
