import './App.css';
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Labs from "./pages/Labs"
import Memepage from "./pages/Memepage"
import Footer from "./components/Footer.js"
import DSA from "./pages/Dsa"
import Dsadisplay from './pages/Dsadisplay';

function App() {
const [memes, setMemes] = useState(null)
const [search, setSearch]= useState("")
const [dsa, setDsa] = useState()
const apiKey= process.env.REACT_APP_MEMEAPI_KEY

const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=5`

const getMeme = async () => {
  try{

  await fetch(url)
  .then(response => response.json())
  .then(content => {
    setMemes(content.data)
  })

  
}catch(e){
  console.log('Error Fetching Data', e)
  }
}

useEffect(() => {
  getMeme()
}, [setMemes])

  return (
    <div className="App">
      
      <Navbar/>
      
      <Routes>

    <Route path="/" element={<About/>} />
    <Route path="/gallery" element={<Gallery search={search} setSearch={setSearch}/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/labs" element={<Labs/>}/>
    <Route path="/dsa" element={<DSA setDsa={setDsa} search={search} setSearch={setSearch}/>}/>
    <Route path="/dsadisplay" element={<Dsadisplay dsa={dsa}/>}/>
    <Route path="/memes" element={<Memepage memes={memes}/>}/>
    <Route path="*" element={<About/>}/>

      </Routes>
    
      <Footer/>
      
    </div>
  );
}

export default App;
