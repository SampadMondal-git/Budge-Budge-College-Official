import React from 'react'
import myStyles from './college.module.css'
import collegeImage from "../images/1.jpeg";
export function College() {
    return (
        <>
            <div className={myStyles.college_container}>
                <div className={myStyles.college_image}>
                <img src={collegeImage} alt="Budge Budge College" />
                </div>

                <div className={myStyles.about_college}>
                    <h1>Budge Budge College</h1>
                    <p>Budge Budge College, established on December 10, 1971, initially operated from a different location before moving to its current site near Budge Budge Railway Station. Founded by renowned writer Narayan Ganguly, the college has been pivotal in advancing education in the Kolkata suburbs, particularly among middle and lower-middle-class families. With a diverse student body, including many female students, the college has become a significant educational institution, contributing to the development of well-rounded, responsible citizens.</p>
                </div>
            </div>
        </>
    )
}
