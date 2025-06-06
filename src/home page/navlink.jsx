import React from 'react'
import { Link } from 'react-router-dom';
import './navlink.css'
import Logo from '../icons/college-logo-3.0.png'

export function Navlink() {
    const handleLinkClick = (event) => {
        const dropdownParent = event.target.closest('.dropdown');

        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            document.querySelector('.navbar-toggler').click();
        }

        if (dropdownParent) {
            dropdownParent.classList.add('navigating');
            setTimeout(() => {
                dropdownParent.classList.remove('navigating');
            }, 100);
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'><img src={Logo} alt="Logo" height={"60px"} className="d-inline-block align-text-top logo-css" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" onClick={handleLinkClick}>Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our College
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/rules&regulations" onClick={handleLinkClick}>Rules & Regulations</Link></li>
                                    <li><Link className="dropdown-item" to="aims&objectives" onClick={handleLinkClick}>Aims & Objectives</Link></li>
                                    <li><Link className="dropdown-item" to="mission&vision" onClick={handleLinkClick}>Vision & Mission</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admission
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/admissionnotice" onClick={handleLinkClick}>Admission Notice</Link></li>
                                    <li><Link className="dropdown-item" to="/admissionprocedure" onClick={handleLinkClick}>Admission Procedure</Link></li>
                                    <li><Link className="dropdown-item" to="/subjectcombination" onClick={handleLinkClick}>Subject Combination</Link></li>
                                    <li><Link className="dropdown-item" to="/intakecapacity" onClick={handleLinkClick}>Intake Capacity</Link></li>
                                    <li><Link className="dropdown-item" to="/eligibilitycriteria" onClick={handleLinkClick}>Eligibility Criteria</Link></li>
                                    <li><Link className="dropdown-item" to="/feesstructure" onClick={handleLinkClick}>Fees Structure</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Academic
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/coursesoffered" onClick={handleLinkClick}>Courses Offered</Link></li>
                                    <li><Link className="dropdown-item" to="/facultymembers" onClick={handleLinkClick}>Faculty Members</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Administration
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/governingbody" onClick={handleLinkClick}>Governing Body</Link></li>
                                    <li><Link className="dropdown-item" to="/teachingstaffs" onClick={handleLinkClick}>Teaching Staff</Link></li>
                                    <li><Link className="dropdown-item" to="/librarian" onClick={handleLinkClick}>Librarian</Link></li>
                                    <li><Link className="dropdown-item" to="/nonteachingstaff" onClick={handleLinkClick}>Non-Teaching Staff</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sub Committee
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/sportssubcommittee" onClick={handleLinkClick}>Sports Sub-Committee</Link></li>
                                    <li><Link className="dropdown-item" to="/magazinesubcommittee" onClick={handleLinkClick}>Magazine Sub-Committee</Link></li>
                                    <li><Link className="dropdown-item" to="/buildingsubcommittee" onClick={handleLinkClick}>Building Sub-Committee</Link></li>
                                    <li><Link className="dropdown-item" to="/culturalsubcommittee" onClick={handleLinkClick}>Cultural Sub-Committee</Link></li>
                                    <li><Link className="dropdown-item" to="/admissionsubcommittee" onClick={handleLinkClick}>Admission Sub-Committee</Link></li>
                                    <li><Link className="dropdown-item" to="/librarysubcommittee" onClick={handleLinkClick}>Library Sub-Committee</Link></li>
                                    <li><Link className="dropdown-item" to="/financesubcommittee" onClick={handleLinkClick}>Finance Sub-Committee</Link></li>
                                    <li><Link className="dropdown-item" to="/academicsubcommittee" onClick={handleLinkClick}>Academic Sub-Committee</Link></li>
                                    <li><Link className="dropdown-item" to="/commonroomsubcommittee" onClick={handleLinkClick}>Common Room Sub-Committee</Link></li>
                                    <li><Link className="dropdown-item" to="/grievanceredressalcell" onClick={handleLinkClick}>Grievance Redressal Cell</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Infrastructure
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/generalinfrastructure" onClick={handleLinkClick}>General Infrastructure</Link></li>
                                    <li><Link className="dropdown-item" to="/officeinfrastructure" onClick={handleLinkClick}>Office Infrastructure</Link></li>
                                    <li><Link className="dropdown-item" to="/wastemanagement" onClick={handleLinkClick}>Waste Management</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Research
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/phd" onClick={handleLinkClick}>PhD</Link></li>
                                    <li><Link className="dropdown-item" to="/researchproject" onClick={handleLinkClick}>Research Projects</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/otherlinks" onClick={handleLinkClick}>Other Links</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact" onClick={handleLinkClick}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
