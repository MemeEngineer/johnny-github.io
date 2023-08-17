import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Navbar/>
      <Routes>

    <Route path="/" element={<About/>} />
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<About/>}/>

      </Routes>
    </div>
  );
}

export default App;
