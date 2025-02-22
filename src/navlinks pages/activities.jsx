import React from 'react'
import myStyles from './activities.module.css'
//College Magazine pdf
import pdf from '../Pdf files/Magazine/Magazine 2022 final-1.pdf'
// Seminar pdf
import seminarPdf from '../Pdf files/Seminar/17107435373.2.2-Seminar-report-Final sign.pdf'
// Project work/Field work/Internship pdf
import summaryPdf from '../Pdf files/Students undertaking Project workField workInternship/17105920761.3.2-1-200_signed.pdf'
import introPdf from '../Pdf files/Students undertaking Project workField workInternship/17105923051.3.2-201-400_signed.pdf'
import surveyPdf from '../Pdf files/Students undertaking Project workField workInternship/17105925221.3.2-401-640_signed.pdf'
import objectivePdf from '../Pdf files/Students undertaking Project workField workInternship/17105927391.3.2-641-838_signed.pdf'
//NSS and NCC pdf
import nss_ncc_pdf from '../Pdf files/NSS & NCC activities/17107422463.4.3 (a) Photographs sign.pdf'
//NCC images
import images1 from '../images/NCC images/image 1.jpg'
import images2 from '../images/NCC images/image 2.jpg'
import images3 from '../images/NCC images/image 3.jpg'
import images4 from '../images/NCC images/image 4.jpg'
import images5 from '../images/NCC images/image 5.jpg'
import images6 from '../images/NCC images/image 6.jpg'
import images7 from '../images/NCC images/image 7.jpg'
import images8 from '../images/NCC images/image 8.jpg'
import images9 from '../images/NCC images/image 9.jpg'
import images10 from '../images/NCC images/image 10.jpg'
import images11 from '../images/NCC images/image 11.jpg'
import images12 from '../images/NCC images/image 12.jpg'
import images13 from '../images/NCC images/image 13.jpg'
import images14 from '../images/NCC images/image 14.jpg'
import images15 from '../images/NCC images/image 15.jpg'
import images16 from '../images/NCC images/image 16.jpg'
import images17 from '../images/NCC images/image 17.jpg'
import images18 from '../images/NCC images/image 18.jpg'
import images19 from '../images/NCC images/image 19.jpg'
import images20 from '../images/NCC images/image 20.jpg'
import images21 from '../images/NCC images/image 21.jpg'
import images22 from '../images/NCC images/image 22.jpg'
import images23 from '../images/NCC images/image 23.jpg'
import images24 from '../images/NCC images/image 24.jpg'
import images25 from '../images/NCC images/image 25.jpg'
import images26 from '../images/NCC images/image 26.jpg'
import images27 from '../images/NCC images/image 27.jpg'
import images28 from '../images/NCC images/image 28.jpg'
import images29 from '../images/NCC images/image 29.jpg'
import images30 from '../images/NCC images/image 30.jpg'

export function Activities() {
  return (
    <div className={myStyles.container}>
      <h2 className={myStyles.section_title}>Activities</h2>
      <div className={myStyles.container}>
        <h2 className={myStyles.section_title}>College Magazine</h2>
        <div className={myStyles.grid}>
          <div className={myStyles.staffs}>
            <h5>College Magazine</h5>
            <div className={myStyles.details}>
              <p><span className={myStyles.highlight}>Download Magazine:</span> <a href={pdf} download="Magazine 2022 final-1">Magazine 2022 final-1</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className={myStyles.container}>
        <h2 className={myStyles.section_title}>Sports and Fitness Facilities</h2>

        <div className={myStyles.grid}>
          <div className={myStyles.card}>
            <h3>Modern Gymnasium</h3>
            <p>Budge Budge College houses a state-of-the-art gymnasium where students can train under the guidance of experienced trainers, promoting physical fitness and well-being.</p>
          </div>

          <div className={myStyles.card}>
            <h3>Annual Sports and Tournaments</h3>
            <p>The college hosts Annual Sports events, showcasing exceptional performances across various sports. Students actively participate in inter-college football and cricket tournaments organized by Calcutta University, as well as district sports competitions conducted by D.P.I.</p>
          </div>

          <div className={myStyles.card}>
            <h3>Achievements in Athletics</h3>
            <p>Budge Budge College has a strong track record in athletics, particularly in shot put, javelin, and discus throw events. Students consistently excel at university and district levels, with several progressing to state-level competitions.</p>
          </div>
        </div>
      </div>

      <div className={myStyles.container}>
        <h2 className={myStyles.section_title}>National Service Scheme (NSS)</h2>

        <div className={myStyles.grid}>
          <div className={myStyles.card}>
            <h3>Overview</h3>
            <p>The National Service Scheme (NSS), under the Ministry of Youth Affairs and Sports, Government of India, operates actively at Budge Budge College. It encourages first and second-year students to volunteer, nurturing a sense of community service and social responsibility. Volunteers pledge their commitment to serving the nation through various initiatives.</p>
          </div>

          <div className={myStyles.card}>
            <h3>Key Activities</h3>
            <ul className={myStyles.list}>
              <div className={myStyles.point}>
                <li>Commemoration of national leaders' birthdays and important social events</li>
                <li>Campus beautification and environmental sustainability initiatives</li>
                <li>Health awareness campaigns on HIV-AIDS, cancer, and mental well-being</li>
                <li>Providing study materials like notebooks and stationery to underprivileged children in nearby schools and slums</li>
              </div>
            </ul>
          </div>

          <div className={myStyles.card}>
            <h3>Leadership and Coordination</h3>
            <p>The NSS unit is led by Programme Officer Dipak Mandal, with dedicated support from the Principal, faculty members, and non-teaching staff. Their collaborative efforts ensure the effective organization and impactful execution of various community engagement programs.</p>
          </div>
        </div>
      </div>

      <div className={myStyles.container}>
        <h2 className={myStyles.section_title}>National Cadet Corps (NCC)</h2>

        <div className={myStyles.grid}>
          <div className={myStyles.card}>
            <h3>Overview</h3>
            <p>The National Cadet Corps (NCC), the youth wing of the Indian Armed Forces, is dedicated to fostering discipline, courage, and leadership among students. At Budge Budge College, NCC aims to develop self-confidence, teamwork, and patriotism through structured military training and community engagement.</p>
          </div>

          <div className={myStyles.card}>
            <h3>Key Activities</h3>
            <ul className={myStyles.list}>
              <div className={myStyles.point}>
                <li>Basic military training in small arms and parade drills</li>
                <li>Participation in national and state-level NCC events</li>
                <li>Development of leadership and team-building skills</li>
                <li>Social service initiatives and awareness campaigns</li>
              </div>
            </ul>
          </div>

          <div className={myStyles.card}>
            <h3>Leadership and Coordination</h3>
            <p>NCC at Budge Budge College was initiated in 2019 under Care Taker Officer (CTO) Dr. Kishor Naskar, Assistant Professor in the Department of Economics. Currently, the NCC unit is led by CTO Mr. Buddham Tamang, Assistant Professor in the Department of Political Science, with a sanctioned strength of 100 cadets (SD & SW).</p>
          </div>
        </div>
      </div>

      <div className={myStyles.container}>
        <h2 className={myStyles.section_title}>NSS and NCC Activities</h2>
        <div className={myStyles.grid}>
          <div className={myStyles.staffs}>
            <h5>NSS Activities</h5>
            <div className={myStyles.details}>
              <p><span className={myStyles.highlight}>Download NSS Activities:</span> <a href={nss_ncc_pdf} download="17107422463.4.3 (a) Photographs sign">17107422463.4.3 (a) Photographs sign</a></p>
            </div>
          </div>
          <div className={myStyles.staffs}>
            <h5>NCC Activities</h5>
            <div className={myStyles.details}>
              <p><span className={myStyles.highlight}>Download NCC Activities:</span> <a href={nss_ncc_pdf} download="17107422463.4.3 (a) Photographs sign">17107422463.4.3 (a) Photographs sign</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className={myStyles.container}>
        <h2 className={myStyles.section_title}>NCC Gallery</h2>

        <div className={myStyles.grid}>
          <div className={myStyles.image_card}>
            <img
              src={images1}
              alt="image1"
              className={myStyles.gallery_image}
            />
          </div>

          <div className={myStyles.image_card}>
            <img
              src={images2}
              alt="image2"
              className={myStyles.gallery_image}
            />
          </div>

          <div className={myStyles.image_card}>
            <img
              src={images3}
              alt="image3"
              className={myStyles.gallery_image}
            />
          </div>

          <div className={myStyles.image_card}>
            <img
              src={images4}
              alt="image4"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images5}
              alt="image5"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images6}
              alt="image6"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images7}
              alt="image7"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images8}
              alt="image8"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images9}
              alt="image9"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images10}
              alt="image10"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images11}
              alt="image11"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images12}
              alt="image12"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images13}
              alt="image13"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images14}
              alt="image14"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images15}
              alt="image15"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images16}
              alt="image16"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images17}
              alt="image17"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images18}
              alt="image18"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images19}
              alt="image19"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images20}
              alt="image20"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images21}
              alt="image21"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images22}
              alt="image22"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images23}
              alt="image23"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images24}
              alt="image24"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images25}
              alt="image25"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images26}
              alt="image26"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images27}
              alt="image27"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images28}
              alt="image28"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images29}
              alt="image29"
              className={myStyles.gallery_image}
            />
          </div>
          <div className={myStyles.image_card}>
            <img
              src={images30}
              alt="image30"
              className={myStyles.gallery_image}
            />
          </div>
        </div>
      </div>

      <div className={myStyles.container}>
        <h2 className={myStyles.section_title}>College Magazine</h2>
        <div className={myStyles.grid}>
          <div className={myStyles.staffs}>
            <h5>College Magazine</h5>
            <div className={myStyles.details}>
              <p><span className={myStyles.highlight}>Download Seminar Report:</span> <a href={seminarPdf} download="17107435373.2.2-Seminar-report-Final sign">17107435373.2.2-Seminar-report-Final sign</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className={myStyles.container}>
        <h2 className={myStyles.section_title}>Students undertaking Project work/Field work/Internship</h2>
        <div className={myStyles.grid}>
          <div className={myStyles.card}>
            <div className={myStyles.point}><a href={summaryPdf} download="17105920761.3.2-1-200_signed.pdf">17105920761.3.2-1-200_signed</a></div>
            <div className={myStyles.point}><a href={introPdf} download="17105923051.3.2-201-400_signed.pdf">17105923051.3.2-201-400_signed</a></div>
            <div className={myStyles.point}><a href={surveyPdf} download="17105925221.3.2-401-640_signed.pdf">17105925221.3.2-401-640_signed</a></div>
            <div className={myStyles.point}><a href={objectivePdf} download="17105927391.3.2-641-838_signed.pdf">17105927391.3.2-641-838_signed</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}
