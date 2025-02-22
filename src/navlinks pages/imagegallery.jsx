import React from 'react'
import myStyle from './imagegallery.module.css'
export function Imagegallery() {
    return (
        <>
            <div className={myStyle.container}>
                <h2 className={myStyle.section_title}>Image Gallery</h2>

                <div className={myStyle.grid}>
                    <div className={myStyle.image_gallery}>
                        <p>No content available right now</p>
                    </div>
                </div>
            </div>
        </>
    )
}
