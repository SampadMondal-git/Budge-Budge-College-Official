// import React from 'react'
// import myStyles from './PhD.module.css'

// export function PhD() {
//     return (
//         <>
//             <div className={myStyles.Phd}>
//                 <h1>PhD</h1>
//             </div>
//             <div className={myStyles.container}>

//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Sl no.</th>
//                             <th>Name</th>
//                             <th>Designation</th>
//                             <th>Department</th>
//                             <th>Title of Ph.D Thesis</th>
//                             <th>University</th>
//                             <th>Year</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>1</td>
//                             <td>Debjani Datta</td>
//                             <td>Principal</td>
//                             <td className={myStyles.department}>Zoology</td>
//                             <td>Biochemical and Immunological characterisation of the Sub-units of Sialic Acid binding horse shoe crab lectin-Carcinoscorpin</td>
//                             <td className={myStyles.university}>Jadavpur University</td>
//                             <td>1994</td>
//                         </tr>
//                         <tr>
//                             <td>2</td>
//                             <td>Arpita Ray Maulik</td>
//                             <td>Assistant Professor</td>
//                             <td className={myStyles.department}>Bengali</td>
//                             <td>Amiya Bhusan Majumdar-er Upanyase Nimnabrga: Ekti Bishleshonatmok Adhyayan</td>
//                             <td className={myStyles.university}>Assam University</td>
//                             <td>2014</td>
//                         </tr>
//                         <tr>
//                             <td>3</td>
//                             <td>Debashis Upadhyay</td>
//                             <td>Associate Professor</td>
//                             <td className={myStyles.department}>Botany</td>
//                             <td>Pollen Analysis And Antibacterial Activity Of Natural Honey Samples From the Coastal Districts of Orissa, India</td>
//                             <td className={myStyles.university}>University of Calcutta</td>
//                             <td>2016</td>
//                         </tr>
//                         <tr>
//                             <td>4</td>
//                             <td>Bhanusuta Mitra</td>
//                             <td>Associate Professor</td>
//                             <td className={myStyles.department}>Chemistry</td>
//                             <td>Structure and Transformation of Natural Products</td>
//                             <td className={myStyles.university}>University of Kalyani</td>
//                             <td>1989</td>
//                         </tr>
//                         <tr>
//                             <td>5</td>
//                             <td>Gautam Das</td>
//                             <td>Associate Professor</td>
//                             <td className={myStyles.department}>Commerce</td>
//                             <td>Performance of Initial Public Offerings (IPOS) in National Stock Exchange: A Study of Some Selected Companies in India</td>
//                             <td className={myStyles.university}>University of Calcutta</td>
//                             <td>2014</td>
//                         </tr>
//                         <tr>
//                             <td>6</td>
//                             <td>Priyanka Bose Das</td>
//                             <td>Assistant Professor</td>
//                             <td className={myStyles.department}>Education</td>
//                             <td>Comparative study of self concept, educational aspiration and locus of control of learners studying through distance mode and formal system of education</td>
//                             <td className={myStyles.university}>University of Calcutta</td>
//                             <td>2012</td>
//                         </tr>
//                         <tr>
//                             <td>7</td>
//                             <td>Shruti Agrawal</td>
//                             <td>Assistant Professor</td>
//                             <td className={myStyles.department}>Food & Nutrition</td>
//                             <td>The Changing Scenario of Diabetes Mellitus with Special Reference to Muzaffarpur Town</td>
//                             <td className={myStyles.university}>BRA Bihar University</td>
//                             <td>2008</td>
//                         </tr>
//                         <tr>
//                             <td>8</td>
//                             <td>Sweta Dutta</td>
//                             <td>Assistant Professor</td>
//                             <td className={myStyles.department}>History</td>
//                             <td>A Social History of the Natural Calamities in Colonial Bengal (1770-1943)</td>
//                             <td className={myStyles.university}>Jadavpur University</td>
//                             <td>2014</td>
//                         </tr>
//                         <tr>
//                             <td>9</td>
//                             <td>Dipak Mandal</td>
//                             <td>Associate Professor</td>
//                             <td className={myStyles.department}>History</td>
//                             <td>Chabbish Pargana Jelar Prathomik Siksha: Ekti Samajik Itihaas (1947-2010)</td>
//                             <td className={myStyles.university}>Jadavpur University</td>
//                             <td>2016</td>
//                         </tr>
//                         <tr>
//                             <td>10</td>
//                             <td>Srabani Debnath</td>
//                             <td>Assistant Professor</td>
//                             <td className={myStyles.department}>Mathematics</td>
//                             <td>On Ricci Flow</td>
//                             <td className={myStyles.university}>Jadavpur University</td>
//                             <td>2013</td>
//                         </tr>
//                         <tr>
//                             <td>11</td>
//                             <td>Kakali Ghosal</td>
//                             <td>Associate Professor</td>
//                             <td className={myStyles.department}>Philosophy</td>
//                             <td>Creation in the Light of Philosophy</td>
//                             <td className={myStyles.university}>Jadavpur University</td>
//                             <td>2009</td>
//                         </tr>
//                         <tr>
//                             <td>12</td>
//                             <td>Anup Sahoo</td>
//                             <td>Assistant Professor</td>
//                             <td className={myStyles.department}>Physics</td>
//                             <td>Investigation of Molecular Conformation And Association In Some H-Bonded Liquids Through Neutron Differaction</td>
//                             <td className={myStyles.university}>Jadavpur University</td>
//                             <td>2011</td>
//                         </tr>
//                         <tr>
//                             <td>13</td>
//                             <td>Partha Pratim Chaudhuri</td>
//                             <td>Associate Professor</td>
//                             <td className={myStyles.department}>Zoology</td>
//                             <td>Biochemical and immunological studies on Giardia lamblia antigens: With special reference to its plasma membrane</td>
//                             <td className={myStyles.university}>University of Calcutta</td>
//                             <td>1991</td>
//                         </tr>
//                         <tr>
//                             <td>14</td>
//                             <td>Papia Das</td>
//                             <td>Assistant Professor</td>
//                             <td className={myStyles.department}>Zoology</td>
//                             <td>Study of nematodes associated with mosses in Calcutta, West Bengal, India</td>
//                             <td className={myStyles.university}>University of Calcutta</td>
//                             <td>2011</td>
//                         </tr>
//                         <tr>
//                             <td>15</td>
//                             <td>Sandip Sinha</td>
//                             <td>Associate Professor</td>
//                             <td className={myStyles.department}>Commerce</td>
//                             <td>Determinants of Capital Structure: An Empirical Study of Selected Indian Manufacturing Companies</td>
//                             <td className={myStyles.university}>University of Kalyani</td>
//                             <td>2018</td>
//                         </tr>
//                         <tr>
//                             <td>16</td>
//                             <td>Kishore Naskar</td>
//                             <td>Assistant Professor</td>
//                             <td className={myStyles.department}>Economics</td>
//                             <td>MGNREGA and its Impact on the Village Economy of West Bengal.</td>
//                             <td className={myStyles.university}>Vidyasagar University</td>
//                             <td>2019</td>
//                         </tr>
//                         <tr>
//                             <td>17</td>
//                             <td>Shreya Chakravorty</td>
//                             <td>Assistant Professor</td>
//                             <td className={myStyles.department}>English</td>
//                             <td>Interface of Literature and History of Medicine</td>
//                             <td className={myStyles.university}>Jadavpur University</td>
//                             <td>2019</td>
//                         </tr>
//                         <tr>
//                             <td>18</td>
//                             <td>Swati Sachdev</td>
//                             <td>Assistant Professor</td>
//                             <td className={myStyles.department}>Geography</td>
//                             <td>Home-based Manufacturing Workers and Decent Work in Urban India: A Case Study of Kolkata</td>
//                             <td className={myStyles.university}>Jawaharlal Nehru University</td>
//                             <td>2022</td>
//                         </tr>
//                         <tr>
//                             <td>19</td>
//                             <td>Poulomi Roy</td>
//                             <td>Assistant Professor</td>
//                             <td className={myStyles.department}>Bengali</td>
//                             <td>Swadhinata Uttar Anchalik Bangla Bhasai Lekha Kabita: Nirbachito Jelabhittik Samiksha o Parjalochana</td>
//                             <td className={myStyles.university}>University of Calcutta</td>
//                             <td>2019</td>
//                         </tr>
//                         <tr>
//                             <td>20</td>
//                             <td>Samiran Panday</td>
//                             <td>Assistant Professor</td>
//                             <td className={myStyles.department}>Botany</td>
//                             <td>Flora of Phawngpui (Blue Mountain) National Park, Mizoram</td>
//                             <td className={myStyles.university}>Vidyasagar University</td>
//                             <td>2017</td>
//                         </tr>
//                         <tr>
//                             <td>21</td>
//                             <td>Uttariya Roy</td>
//                             <td>SACT-I</td>
//                             <td className={myStyles.department}>Environmental Studies</td>
//                             <td>Decolourization of dye effluents using integrated approach of sorption and biodegradation in bio- reactor</td>
//                             <td className={myStyles.university}>Jadavpur University</td>
//                             <td>2019</td>
//                         </tr>
//                         <tr>
//                             <td>22</td>
//                             <td>Barnali Bera</td>
//                             <td>SACT-I</td>
//                             <td className={myStyles.department}>Zoology</td>
//                             <td>Epitope mapping of the allergenic proteins of the pollen of Datura sp. and its implications for immunotherapy</td>
//                             <td className={myStyles.university}>Vidyasagar University</td>
//                             <td>2021</td>
//                         </tr>
//                         <tr>
//                             <td>23</td>
//                             <td>Reshmi Sarkar</td>
//                             <td>Librarian</td>
//                             <td className={myStyles.department}>Library</td>
//                             <td>Design and Development of Model Reference Service Framework for Indian University Libraries: A Prototype</td>
//                             <td className={myStyles.university}>University of Kalyani</td>
//                             <td>2019</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     )
// }


import React from 'react';
import myStyles from './PhD.module.css';

export function PhD() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Ph.D Awarded Scholars</h2>
            
            <div className={myStyles.grid}>
                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Debjani Datta</h3>
                        <p className={myStyles.designation}>Principal</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Zoology</p>
                        <p className={myStyles.thesis}>Biochemical and Immunological characterisation of the Sub-units of Sialic Acid binding horse shoe crab lectin-Carcinoscorpin</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>Jadavpur University</span>
                            <span className={myStyles.year}>1994</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Arpita Ray Maulik</h3>
                        <p className={myStyles.designation}>Assistant Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Bengali</p>
                        <p className={myStyles.thesis}>Amiya Bhusan Majumdar-er Upanyase Nimnabrga: Ekti Bishleshonatmok Adhyayan</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>Assam University</span>
                            <span className={myStyles.year}>2014</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Debashis Upadhyay</h3>
                        <p className={myStyles.designation}>Associate Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Botany</p>
                        <p className={myStyles.thesis}>Pollen Analysis And Antibacterial Activity Of Natural Honey Samples From the Coastal Districts of Orissa, India</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>University of Calcutta</span>
                            <span className={myStyles.year}>2014</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Bhanusuta Mitra</h3>
                        <p className={myStyles.designation}>Associate Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Chemistry</p>
                        <p className={myStyles.thesis}>Structure and Transformation of Natural Products</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>University of Kalyani</span>
                            <span className={myStyles.year}>1989</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Gautam Das</h3>
                        <p className={myStyles.designation}>Associate Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Commerce</p>
                        <p className={myStyles.thesis}>Performance of Initial Public Offerings (IPOS) in National Stock Exchange: A Study of Some Selected Companies in India</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>University of Calcutta</span>
                            <span className={myStyles.year}>2014</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Priyanka Bose Das</h3>
                        <p className={myStyles.designation}>Assistant Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Education</p>
                        <p className={myStyles.thesis}>Comparative study of self concept, educational aspiration and locus of control of learners studying through distance mode and formal system of education</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>University of Calcutta</span>
                            <span className={myStyles.year}>2012</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Shruti Agrawal</h3>
                        <p className={myStyles.designation}>Assistant Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Food & Nutrition</p>
                        <p className={myStyles.thesis}>The Changing Scenario of Diabetes Mellitus with Special Reference to Muzaffarpur Town</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>BRA Bihar University</span>
                            <span className={myStyles.year}>2008</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Sweta Dutta</h3>
                        <p className={myStyles.designation}>Assistant Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>History</p>
                        <p className={myStyles.thesis}>A Social History of the Natural Calamities in Colonial Bengal (1770-1943)</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>Jadavpur University</span>
                            <span className={myStyles.year}>2014</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Dipak Mandal</h3>
                        <p className={myStyles.designation}>Associate Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>History</p>
                        <p className={myStyles.thesis}>Chabbish Pargana Jelar Prathomik Siksha: Ekti Samajik Itihaas (1947-2010)</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>Jadavpur University</span>
                            <span className={myStyles.year}>2016</span>
                        </div>
                    </div>
                </div>
                
                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Srabani Debnath</h3>
                        <p className={myStyles.designation}>Assistant Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Mathematics</p>
                        <p className={myStyles.thesis}>On Ricci Flow</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>Jadavpur University</span>
                            <span className={myStyles.year}>2013</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Kakali Ghosal</h3>
                        <p className={myStyles.designation}>Associate Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Philosophy</p>
                        <p className={myStyles.thesis}>Creation in the Light of Philosophy</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>Jadavpur University</span>
                            <span className={myStyles.year}>2009</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Anup Sahoo</h3>
                        <p className={myStyles.designation}>Assistant Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Physics</p>
                        <p className={myStyles.thesis}>Investigation of Molecular Conformation And Association In Some H-Bonded Liquids Through Neutron Differaction</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>Jadavpur University</span>
                            <span className={myStyles.year}>2011</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Partha Pratim Chaudhuri</h3>
                        <p className={myStyles.designation}>Associate Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Zoology</p>
                        <p className={myStyles.thesis}>Biochemical and immunological studies on Giardia lamblia antigens: With special reference to its plasma membrane</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>University of Calcutta</span>
                            <span className={myStyles.year}>1991</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Papia Das</h3>
                        <p className={myStyles.designation}>Assistant Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Zoology</p>
                        <p className={myStyles.thesis}>Study of nematodes associated with mosses in Calcutta, West Bengal, India</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>University of Calcutta</span>
                            <span className={myStyles.year}>2011</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Sandip Sinha</h3>
                        <p className={myStyles.designation}>Associate Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Commerce</p>
                        <p className={myStyles.thesis}>Determinants of Capital Structure: An Empirical Study of Selected Indian Manufacturing Companies</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>University of Kalyani</span>
                            <span className={myStyles.year}>2018</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Kishore Naskar</h3>
                        <p className={myStyles.designation}>Assistant Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Economics</p>
                        <p className={myStyles.thesis}>MGNREGA and its Impact on the Village Economy of West Bengal.</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>Vidyasagar University</span>
                            <span className={myStyles.year}>2019</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Shreya Chakravorty</h3>
                        <p className={myStyles.designation}>Assistant Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>English</p>
                        <p className={myStyles.thesis}>Interface of Literature and History of Medicine</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>Jadavpur University</span>
                            <span className={myStyles.year}>2019</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Swati Sachdev</h3>
                        <p className={myStyles.designation}>Assistant Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Geography</p>
                        <p className={myStyles.thesis}>Home-based Manufacturing Workers and Decent Work in Urban India: A Case Study of Kolkata</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>Jawaharlal Nehru University</span>
                            <span className={myStyles.year}>2022</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Poulomi Roy</h3>
                        <p className={myStyles.designation}>Assistant Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Bengali</p>
                        <p className={myStyles.thesis}>Swadhinata Uttar Anchalik Bangla Bhasai Lekha Kabita: Nirbachito Jelabhittik Samiksha o Parjalochana</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>University of Calcutta</span>
                            <span className={myStyles.year}>2019</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Samiran Panday</h3>
                        <p className={myStyles.designation}>Assistant Professor</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Botany</p>
                        <p className={myStyles.thesis}>Flora of Phawngpui (Blue Mountain) National Park, Mizoram</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>Vidyasagar University</span>
                            <span className={myStyles.year}>2017</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Uttariya Roy</h3>
                        <p className={myStyles.designation}>SACT-I</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Environmental Studies</p>
                        <p className={myStyles.thesis}>Decolourization of dye effluents using integrated approach of sorption and biodegradation in bio- reactor</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>Jadavpur University</span>
                            <span className={myStyles.year}>2019</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Barnali Bera</h3>
                        <p className={myStyles.designation}>SACT-I</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Zoology</p>
                        <p className={myStyles.thesis}>Epitope mapping of the allergenic proteins of the pollen of Datura sp. and its implications for immunotherapy</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>Vidyasagar University</span>
                            <span className={myStyles.year}>2021</span>
                        </div>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <div className={myStyles.scholar_header}>
                        <h3>Reshmi Sarkar</h3>
                        <p className={myStyles.designation}>Librarian</p>
                    </div>
                    <div className={myStyles.details}>
                        <p className={myStyles.department}>Library</p>
                        <p className={myStyles.thesis}>Design and Development of Model Reference Service Framework for Indian University Libraries: A Prototype</p>
                        <div className={myStyles.meta}>
                            <span className={myStyles.university}>University of Kalyani</span>
                            <span className={myStyles.year}>2019</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}