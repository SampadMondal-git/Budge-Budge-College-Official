import { useEffect, useState } from 'react';
import myStyles from './popup.module.css';

export function Popup() {
    useEffect(() => {
        const applyTimer = setTimeout(() => {
            setShowApply(true);
        }, 5000);

        const payTimer = setTimeout(() => {
            setShowPay(true);
        }, 10000);

        return () => {
            clearTimeout(applyTimer);
            clearTimeout(payTimer);
        };
    }, []);

    const [showApply, setShowApply] = useState(false);
    const [showPay, setShowPay] = useState(false);

    return (
        <div className={`${myStyles.modelBox} ${(showApply || showPay) ? myStyles.active : ''}`}>
            {showApply && (
                <div className={myStyles.modelBoxContent}>
                    <a href="https://wbcap.in/" rel="noopener noreferrer" className={myStyles.applyLink}>
                        <span className={myStyles.linkContent}>
                            <img width="40" height="40" src="https://img.icons8.com/ios/100/graduation-cap.png" alt="graduation-cap" />
                            Apply Now
                        </span>
                    </a>
                    <button className={myStyles.modelClose} onClick={() => setShowApply(false)} aria-label="Close application notification">
                        &times;
                    </button>
                </div>
            )}

            {showPay && (
                <div className={myStyles.modelBoxContent}>
                    <a href="https://cmserp.in/cms/?curl=bbc&cmsof=1" rel="noopener noreferrer" className={myStyles.applyLink}>
                        <span className={myStyles.linkContent}>
                            <img width="30" height="30" src="https://img.icons8.com/pastel-glyph/64/card-in-use--v4.png" alt="payment-card" />
                            Pay Your Fees
                        </span>
                    </a>
                    <button className={myStyles.modelClose} onClick={() => setShowPay(false)} aria-label="Close payment notification">
                        &times;
                    </button>
                </div>
            )}
        </div>
    );
};