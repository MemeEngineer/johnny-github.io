import TextField from '@mui/material/TextField';
export default function SearchBar(props){
    const {setSearch}= props

    return(
        <div>
      <TextField
      type= "text"
      placeholder= "Search..." 
       onChange={(e)=> setSearch(e.target.value)}
       />
    </div>
    )
}