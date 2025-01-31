import React from 'react'
import myStyles from './facilities.module.css'
import teacher from './icons/teacher.png'
import special from './icons/school.png'
import book from './icons/bookshelf.png'
import sport from './icons/strategy.png'
export function Facilities() {
    return (
        <>
            <div className={myStyles.boxes}>
                <div className={myStyles.box1}>
                    <img src={teacher} alt="Certified Teachers" />
                    <h1>Certified Teachers</h1>
                    <p>We have a team of certified teachers who are committed to providing excellent learning experiences for
                        our students.</p>
                </div>
                <div className={myStyles.box2}>
                    <img src={special} alt="Special Education" />
                    <h1>Special Education</h1>
                    <p>We have a dedicated special education team who provide support and guidance to students with special
                        needs.</p>
                </div>
                <div className={myStyles.box3}>
                    <img src={book} alt="Book & Library" />
                    <h1>Book & Library</h1>
                    <p>We have a well-stocked library with a collection of books, manuscripts, and reference materials.</p>
                </div>
                <div className={myStyles.box4}>
                    <img src={sport} alt="Sports Club" />
                    <h1>Sports Club</h1>
                    <p>We have a dedicated sports club that provides a variety of activities, sports, and recreational
                        opportunities for our students.</p>
                </div>
            </div>
        </>
    )
}
