import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/booking" element={<Booking />} /> 
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
