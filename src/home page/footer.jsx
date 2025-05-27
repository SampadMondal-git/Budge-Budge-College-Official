import myStyles from './footer.module.css';
import { Quicklinks } from '../home page/quicklinks.jsx';
import { Link } from 'react-router-dom';

export function Footer() {

    return (
        <>
            <Quicklinks />
            <div className={myStyles.footer}>
                <div className={myStyles.copyright}>
                    <p>Copyright &copy; 2025 Budge Budge College. All Rights Reserved.</p>
                    <p className={myStyles.hover}>
                        Designed by <a href="https://www.instagram.com/samx4sure/" target="_blank" rel="noreferrer">Sam</a> | 
                        <Link to="/support"> Support the Developer</Link>
                    </p>
                </div>
            </div>
        </>
    );
}
