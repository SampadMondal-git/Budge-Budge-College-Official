import './App.css';
import { Navbar } from './home page/navbar.jsx';
// import { Body } from './home page/body.jsx';
import { Footer } from './home page/footer.jsx';
import { Missionandvision } from './navlinks pages/mission&vision.jsx';
function App() {
  return (
    <>
    <Navbar />
    {/* <Body /> */}
    <Missionandvision />
    <Footer />
    </>
  );
}

export default App;
