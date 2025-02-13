import React from 'react'
import myStyles from './facultymembers.module.css'
//Arts
import Adrija_Guha from '../Pdf files/74384CURRICULUM VITAE- Adrija Guha.pdf';
import Buddham_Tamang from '../Pdf files/UP_CVBuddhamTamang1699006593.pdf';
import Chumki_Sarkar from '../Pdf files/25863Curriculum_Vitae CS - Chumki Sarkar.pdf';
import Debamita_Nath_Guha from '../Pdf files/68637CV- Debamita Nath Guha.pdf';
import Dr_Arpita_Ray_Maulik from '../Pdf files/1758CV-DR.ARPITA RAY MAULIK.pdf';
import Dr_Kishor_Naskar from '../Pdf files/UP_CVKishorNaskar1699003178.pdf';
import Dr_Poulomi_Roy from '../Pdf files/32119POULOMI ROY UPDATED CV.pdf';
import Dr_Priyanka_Bose_Das from '../Pdf files/20539CV PBD.pdf';
import Dr_Shreya_Chakravorty from '../Pdf files/92600CV Dr. Shreya Chakravorty.pdf';
import Dr_Shruti_Agrawal from '../Pdf files/69105CV - Agrawal Shruti.pdf';
import Dr_Sweta_Dutta from '../Pdf files/53705UP_CVSwetaDutta - Sweta Dutta.pdf';
import Dr_Uttariya_Roy from '../Pdf files/76984CV_Dr. Uttariya Roy.pdf';
import Dr_Dipak_Mondal from '../Pdf files/79464UP_CVDipakMandal - Dipak Mandal.pdf';
import Dr_Kakali_Ghosal from '../Pdf files/91040Curriculum Vitae - Kakali Ghoshal.pdf';
import Ishita_Sarkar from '../Pdf files/UP_CVISHITASARKAR1699006934.pdf';
import Moumita_Mondal from '../Pdf files/40639CV - MOUMITA MONDAL.pdf';
import Pradiptamoy_Mondal from '../Pdf files/97528C.V - Pradiptamoy Mondal.pdf';
import Pritha_Barua from '../Pdf files/UP_CVPrithaBarua1699002879.pdf';
import Raj_Kumar_Shaw from '../Pdf files/70445CV Rajkumar Shaw.pdf';
import Rubina_Yeasmin from '../Pdf files/64309Curriculum Vitae - RUBINA YEASMIN.pdf';
import Sajid_Qamar from '../Pdf files/13369CV - SAJID QAMAR.pdf';
import Sameek_Mondal from '../Pdf files/UP_CVSameekMondal1699007249.pdf';
import Sanchari_Saha from '../Pdf files/UP_CVSanchariamboli1699002931.pdf';
import Shampa_Sarkar from '../Pdf files/14739CV_SHAMPA SARKAR.pdf';
import Sumana_Das from '../Pdf files/24097curriculum vitae - sumana Das.pdf';
import Sumit_Santra from '../Pdf files/50718updated cv - sumit Santra.pdf';
import Surajit_Mondal from '../Pdf files/surajit cv 2024.pdf';
import Swati_Sachdev from '../Pdf files/2806Swati Sachdev_CV.pdf';
//Science
import Dr_Arup_Kumar_Sahoo from '../Pdf files/27211CV - Anup Kumar Sahoo.pdf';
import Dr_Barnali_Bera from '../Pdf files/CV1629012854.pdf';
import Dr_Debjani_Datta from '../Pdf files/PRINCIPAL CV.pdf';
import Dr_Papia_Das from '../Pdf files/UP_CVPapiaDas1699005380.pdf';
import Dr_Partha_Pratim_Chaudhuri from '../Pdf files/10134Partha CV latest 2024.pdf';
import Dr_Samiran_Panday from '../Pdf files/30011Samiran Panday_CV.pdf';
import Dr_Srabani_Debnath from '../Pdf files/67274CV Srabani.pdf';
import Dr_Bhanusuta_Mitra from '../Pdf files/53874BSM CV - Bhanusuta Mitra.pdf';
import Dr_Debasis_Upadhyay from '../Pdf files/18968DU CV - Debasis Upadhayay.pdf';
import Piyali_Das from '../Pdf files/23866Piyali Das CV- Piyali Das.pdf';
import Smita_Sahu from '../Pdf files/91589CV- Smita Sahu.pdf';
//Commerce
import Dr_Gautam_Das from '../Pdf files/33731BIo-data of Dr. Gautam Das.pdf';
import Dr_Sandip_Sinha from '../Pdf files/94274CVSandipSinha - Sandip Sinha.pdf';
import Mriganka_Mallick from '../Pdf files/25926CV-Mriganka Mallick.pdf';
import Sourav_Bhuiya from '../Pdf files/UP_CVSOURAVBHUIYA1699006827.pdf';
import Sujit_Kumar_Mahato from '../Pdf files/UP_CVSUJITKUMARMAHATO1699006527.pdf';

export function Facultymembers() {
    return (
        <>
            <div className={myStyles.faculty_members}>
                <h1>Faculty Members</h1>
            </div>
            <div className={myStyles.staffs}>
                <h1>Bachelor in Arts</h1>
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
                        <td>ADRIJA GUHA</td>
                        <td>Assistant Professor</td>
                        <td>M.A. M.Phil.</td>
                        <td>Arts</td>
                        <td>English</td>
                        <td><a href={Adrija_Guha} download="74384CURRICULUM VITAE- Adrija Guha.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>BUDDHAM TAMANG</td>
                        <td>Asst. Professor</td>
                        <td>M.A. M.Phil.</td>
                        <td>Arts</td>
                        <td>Political Science</td>
                        <td><a href={Buddham_Tamang} download="UP_CVBuddhamTamang1699006593.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>CHUMKI SARKAR</td>
                        <td>SACT</td>
                        <td>M.A.</td>
                        <td>Arts</td>
                        <td>History</td>
                        <td><a href={Chumki_Sarkar} download="25863Curriculum_Vitae CS - Chumki Sarkar.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DEBAMITA NATH GUHA</td>
                        <td>Asst. Professor</td>
                        <td>M.A. M.Phil.</td>
                        <td>Arts</td>
                        <td>Political Science</td>
                        <td><a href={Debamita_Nath_Guha} download="68637CV- Debamita Nath Guha.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR. ARPITA RAY MAULIK</td>
                        <td>Assistant Professor</td>
                        <td>M.A., M. Phil, Ph.D</td>
                        <td>Arts</td>
                        <td>Bengali</td>
                        <td><a href={Dr_Arpita_Ray_Maulik} download="1758CV-DR.ARPITA RAY MAULIK.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR. KISHOR NASKAR</td>
                        <td>Asst. Professor</td>
                        <td>M.Sc., B.Ed,Ph.D.</td>
                        <td>Arts</td>
                        <td>Economics</td>
                        <td><a href={Dr_Kishor_Naskar} download="UP_CVKishorNaskar1699003178.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR. POULOMI ROY</td>
                        <td>Assistant Professor</td>
                        <td>M.A., M. Phil, Ph.D</td>
                        <td>Arts</td>
                        <td>Bengali</td>
                        <td><a href={Dr_Poulomi_Roy} download="32119POULOMI ROY UPDATED CV.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR. PRIYANKA BOSE DAS</td>
                        <td>Asst. Professor</td>
                        <td>M.A., B.Ed., Ph.D</td>
                        <td>Arts</td>
                        <td>Education</td>
                        <td><a href={Dr_Priyanka_Bose_Das} download="20539CV PBD.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR. SHREYA CHAKRAVORTY</td>
                        <td>Assistant Professor</td>
                        <td>M.A., M.Phil,Ph.D</td>
                        <td>Arts</td>
                        <td>English</td>
                        <td><a href={Dr_Shreya_Chakravorty} download="92600CV Dr. Shreya Chakravorty.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR. SHRUTI AGRAWAL</td>
                        <td>Asst. Professor</td>
                        <td>M.Sc, Ph.D, NET</td>
                        <td>Science</td>
                        <td>Food & Nutrition</td>
                        <td><a href={Dr_Shruti_Agrawal} download="69105CV - Agrawal Shruti.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR. SWETA DUTTA</td>
                        <td>Asst. Professor</td>
                        <td>M.A., M.Phil, Ph.D</td>
                        <td>Arts</td>
                        <td>History</td>
                        <td><a href={Dr_Sweta_Dutta} download="53705UP_CVSwetaDutta - Sweta Dutta.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR. UTTARIYA ROY</td>
                        <td>SACT</td>
                        <td>M.Sc, Ph.D</td>
                        <td>Arts</td>
                        <td>Environmental Studies</td>
                        <td><a href={Dr_Uttariya_Roy} download="76984CV_Dr. Uttariya Roy.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR.DIPAK MONDAL</td>
                        <td>Associate Professor</td>
                        <td>M.A., B.Ed., M.Phil, Ph.D</td>
                        <td>Arts</td>
                        <td>History</td>
                        <td><a href={Dr_Dipak_Mondal} download="79464UP_CVDipakMandal - Dipak Mandal.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR.KAKALI GHOSAL</td>
                        <td>Asst. Professor</td>
                        <td>M.A.,M.Phil, Ph.D</td>
                        <td>Arts</td>
                        <td>Philosophy</td>
                        <td><a href={Dr_Kakali_Ghosal} download="91040Curriculum Vitae - Kakali Ghoshal.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>ISHITA SARKAR</td>
                        <td>SACT</td>
                        <td>M.A.,M.Phil</td>
                        <td>Arts</td>
                        <td>English</td>
                        <td><a href={Ishita_Sarkar} download="UP_CVISHITASARKAR1699006934.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>MOUMITA MONDAL</td>
                        <td>SACT</td>
                        <td>M.A., B.ED.</td>
                        <td>Arts</td>
                        <td>Sanskrit</td>
                        <td><a href={Moumita_Mondal} download="40639CV - MOUMITA MONDAL.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>PAYEL ROY</td>
                        <td>SACT</td>
                        <td>M.A.</td>
                        <td>Arts</td>
                        <td>Political Science</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>PRADIPTAMOY MONDAL</td>
                        <td>SACT</td>
                        <td>M.A.,B.ED.</td>
                        <td>Arts</td>
                        <td>Education</td>
                        <td><a href={Pradiptamoy_Mondal} download="97528C.V - Pradiptamoy Mondal.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>PRITHA BARUA</td>
                        <td>Associate Professor</td>
                        <td>M.A.</td>
                        <td>Arts</td>
                        <td>Bengali</td>
                        <td><a href={Pritha_Barua} download="UP_CVPrithaBarua1699002879.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>RAJ KUMAR SHAW</td>
                        <td>SACT</td>
                        <td>M.Sc.</td>
                        <td>Arts</td>
                        <td>Psychology</td>
                        <td><a href={Raj_Kumar_Shaw} download="70445CV Rajkumar Shaw.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>RUBINA YEASMIN</td>
                        <td>SACT</td>
                        <td>M.A.,B.ED.</td>
                        <td>Arts</td>
                        <td>Sociology</td>
                        <td><a href={Rubina_Yeasmin} download="64309Curriculum Vitae - RUBINA YEASMIN.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>SAJID QAMAR</td>
                        <td>Assistant Professor</td>
                        <td>M.A.,B.ED.</td>
                        <td>Arts</td>
                        <td>Geography</td>
                        <td><a href={Sajid_Qamar} download="13369CV - SAJID QAMAR.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>SAMEEK MONDAL</td>
                        <td>SACT</td>
                        <td>M.A.</td>
                        <td>Arts</td>
                        <td>Political Science</td>
                        <td><a href={Sameek_Mondal} download="UP_CVSameekMondal1699007249.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>SANCHARI SAHA (AMBOLI)</td>
                        <td>SACT</td>
                        <td>M.A.</td>
                        <td>Arts</td>
                        <td>Bengali</td>
                        <td><a href={Sanchari_Saha} download="UP_CVSanchariamboli1699002931.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>SHAMPA SARKAR</td>
                        <td>Assistant Professor</td>
                        <td>M.A.,B.Ed.,Ph.D.</td>
                        <td>Arts</td>
                        <td>Education</td>
                        <td><a href={Shampa_Sarkar} download="14739CV_SHAMPA SARKAR.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>SUMANA DAS</td>
                        <td>SACT</td>
                        <td>M.Sc., B.Ed.</td>
                        <td>Arts</td>
                        <td>Geography</td>
                        <td><a href={Sumana_Das} download="24097curriculum vitae - sumana Das.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>SUMIT SANTRA</td>
                        <td>SACT</td>
                        <td>M.A., M.Phil.</td>
                        <td>Arts</td>
                        <td>History</td>
                        <td><a href={Sumit_Santra} download="50718updated cv - sumit Santra.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>SURAJIT MONDAL</td>
                        <td>Asst. Professor</td>
                        <td>M.A.. M.Phil</td>
                        <td>Arts</td>
                        <td>Economics</td>
                        <td><a href={Surajit_Mondal} download="surajit cv 2024.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>SWATI SACHDEV</td>
                        <td>Asst. Professor</td>
                        <td>M.A , M.Phil., NET</td>
                        <td>Arts</td>
                        <td>Geography</td>
                        <td><a href={Swati_Sachdev} download="2806Swati Sachdev_CV.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                </table>
            </div>

            <div className={myStyles.staffs}>
                <h1>Bachelor in Science</h1>
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
                        <td>DR. ANUP KUMAR SAHOO</td>
                        <td>Asst. Professor</td>
                        <td>M.Sc.,Ph.D</td>
                        <td>Science</td>
                        <td>Physics</td>
                        <td><a href={Dr_Arup_Kumar_Sahoo} download="27211CV - Anup Kumar Sahoo.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR. BARNALI BERA</td>
                        <td>SACT</td>
                        <td>M.Sc., Ph.D	</td>
                        <td>Science</td>
                        <td>Zoology</td>
                        <td><a href={Dr_Barnali_Bera} download="CV1629012854.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR. DEBJANI DATTA</td>
                        <td>PRINCIPAL</td>
                        <td>M.Sc. (Gold Medalist), Ph.D</td>
                        <td>Scinence</td>
                        <td>Zoology</td>
                        <td><a href={Dr_Debjani_Datta} download="PRINCIPAL CV.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR. PAPIA DAS</td>
                        <td>Asst. Professor</td>
                        <td>M.Sc.,Ph.D</td>
                        <td>Science</td>
                        <td>Zoology</td>
                        <td><a href={Dr_Papia_Das} download="UP_CVPapiaDas1699005380.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR. PARTHA PRATIM CHAUDHURI</td>
                        <td>Associate Professor</td>
                        <td>M.Sc, Ph.D</td>
                        <td>Science</td>
                        <td>Zoology</td>
                        <td><a href={Dr_Partha_Pratim_Chaudhuri} download="10134Partha CV latest 2024.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR. SAMIRAN PANDAY</td>
                        <td>Asst. Professor</td>
                        <td>M.Sc., Ph.D</td>
                        <td>Science</td>
                        <td>Botany</td>
                        <td><a href={Dr_Samiran_Panday} download="30011Samiran Panday_CV.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR. SHRUTI AGRAWAL</td>
                        <td>Asst. Professor</td>
                        <td>M.Sc, Ph.D, NET</td>
                        <td>Science</td>
                        <td>Food and Nutrition</td>
                        <td><a href={Dr_Shruti_Agrawal} download="69105CV - Agrawal Shruti.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR. SRABANI DEBNATH</td>
                        <td>Asst. Professor</td>
                        <td>M.Sc, Ph.D</td>
                        <td>Science</td>
                        <td>Mathametics</td>
                        <td><a href={Dr_Srabani_Debnath} download="67274CV Srabani.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR. UTTARIYA ROY</td>
                        <td>SACT</td>
                        <td>M.Sc, Ph.D</td>
                        <td>Science</td>
                        <td>Environmental Studies</td>
                        <td><a href={Dr_Uttariya_Roy} download="76984CV_Dr. Uttariya Roy.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR.BHANUSUTA MITRA</td>
                        <td>Associate Professor</td>
                        <td>M.Sc.,B.Ed., Ph.D</td>
                        <td>Science</td>
                        <td>Chemistry</td>
                        <td><a href={Dr_Bhanusuta_Mitra} download="53874BSM CV - Bhanusuta Mitra.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>DR.DEBASIS UPADHYAY</td>
                        <td>Asst. Professor</td>
                        <td>M.Sc, Ph.D</td>
                        <td>Science</td>
                        <td>Botany</td>
                        <td><a href={Dr_Debasis_Upadhyay} download="18968DU CV - Debasis Upadhayay.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>PIYALI DAS</td>
                        <td>SACT</td>
                        <td>M.Sc</td>
                        <td>Science</td>
                        <td>Botany</td>
                        <td><a href={Piyali_Das} download="23866Piyali Das CV- Piyali Das.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>SMITA SAHU</td>
                        <td>Asst. Professor</td>
                        <td>M.Sc.,NET</td>
                        <td>Science</td>
                        <td>Food and Nutrition</td>
                        <td><a href={Smita_Sahu} download="91589CV- Smita Sahu.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                    <tr>
                        <td>SWATI SACHDEV</td>
                        <td>Asst. Professor</td>
                        <td>M.A , M.Phil., NET</td>
                        <td>Science</td>
                        <td>Geography</td>
                        <td><a href={Swati_Sachdev} download="2806Swati Sachdev_CV.pdf">
                            Download Resume
                        </a></td>
                    </tr>
                </table>

                <div className={myStyles.staffs}>
                    <h1>Bachelor in Commerce</h1>
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
                            <td>DR. GAUTAM DAS</td>
                            <td>Associate Professor</td>
                            <td>M.Com., M.Phil., Ph.D., SLET</td>
                            <td>Commerce</td>
                            <td>Accounting And Finance</td>
                            <td><a href={Dr_Gautam_Das} download="33731BIo-data of Dr. Gautam Das.pdf">
                                Download Resume
                            </a></td>
                        </tr>
                        <tr>
                            <td>DR. SANDIP SINHA</td>
                            <td>Associate Professor</td>
                            <td>M.Com. , Ph.D ( Commerce), CMA</td>
                            <td>Commerce</td>
                            <td>Accounting And Finance</td>
                            <td><a href={Dr_Sandip_Sinha} download="94274CVSandipSinha - Sandip Sinha.pdf">
                                Download Resume
                            </a></td>
                        </tr>
                        <tr>
                            <td>DR. UTTARIYA ROY</td>
                            <td>SACT</td>
                            <td>M.Sc, Ph.D</td>
                            <td>Commerce</td>
                            <td>Environmental Studies</td>
                            <td><a href={Dr_Uttariya_Roy} download="76984CV_Dr. Uttariya Roy.pdf">
                                Download Resume
                            </a></td>
                        </tr>
                        <tr>
                            <td>MRIGANKA MALLICK</td>
                            <td>SACT</td>
                            <td>M.Com</td>
                            <td>Commerce</td>
                            <td>Accounting And Finance</td>
                            <td><a href={Mriganka_Mallick} download="25926CV-Mriganka Mallick.pdf">
                                Download Resume
                            </a></td>
                        </tr>
                        <tr>
                            <td>SOURAV BHUIYA</td>
                            <td>SACT</td>
                            <td>M.Com</td>
                            <td>Commerce</td>
                            <td>Accounting And Finance</td>
                            <td><a href={Sourav_Bhuiya} download="UP_CVSOURAVBHUIYA1699006827.pdf">
                                Download Resume
                            </a></td>
                        </tr>
                        <tr>
                            <td>SUJIT KUMAR MAHATO</td>
                            <td>Asst. Professor</td>
                            <td>M.Com</td>
                            <td>Commerce</td>
                            <td>Accounting And Finance</td>
                            <td><a href={Sujit_Kumar_Mahato} download="UP_CVSUJITKUMARMAHATO1699006527.pdf">
                                Download Resume
                            </a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}
