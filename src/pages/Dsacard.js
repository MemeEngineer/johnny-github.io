import {DSAbank} from "../data.js"
export default function Dsacard(){
    
    return(
        <div>
           
            {DSAbank.map((data) => {
        return (
            <div>
                <p> Title: {data.title}</p>
                <p> Difficulty: {data.difficulty}</p>
                <p> Link: {data.link}</p>
                <p> Problem: {data.problem}</p>
                <p> Solution: {data.code}</p>

            </div>
        )
        })}
        
        </div>
    )
}