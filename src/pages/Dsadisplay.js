 import Typography from "@mui/material/Typography";
 import Card from '@mui/material/Card';

export default function Dsadisplay({dsa}){

    return(
        <Card sx={{maxWidth: 1000}}>
            <pre>
            <Typography variant="h5">  {dsa.title}</Typography>
            <p> Difficulty: {dsa.difficulty}</p>
                <p> Link: {dsa.link}</p>
                <code> Problem: {dsa.problem}</code>
                <br></br>
                <br></br>
                <code> Solution: {dsa.code}</code>
                </pre>
        </Card>
    )
}