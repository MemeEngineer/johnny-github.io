import "./Dsa.css"
import Dsacard from "./Dsacard.js"



export default function Dsa({setDsa, setSearch, search}){


    return(
        <div className="Dsa">
            
            <h1>Data Structures & Algorithms</h1>
            <p>WORK IN PROGRESS</p>
            <Dsacard setDsa={setDsa} search={search} setSearch={setSearch}/>
          
        </div>
    )
}