export default function Dsadisplay({dsa}){

    return(
        <div>
            <p> Title: {dsa.title}</p>
            <p> Difficulty: {dsa.difficulty}</p>
                <p> Link: {dsa.link}</p>
                <p> Problem: {dsa.problem}</p>
                <p> Solution: {dsa.code}</p>
        </div>
    )
}