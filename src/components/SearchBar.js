
export default function SearchBar(props){
    const {search, setSearch}= props

    return(
        <div>
      <input
      type= "text"
      placeholder= "Search..." 
       onChange={(e)=> setSearch(e.target.value)}
       />
    </div>
    )
}