
import React from 'react';
import ActorCards from './ActorCards';

const ActorsGrid = ({ actors }) => {
  return (
    <div>
        
      {actors.map(data => (
        <ActorCards
         key={data.person.id}
         name = {data.person.name}
         image={data.person.image ? data.person.image.medium : '/not-found-image.png'}
        country={data.person.country ? data.person.country.name :null}
        birthday={data.person.birthday}
        deathday={data.person.deathday}
        gender={data.person.gender}
         />
      ))}
    </div>
  );
};

export default ActorsGrid;