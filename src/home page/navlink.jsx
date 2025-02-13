import React from 'react'
import { Link } from 'react-router-dom';
import './navlink.css'
import Logo from '../icons/college-logo-3.0.png'
export function Navlink() {
    return (
        <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href='/'><img src={Logo} alt="Logo" height={"60px"} className="d-inline-block align-text-top logo-css" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Our College
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/rules&regulations">Rules & Regulations</Link></li>
                                        <li><Link className="dropdown-item" to="aims&objectives">Aims & Objectives</Link></li>
                                        <li><Link className="dropdown-item" to="mission&vision">Mission & Vision</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Admission
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/admissionnotice">Admission Notice</Link></li>
                                        <li><Link className="dropdown-item" to="/admissionprocedure">Admission Procedure</Link></li>
                                        <li><Link className="dropdown-item" to="/subjectcombination">Subject Combination</Link></li>
                                        <li><Link className="dropdown-item" to="/intakecapacity">Intake Capacity</Link></li>
                                        <li><Link className="dropdown-item" to="/eligibilitycriteria">Eligibility Criteria</Link></li>
                                        <li><Link className="dropdown-item" to="/feesstructure">Fees Structure</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Academic
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/coursesoffered">Courses Offered</Link></li>
                                        <li><Link className="dropdown-item" to="/facultymembers">Faculty Members</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Administration
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/governingbody">Governing Body</Link></li>
                                        <li><Link className="dropdown-item" to="/teachingstaffs">Teaching Staff</Link></li>
                                        <li><Link className="dropdown-item" to="/librarian">Librarian</Link></li>
                                        <li><Link className="dropdown-item" to="/nonteachingstaff">Non-Teaching Staff</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sub Committee
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/sportssubcommittee">Sports Sub-Committee</Link></li>
                                        <li><Link className="dropdown-item" to="/magazinesubcommittee">Magazine Sub-Committee</Link></li>
                                        <li><Link className="dropdown-item" to="/buildingsubcommittee">Building Sub-Committee</Link></li>
                                        <li><Link className="dropdown-item" to="/culturalsubcommittee">Cultural Sub-Committee</Link></li>
                                        <li><Link className="dropdown-item" to="/admissionsubcommittee">Admission Sub-Committee</Link></li>
                                        <li><Link className="dropdown-item" to="/librarysubcommittee">Library Sub-Committee</Link></li>
                                        <li><Link className="dropdown-item" to="/financesubcommittee">Finance Sub-Committee</Link></li>
                                        <li><Link className="dropdown-item" to="/academicsubcommittee">Academic Sub-Committee</Link></li>
                                        <li><Link className="dropdown-item" to="/commonroomsubcommittee">Common Room Sub-Committee</Link></li>
                                        <li><Link className="dropdown-item" to="/grievanceredressalcell">Grievance Redressal Cell</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Infrastructure
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/generalinfrastructure">General Infrastructure</Link></li>
                                        <li><Link className="dropdown-item" to="/officeinfrastructure">Office Infrastructure</Link></li>
                                        <li><Link className="dropdown-item" to="/wastemanagement">Waste Management</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Research
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">PhD</a></li>
                                        <li><a className="dropdown-item" href="/">Research Projects</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Other Links</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </>
    )
}
