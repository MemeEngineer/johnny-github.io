import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Labs from "./pages/Labs"
import Memepage from "./pages/Memepage"
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>

    <Route path="/" element={<About/>} />
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/labs" element={<Labs/>}/>
    <Route path="/memes" element={<Memepage/>}/>
    <Route path="*" element={<About/>}/>

      </Routes>
    </div>
  );
}

export default App;
