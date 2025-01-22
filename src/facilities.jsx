import React from 'react'
import './facilities.css'

export function Facilities() {
    return (
        <>
            <div class="boxes">
                <div class="box1">
                    <img src="./icons/teacher.png" alt="Certified Teachers" />
                    <h1>Certified Teachers</h1>
                    <p>We have a team of certified teachers who are committed to providing excellent learning experiences for
                        our students.</p>
                </div>
                <div class="box2">
                    <img src="./icons/school.png" alt="Special Education" />
                    <h1>Special Education</h1>
                    <p>We have a dedicated special education team who provide support and guidance to students with special
                        needs.</p>
                </div>
                <div class="box3">
                    <img src="./icons/bookshelf.png" alt="Book & Library" />
                    <h1>Book & Library</h1>
                    <p>We have a well-stocked library with a collection of books, manuscripts, and reference materials.</p>
                </div>
                <div class="box4">
                    <img src="./icons/strategy.png" alt="Sports Club" />
                    <h1>Sports Club</h1>
                    <p>We have a dedicated sports club that provides a variety of activities, sports, and recreational
                        opportunities for our students.</p>
                </div>
            </div>
        </>
    )
}
