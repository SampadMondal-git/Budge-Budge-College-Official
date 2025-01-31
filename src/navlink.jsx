import React from 'react'
import './navlink.css'
// import Logo from './icons/logo.3.0.png'
export function Navlink() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href='/'><img src={Logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" /></a> */}
                    <a className="navbar-brand" href='/'>Budge Budge College</a>
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
                                    <li><a className="dropdown-item" href="/">Rules & Regulations</a></li>
                                    <li><a className="dropdown-item" href="Links/aims&objectives.html">Aims & Objectives</a></li>
                                    <li><a className="dropdown-item" href="Links/mission&vision.html">Mission & Vision</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admission
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Admission Notice</a></li>
                                    <li><a className="dropdown-item" href="/">Admission Procedure</a></li>
                                    <li><a className="dropdown-item" href="/">Subject Combination</a></li>
                                    <li><a className="dropdown-item" href="/">Intake Capacity</a></li>
                                    <li><a className="dropdown-item" href="/">Eligibility Criteria</a></li>
                                    <li><a className="dropdown-item" href="/">Fees Structure</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Academic
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Courses Offered</a></li>
                                    <li><a className="dropdown-item" href="/">Faculty Members</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Administration
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Governing Body</a></li>
                                    <li><a className="dropdown-item" href="/">Teaching Staff</a></li>
                                    <li><a className="dropdown-item" href="/">Librarian</a></li>
                                    <li><a className="dropdown-item" href="/">Non-Teaching Staff</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sub Committee
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Sports Sub-Committee</a></li>
                                    <li><a className="dropdown-item" href="/">Magazine Sub-Committee</a></li>
                                    <li><a className="dropdown-item" href="/">Building Sub-Committee</a></li>
                                    <li><a className="dropdown-item" href="/">Cultural Sub-Committee</a></li>
                                    <li><a className="dropdown-item" href="/">Admission Sub-Committee</a></li>
                                    <li><a className="dropdown-item" href="/">Library Sub-Committee</a></li>
                                    <li><a className="dropdown-item" href="/">Finance Sub-Committee</a></li>
                                    <li><a className="dropdown-item" href="/">Academic Sub-Committee</a></li>
                                    <li><a className="dropdown-item" href="/">Common Room Sub-Committee</a></li>
                                    <li><a className="dropdown-item" href="/">Grievance Redressal Cell</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Infrastructure
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">General Infrastructure</a></li>
                                    <li><a className="dropdown-item" href="/">Office Infrastructure</a></li>
                                    <li><a className="dropdown-item" href="/">Waste Management</a></li>
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
