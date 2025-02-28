import React from 'react'
import myStyles from './footer.module.css'
import { Quicklinks } from '../home page/quicklinks.jsx'
export function Footer() {
    return (
        <>
            <Quicklinks />
            <div className={myStyles.footer}>
                <div className={myStyles.copyright}>
                    <p>Copyright &copy; 2025 <a href="/">Budge Budge College</a>. All Rights Reserved.</p>
                    <p>Designed by <a href="https://www.instagram.com/samx4sure/" target="_blank" rel="noreferrer">Samy</a></p>
                </div>
            </div>
        </>
    )
}
