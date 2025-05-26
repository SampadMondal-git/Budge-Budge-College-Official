import React from "react";
import myStyles from "./otherlinks.module.css";
import { Link } from "react-router-dom";
export function Otherlinks() {
  return (
    <div className={myStyles.container}>
      <h2 className={myStyles.section_title}>Other Links</h2>
      <div className={myStyles.otherlinks}>
        <div className={myStyles.staffs}>
          <h5>NAAC</h5>
          <p>
            <Link to="/naac">Visit NAAC</Link>
          </p>
        </div>
        <div className={myStyles.staffs}>
          <h5>IQAC</h5>
          <p>
            <Link to="/iqac">Visit IQAC</Link>
          </p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Student's Zone</h5>
          <p>
            <Link to="/studentzone">Visit Student's Zone</Link>
          </p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Activities</h5>
          <p>
            <Link to="/activities">Visit Activities</Link>
          </p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Alumni</h5>
          <p>
            <Link to="/alumni">Visit Alumni</Link>
          </p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Feedback</h5>
          <p>
            <Link to="/feedback">Visit Feedback</Link>
          </p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Image Gallery</h5>
          <p>
            <Link to="/imagegallery">Visit Image Gallery</Link>
          </p>
        </div>
        <div className={myStyles.staffs}>
          <h5>NSOU (PG Courses)</h5>
          <p>
            <Link to="/nsoustudycentre">Visit NSOU (PG Courses)</Link>
          </p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Library</h5>
          <p>
            <Link to="/library">Visit Library</Link>
          </p>
        </div>
        <div className={myStyles.staffs}>
          <h5>OPAC</h5>
          <p>
            <Link to="https://bbc-opac.kohacloud.in/">Visit OPAC</Link>
          </p>
        </div>
        <div className={myStyles.staffs}>
          <h5>RTI</h5>
          <p>
            <Link to="/rti">Visit RTI</Link>
          </p>
        </div>
        <div className={myStyles.staffs}>
          <h5>NIRF</h5>
          <p>
            <Link to="/nirf">Visit NIRF</Link>
          </p>
        </div>
        <div className={myStyles.staffs}>
          <h5>Admin Login</h5>
          <p>
            <Link to="/authUploadPdf">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
