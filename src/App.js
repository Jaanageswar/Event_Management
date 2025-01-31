import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<Home />} /> {/* Use element instead of component */}
          <Route path="/booking" element={<Booking />} /> {/* Use element instead of component */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
