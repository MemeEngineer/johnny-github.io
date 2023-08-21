

export default function Memepage(props){
    const {memes} = props
    
    return(
        <div>
            
            <h1>Memes By Johnny</h1>
            
            <p>Fetched from GIPHY API</p>
            {memes.map((meme, index)=> {
                return(
                    <div key={index}>
                <h4>{meme.title}</h4>
                <img src={meme.images.downsized.url} alt={meme.title}></img>
                    </div>
            )})}
            
        </div>
    )
}