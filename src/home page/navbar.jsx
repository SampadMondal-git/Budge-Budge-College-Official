import myStyles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { Navlink } from './navlink.jsx';
export function Navbar() {

  return (
    <>
      <div className={myStyles.info}>
        <div className={myStyles.contact}>
          <div className={myStyles.email}>
            <i className="ri-message-3-fill"></i>
            <p>Email: <a href="mailto:budgebudgecollege@gmail.com">budgebudgecollege@gmail.com</a></p>
          </div>

          <div className={myStyles.phone}>
            <i className="ri-phone-fill"></i>
            <p>Phone: <a href="tel:03324701454">033 24701454</a> | <a href="tel:03324805168">033 24805168</a></p>
          </div>
        </div>
        <div className={myStyles.button}>
          <a href="https://wbcap.in/"><button>Apply Now</button></a>
          <a href="https://cmserp.in/cms/?curl=bbc&cmsof=1"><button>Pay Your Fees</button></a>
          <Link to="/notification"><button>Notification</button></Link>
        </div>
      </div>

      <Navlink />
    </>
  );
}