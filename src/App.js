import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import Footer from './Components/Footer/Footer';
import { HashRouter as Router, Route,Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/booking" element={<Booking />} /> 
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
