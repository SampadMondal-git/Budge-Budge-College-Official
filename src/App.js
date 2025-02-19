import './App.css';
import { Navbar } from './home page/navbar.jsx';
import { Body } from './home page/body.jsx';
import { Footer } from './home page/footer.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Rulesandregulations } from './navlinks pages/rules&regulations.jsx';
import { Aimsandobjective } from './navlinks pages/aims&objective.jsx';
import { Missionandvision } from './navlinks pages/mission&vision.jsx';
import { Admissionnotice } from './navlinks pages/admissionnotice.jsx';
import { Admissionprocedure } from './navlinks pages/admissionprocedure.jsx';
import { Subjectcombination } from './navlinks pages/subjectcombination.jsx';
import { Intakecapacity } from './navlinks pages/intakecapacity.jsx';
import { Eligibilitycriteria } from './navlinks pages/eligibilitycriteria.jsx';
import { Feesstructure } from './navlinks pages/feesstructure.jsx';
import { Coursesoffered } from './navlinks pages/coursesoffered.jsx';
import { Facultymembers } from './navlinks pages/facultymembers.jsx';
import { Governingbody } from './navlinks pages/governingbody.jsx';
import { Teachingstaffs } from './navlinks pages/teachingstaffs.jsx';
import { Librarian } from './navlinks pages/librarian.jsx';
import { Nonteachingstaff } from './navlinks pages/nonteachingstaff.jsx';
import { Sportssubcommittee } from './navlinks pages/sportssubcommittee.jsx';
import { Magazinesubcommittee } from './navlinks pages/magazinesubcommittee.jsx';
import {Buildingsubcommittee} from './navlinks pages/buildingsubcommittee.jsx'
import { Culturalsubcommittee } from './navlinks pages/culturalsubcommittee.jsx';
import { Admissionsubcommittee } from './navlinks pages/admissionsubcommittee.jsx';
import { Librarysubcommittee } from './navlinks pages/librarysubcommittee.jsx';
import { Financesubcommittee } from './navlinks pages/financesubcommittee.jsx';
import { Academicsubcommittee } from './navlinks pages/academicsubcommittee.jsx';
import { Commonroomsubcommittee } from './navlinks pages/commonroomsubcommittee.jsx';
import { Grievanceredressalcell } from './navlinks pages/grievanceredressalcell.jsx';
import { Generalinfrastructure } from './navlinks pages/generalinfrastructure.jsx';
import { Officeinfrastructure } from './navlinks pages/officeinfrastructure.jsx';
import { Wastemanagement } from './navlinks pages/wastemanagement.jsx';
import { PhD } from './navlinks pages/PhD.jsx';
import { Researchproject } from './navlinks pages/researchproject.jsx';
import { Contact } from './navlinks pages/contact.jsx';
import { Notification } from './home page/notification.jsx'
import { Naac } from './navlinks pages/naac.jsx';
import { Otherlinks } from './navlinks pages/otherlinks.jsx';
import { Iqac } from './navlinks pages/iqac.jsx';
import { Studentzone } from './navlinks pages/studentzone.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/budgebudgecollege" element={<Body />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/rules&regulations" element={<Rulesandregulations />} />
        <Route path="/aims&objectives" element={<Aimsandobjective />} />
        <Route path="/mission&vision" element={<Missionandvision />} />
        <Route path="/admissionnotice" element={<Admissionnotice />} />
        <Route path="/admissionprocedure" element={<Admissionprocedure />} />
        <Route path="/subjectcombination" element={<Subjectcombination />} />
        <Route path="/intakecapacity" element={<Intakecapacity />} />
        <Route path="/eligibilitycriteria" element={<Eligibilitycriteria />} />
        <Route path="/feesstructure" element={<Feesstructure />} />
        <Route path="/coursesoffered" element={<Coursesoffered />} />
        <Route path="/facultymembers" element={<Facultymembers />} />
        <Route path="/governingbody" element={<Governingbody />} />
        <Route path="/teachingstaffs" element={<Teachingstaffs />} />
        <Route path="/librarian" element={<Librarian />} />
        <Route path="/nonteachingstaff" element={<Nonteachingstaff />} />
        <Route path="/sportssubcommittee" element={<Sportssubcommittee />} />
        <Route path="/magazinesubcommittee" element={<Magazinesubcommittee />} />
        <Route path="/buildingsubcommittee" element={<Buildingsubcommittee />} />
        <Route path="/culturalsubcommittee" element={<Culturalsubcommittee />} />
        <Route path="/admissionsubcommittee" element={<Admissionsubcommittee />} />
        <Route path="/librarysubcommittee" element={<Librarysubcommittee />} />
        <Route path="/financesubcommittee" element={<Financesubcommittee />} />
        <Route path="/academicsubcommittee" element={<Academicsubcommittee />} />
        <Route path="/commonroomsubcommittee" element={<Commonroomsubcommittee />} />
        <Route path="/grievanceredressalcell" element={<Grievanceredressalcell />} />
        <Route path="/generalinfrastructure" element={<Generalinfrastructure />} />
        <Route path="/officeinfrastructure" element={<Officeinfrastructure />} />
        <Route path="/wastemanagement" element={<Wastemanagement />} />
        <Route path="/phd" element={<PhD />} />
        <Route path="/researchproject" element={<Researchproject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/naac" element={<Naac />} />
        <Route path="/otherlinks" element={<Otherlinks />} />
        <Route path="/iqac" element={<Iqac />} />
        <Route path="/studentzone" element={<Studentzone />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
