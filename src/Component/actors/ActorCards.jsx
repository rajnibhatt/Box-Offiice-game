import { Link } from "react-router-dom";
import { SearchCard, SearchImgWrapper } from "../../Common/SearchCard";

const ActorCards = ({name,image,gender,country,birthday,deathday}) => {

   
    return (
    <SearchCard>
        <SearchImgWrapper>
            <img src={image} alt={name}/>
        </SearchImgWrapper>
            <h1>{name} {!!gender && `(${gender})`}</h1>
            <p>{country ? `comes from ${country}`:"no country Known"}</p>
            {!!birthday && <p>born {birthday}</p>}
            <p>{deathday ? `died ${deathday}`: 'Alive'}</p>
            <div>
                <Link to="/">Read More</Link>
                <button type="button">Star me</button> 
            </div>
    </SearchCard>
    );
}
export default ActorCards;