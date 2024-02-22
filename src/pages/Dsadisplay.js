export default function Dsadisplay({dsa}){

    return(
        <div>
            <h1>  {dsa.title}</h1>
            <p> Difficulty: {dsa.difficulty}</p>
                <p> Link: {dsa.link}</p>
                <p> Problem: {dsa.problem}</p>
                <p> Solution: {dsa.code}</p>
        </div>
    )
}