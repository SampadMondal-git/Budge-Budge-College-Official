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

            <div className={myStyles.courses_container}>
                <div className={`${myStyles.certified_teachers} ${myStyles.item}`}>
                    <h1>45+</h1>
                    <p>Certified Teachers</p>
                </div>

                <div className={`${myStyles.students} ${myStyles.item}`}>
                    <h1>2000+</h1>
                    <p>Students</p>
                </div>

                <div className={`${myStyles.courses} ${myStyles.item}`}>
                    <h1>25+</h1>
                    <p>Courses</p>
                </div>

                <div className={`${myStyles.awards_won} ${myStyles.item}`}>
                    <h1>20+</h1>
                    <p>Awards Won</p>
                </div>
            </div>
        </>
    )
}
