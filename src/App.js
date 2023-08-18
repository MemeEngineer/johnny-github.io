import './App.css';
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Labs from "./pages/Labs"
import Memepage from "./pages/Memepage"


function App() {
const [memes, setMemes] = useState(null)
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
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/labs" element={<Labs/>}/>
    <Route path="/memes" element={<Memepage memes={memes}/>}/>
    <Route path="*" element={<About/>}/>

      </Routes>
    </div>
  );
}

export default App;
