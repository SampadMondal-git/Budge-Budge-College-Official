import React, { useState, useEffect } from 'react';
import myStyles from './footer.module.css';
import { Quicklinks } from '../home page/quicklinks.jsx';
import { useNavigate, useLocation } from 'react-router-dom';

export function Footer() {
    const navigate = useNavigate();
    const location = useLocation();
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setDeviceWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNavigate = () => {
        if (location.pathname !== "/support") {
            navigate("/support");
        }
    };

    const renderLink = deviceWidth > 768 ? (
        <span
            onClick={handleNavigate}
            className={myStyles.supportLink}
        >
            Support the Developer
        </span>
    ) : (
        <a
            href="upi://pay?pa=sampadm310@oksbi&pn=Sampad%20Mondal&am=20&cu=INR&tn=Support%20the%20Developer"
            target="_blank"
            rel="noreferrer"
            className={myStyles.supportLink}
        >
            Support the Developer
        </a>
    );

    return (
        <>
            <Quicklinks />
            <div className={myStyles.footer}>
                <div className={myStyles.copyright}>
                    <p>Copyright &copy; 2025 Budge Budge College. All Rights Reserved.</p>
                    <p className={myStyles.hover}>
                        Designed by <a href="https://www.instagram.com/samx4sure/" target="_blank" rel="noreferrer">Sam</a> | {renderLink}
                    </p>
                </div>
            </div>
        </>
    );
}
