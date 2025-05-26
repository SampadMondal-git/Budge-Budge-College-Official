import React, { useEffect, useState } from 'react';
import axios from 'axios';
import myStyles from './notification.module.css';

export function Notification() {
    const [generalNotices, setGeneralNotices] = useState([]);
    const [admissionNotices, setAdmissionNotices] = useState([]);
    const [tenderNotices, setTenderNotices] = useState([]);
    const [upcomingNotices, setUpcomingNotices] = useState([]);
    const [error, setError] = useState(null);

    const baseURL = 'https://opensheet.elk.sh/1eq-v6V0eypg5wxZJeVsLZOXFOddiPpQ25d9CbewTjlQ';
    const getSheetUrl = (sheetName) => `${baseURL}/${encodeURIComponent(sheetName)}`;

    useEffect(() => {
        const fetchAllNotices = async () => {
            try {
                const [general, admission, tender, upcoming] = await Promise.all([
                    axios.get(getSheetUrl('General Notice')),
                    axios.get(getSheetUrl('Admission Notice')),
                    axios.get(getSheetUrl('Tender Notice')),
                    axios.get(getSheetUrl('Upcoming Events')),
                ]);

                setGeneralNotices(general.data);
                setAdmissionNotices(admission.data);
                setTenderNotices(tender.data);
                setUpcomingNotices(upcoming.data);
            } catch (error) {
                console.error('Error fetching notices:', error);
                setError('Failed to fetch notices. Please try again later.');
            }
        };

        fetchAllNotices();
    }, []);

    const NoticeCard = ({ notice }) => (
        <div className={myStyles.card}>
            <h4>{notice.title}</h4>
            <div className={myStyles.date}>
                <span className={myStyles.dates}>{notice.date}</span>
                {notice.link && (
                    <span>
                        <a href={notice.link} target="_blank" rel="noopener noreferrer">
                            View Notice
                        </a>
                    </span>
                )}
            </div>
        </div>
    );

    if (error) return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Error</h2>
            <div className={myStyles.notice}>{error}</div>
        </div>
    );

    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Latest Notifications</h2>

            <div className={myStyles.notice}>
                <div className={myStyles.category}>
                    <h3 className={myStyles.category_title}>General Notices</h3>
                    <div className={myStyles.grid}>
                        {generalNotices.map((notice, index) => (
                            <NoticeCard key={index} notice={notice} />
                        ))}
                    </div>
                </div>

                <div className={myStyles.category}>
                    <h3 className={myStyles.category_title}>Admission Notices</h3>
                    <div className={myStyles.grid}>
                        {admissionNotices.map((notice, index) => (
                            <NoticeCard key={index} notice={notice} />
                        ))}
                    </div>
                </div>

                <div className={myStyles.category}>
                    <h3 className={myStyles.category_title}>Tender Notices</h3>
                    <div className={myStyles.grid}>
                        {tenderNotices.map((notice, index) => (
                            <NoticeCard key={index} notice={notice} />
                        ))}
                    </div>
                </div>

                <div className={myStyles.category}>
                    <h3 className={myStyles.category_title}>Upcoming Events</h3>
                    <div className={myStyles.grid}>
                        {upcomingNotices.map((notice, index) => (
                            <NoticeCard key={index} notice={notice} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
