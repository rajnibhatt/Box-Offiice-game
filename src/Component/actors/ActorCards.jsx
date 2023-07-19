import { Link } from "react-router-dom";

const ActorCards = ({name,image,gender,country,birthday,deathday}) => {

   
    return (
    <div>
        <div>
            <img src={image} alt={name}/>
        </div>
            <h1>{name} {!!gender && `(${gender})`}</h1>
            <p>{country ? `comes from ${country}`:"no country Known"}</p>
            {!!birthday && <p>born {birthday}</p>}
            <p>{deathday ? `died ${deathday}`: 'Alive'}</p>
            <div>
                <Link to="/">Read More</Link>
                <button type="button">Star me</button> 
            </div>
    </div>
    );
}
export default ActorCards;