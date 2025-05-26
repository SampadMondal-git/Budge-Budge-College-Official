import React from "react";
import myStyles from "./teachers.module.css";

import teacher1 from "../images/teachers/1747925830446 (1).jpg";
import teacher2 from "../images/teachers/1747925830460 (1).jpg";
import teacher3 from "../images/teachers/1747925830429 (1).jpg";
import teacher4 from "../images/teachers/Screenshot 2025-05-22 201744.png";

export function Teachers() {
  return (
    <div className={myStyles.certified_teachers}>
      <div className={myStyles.teachers_heading}>
        <h1>Certified Teachers</h1>
        <p>
          Dedicated certified teacher with a proven track record of enhancing
          student learning and engagement through innovative teaching methods.
        </p>
      </div>

      <div className={myStyles.teachers_list}>
        <div
          className={`${myStyles.teachers} ${myStyles.color} ${myStyles.max_width}`}
        >
          <img src={teacher1} alt="teacher 1" width={200} />
          <h1>Dr. Papia Das</h1>
          <div className={myStyles.description}>
            <p className={myStyles.border}>M.Sc., Ph.D</p>
            <p className={myStyles.border}>Zoology</p>
            <p className={myStyles.border}>Bachelor of Science</p>
          </div>
        </div>
        <div className={`${myStyles.teachers} ${myStyles.min_width}`}>
          <img src={teacher2} alt="teacher 2" width={200} />
          <h1>Dr.Debamita Nath Guha</h1>
          <div className={myStyles.description}>
            <p className={myStyles.nth_border}>M.A., M.Phil</p>
            <p className={myStyles.nth_border}>Political Science</p>
            <p className={myStyles.nth_border}>Bachelor of Arts</p>
          </div>
        </div>
        <div
          className={`${myStyles.teachers} ${myStyles.color} ${myStyles.min_width}`}
        >
          <img src={teacher3} alt="teacher 3" width={200} />
          <h1>Dr. Barnali Bera</h1>
          <div className={myStyles.description}>
            <p className={myStyles.border}>M.Sc., Ph.D</p>
            <p className={myStyles.border}>Zoology</p>
            <p className={myStyles.border}>Bachelor of Science</p>
          </div>
        </div>
        <div className={`${myStyles.teachers} ${myStyles.max_width}`}>
          <img src={teacher4} alt="teacher 4" width={200} />
          <h1>Dr. Gautam Das</h1>
          <div className={myStyles.description}>
            <p className={myStyles.nth_border}>M.Com., M.Phil., Ph.D., SLET</p>
            <p className={myStyles.nth_border}>Accounting And Finance</p>
            <p className={myStyles.nth_border}>Bachelor of Commerce</p>
          </div>
        </div>
      </div>
    </div>
  );
}
