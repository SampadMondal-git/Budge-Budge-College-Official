import './Navbar.css';
import { Body } from './body.jsx';
import { Footer } from './footer.jsx';
export function Navbar() {

  return (
    <>
      <div className="info">
        <div className="contact">
          <div className="email">
          <i class="ri-message-3-fill"></i>
            <p>Email: budgebudgecollege@gmail.com</p>
          </div>

          <div className="phone">
          <i class="ri-phone-fill"></i>
            <p>Phone: 033 24701454 | 033 24805168</p>
          </div>
        </div>
        <div className="button">
          <a href="https://wbcap.in/"><button>Apply Now</button></a>
          <a href="https://cmserp.in/cms/?curl=bbc&cmsof=1"><button>Pay Your Fees</button></a>
          <a href="/"><button>Notification</button></a>
        </div>
      </div>

      <Body />
      <Footer />
    </>
  );
}