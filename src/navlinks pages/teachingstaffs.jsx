import React from 'react'
import myStyles from './teachingstaffs.module.css'

//Teachers
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
import Dr_Anup_Kumar_Sahoo from '../Pdf files/27211CV - Anup Kumar Sahoo.pdf';
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
import Dr_Gautam_Das from '../Pdf files/33731BIo-data of Dr. Gautam Das.pdf';
import Dr_Sandip_Sinha from '../Pdf files/94274CVSandipSinha - Sandip Sinha.pdf';
import Mriganka_Mallick from '../Pdf files/25926CV-Mriganka Mallick.pdf';
import Sourav_Bhuiya from '../Pdf files/UP_CVSOURAVBHUIYA1699006827.pdf';
import Sujit_Kumar_Mahato from '../Pdf files/UP_CVSUJITKUMARMAHATO1699006527.pdf';

export function Teachingstaffs() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Teaching Staff</h2>

            <div className={myStyles.teaching_staffs}>
                <div className={myStyles.staffs}>
                    <h5>ADRIJA GUHA</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Associate Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A. M.Phil.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> English</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Adrija_Guha} download="74384CURRICULUM VITAE- Adrija Guha.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>BUDDHAM TAMANG</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Asst. Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A. M.Phil.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Political Science</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Buddham_Tamang} download="UP_CVBuddhamTamang1699006593.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>CHUMKI SARKAR</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> History</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Chumki_Sarkar} download="25863Curriculum_Vitae CS - Chumki Sarkar.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DEBAMITA NATH GUHA</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Asst. Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A. M.Phil.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Political Science</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Debamita_Nath_Guha} download="68637CV- Debamita Nath Guha.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. ANUP KUMAR SAHOO</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Asst. Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Sc. PhD</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Science</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Physics</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Anup_Kumar_Sahoo} download="27211CV - Anup Kumar Sahoo.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. ARPITA RAY MAULIK</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Assistant Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A. M.Phil. PhD</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Bengali</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Arpita_Ray_Maulik} download="1758CV-DR.ARPITA RAY MAULIK.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>BARNALI BERA</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Sc. PhD</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Science</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Zoology</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Barnali_Bera} download="CV1629012854.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. DEBJANI DATTA</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Principal</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A. M.Phil.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Science</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Zoology</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Debjani_Datta} download="PRINCIPAL CV.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. GAUTAM DAS</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Associate Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Com., M.Phil., Ph.D., SLET</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Commerce</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Accounting And Finance</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Gautam_Das} download="33731BIo-data of Dr. Gautam Das.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. KISHORE NASKAR</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Asst. Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A. M.Phil.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Political Science</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Kishor_Naskar} download="UP_CVKishorNaskar1699003178.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. PAPIA DAS</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Asst. Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Sc. PhD</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Science</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Zoology</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Papia_Das} download="UP_CVPapiaDas1699005380.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. PARTHA PRATIM CHAUDHURI</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Associate Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Sc. PhD</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Science</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Zoology</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Partha_Pratim_Chaudhuri} download="10134Partha CV latest 2024.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. POULOMI ROY</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Associate Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A., M. Phil, Ph.D</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Bengali</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Poulomi_Roy} download="32119POULOMI ROY UPDATED CV.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. PRIYANKA BOSE DAS</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Asst. Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A., B.Ed., Ph.D</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Education</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Priyanka_Bose_Das} download="20539CV PBD.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. SAMIRAN PANDAY</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Asst. Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Sc., Ph.D</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Science</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Botany</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Samiran_Panday} download="30011Samiran Panday_CV.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. SANDIP SINHA</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Associate Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Com. , Ph.D ( Commerce), CMA</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Commerce</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Accounting And Finance</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Sandip_Sinha} download="94274CVSandipSinha - Sandip Sinha.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. SHREYA CHAKRABORTY</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Assistant Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A. M.Phil.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> English</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Shreya_Chakravorty} download="92600CV Dr. Shreya Chakravorty.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. SHRUTI AGRAWAL</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Asst. Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Sc, Ph.D, NET</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Science</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Food and Nutrition</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Shruti_Agrawal} download="69105CV - Agrawal Shruti.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. SRABANI DEBNATH</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Asst. Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Sc, Ph.D</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Science</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Mathematics</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Srabani_Debnath} download="67274CV Srabani.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. SWETA DUTTA</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Asst. Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A., M.Phil, Ph.D,</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> History</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Sweta_Dutta} download="53705UP_CVSwetaDutta - Sweta Dutta.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. UTTARIYA ROY</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Sc, Ph.D</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Environmental Studies</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Uttariya_Roy} download="76984CV_Dr. Uttariya Roy.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. UTTARIYA ROY</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Sc, Ph.D</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Science</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Environmental Studies</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Uttariya_Roy} download="76984CV_Dr. Uttariya Roy.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. UTTARIYA ROY</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Sc, Ph.D</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Commerce</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Environmental Studies</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Uttariya_Roy} download="76984CV_Dr. Uttariya Roy.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. BHANUSUTA MITRA</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Associate Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Sc.,B.Ed., Ph.D</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Science</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Chemistry</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Bhanusuta_Mitra} download="53874BSM CV - Bhanusuta Mitra.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. DEBASIS UPADHYAY</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Asst. Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Sc,Ph.D</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Science</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Botany</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Debasis_Upadhyay} download="18968DU CV - Debasis Upadhayay.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. DIPAK MONDAL</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Associate.Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A., B.Ed., M.Phil, Ph.D</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> History</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Dipak_Mondal} download="79464UP_CVDipakMandal - Dipak Mandal.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>DR. KAKALI GHOSAL</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Asst. Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A.,M.Phil, Ph.D</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Philosophy</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Dr_Kakali_Ghosal} download="91040Curriculum Vitae - Kakali Ghoshal.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>ISHITA SARKAR</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A., M.Phil.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> English</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Ishita_Sarkar} download="UP_CVISHITASARKAR1699006934.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>MOUMITA MONDAL</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A., B.ED.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Sanskrit</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Moumita_Mondal} download="UP_CVMoumitaMondal1699006993.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>MRIGANKA MALLICK</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Com.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Commerce</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Accounting and Finance</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Mriganka_Mallick} download="25926CV-Mriganka Mallick.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>PAYEL ROY</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Political Science</p>
                        <p><span className={myStyles.highlight}>Resume:</span> Not Available</p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>PIYALI DAS</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Sc.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Science</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Botany</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Piyali_Das} download="23866Piyali Das CV- Piyali Das.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>PRADIPTAMOY MONDAL</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A., B.ED.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Education</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Pradiptamoy_Mondal} download="97528C.V - Pradiptamoy Mondal.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>PRITHA BARUA</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Associate Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> 	M.A.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Bengali</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Pritha_Barua} download="UP_CVPrithaBarua1699002879.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>RAJ KUMAR SHAW</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Sc.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Psychology</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Raj_Kumar_Shaw} download="70445CV Rajkumar Shaw.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>RUBINA YEASMIN</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A., B.ED.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Sociology</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Rubina_Yeasmin} download="64309Curriculum Vitae - RUBINA YEASMIN.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>SAJID QAMAR</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Assistant Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A., B.ED.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Geography</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Sajid_Qamar} download="13369CV - SAJID QAMAR.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>SAMEEK MONDAL</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Political Science</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Sameek_Mondal} download="UP_CVSameekMondal1699007249.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>SANCHARI SAHA (AMBOLI)</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Bengali</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Sanchari_Saha} download="UP_CVSanchariamboli1699002931.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>SHAMPA SARKAR</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Assistant Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A.,B.Ed.,Ph.D.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Education</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Shampa_Sarkar} download="14739CV_SHAMPA SARKAR.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>SMITA SAHU</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Asst. Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Sc.,NET</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Science</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Food and Nutrition</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Smita_Sahu} download="91589CV- Smita Sahu.pdf.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>SOURAV BHUIYA</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Com.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Commerce</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Accounting and Finance</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Sourav_Bhuiya} download="UP_CVSOURAVBHUIYA1699006827.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>SUJIT KUMAR MAHATO</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Asst. Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Com.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Commerce</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Accounting and Finance</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Sujit_Kumar_Mahato} download="UP_CVSUJITKUMARMAHATO1699006527.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>SUMANA DAS</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.Sc., B.Ed.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Geography</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Sumana_Das} download="24097curriculum vitae - sumana Das.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>SUMIT SANTRA</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> SACT</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A., M.Phil.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> History</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Sumit_Santra} download="50718updated cv - sumit Santra.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>SURAJIT MONDAL</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Asst. Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A., M.Phil.</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Economics</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Surajit_Mondal} download="surajit cv 2024.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>SWATI SACHDEV</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Asst. Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A., M.Phil., NET</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Arts</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Geography</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Swati_Sachdev} download="2806Swati Sachdev_CV.pdf"> Download Resume</a></p>
                    </div>
                </div>

                <div className={myStyles.staffs}>
                    <h5>SWATI SACHDEV</h5>
                    <div className={myStyles.details}>
                        <p><span className={myStyles.highlight}>Designation:</span> Asst. Professor</p>
                        <p><span className={myStyles.highlight}>Qualification:</span> M.A., M.Phil., NET</p>
                        <p><span className={myStyles.highlight}>Stream:</span> Science</p>
                        <p><span className={myStyles.highlight}>Subject:</span> Geography</p>
                        <p><span className={myStyles.highlight}>Resume:</span><a href={Swati_Sachdev} download="2806Swati Sachdev_CV.pdf"> Download Resume</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}