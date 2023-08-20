

export default function Memepage(props){
    const {memes} = props
    
    return(
        <div>
            <h1>MemePage</h1>
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