const ShowMainData = ({image,name,rating,summary,genres}) =>{
    return(
        <div>
            <img src = {image ? image.original : '/not-found-image.png'} alt={name}/>
            <div>
                <h1>{name}</h1>
                <div>{rating}</div>
                <div dangerouslySetInnerHTML={{__html : summary}}/>
                <div>genres:
                    <div>
                        {genres.map(genres =>(
                            <span key={genres}>{genres}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ShowMainData;