const Seasons = ({seasons}) => {
    return(
        <div>
            <p>Total No. Of Seasons :{seasons.length}</p>
            <p>Total Episode : {' '}
            {seasons.reduce((sum, seasons)=> sum + seasons.episodeOrder, 0)}
            </p>
        <div>
            {seasons.map(seasons =>
            (<div key={seasons.id}>
            <p>Seasons: {seasons.number}</p>
            <p>Episode:{seasons.episodeOrder}</p>
            <div> Aired : {seasons.premiereDate} - {seasons.endDate}</div>
            </div>
            ))}
        </div>
        </div>
          );
}
export default Seasons;