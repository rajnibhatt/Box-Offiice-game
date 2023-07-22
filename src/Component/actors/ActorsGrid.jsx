import NotFoundImageSrc from '../../librarycustom/not-found-image.png';
import React from 'react';
import ActorCards from './ActorCards';
import { FlexGrid } from '../../Common/FlexGrid';

const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
        
      {actors.map(data => (
        <ActorCards
         key={data.person.id}
         name = {data.person.name}
         image={data.person.image ? data.person.image.medium : NotFoundImageSrc}
        country={data.person.country ? data.person.country.name :null}
        birthday={data.person.birthday}
        deathday={data.person.deathday}
        gender={data.person.gender}
         />
      ))}
    </FlexGrid>
  );
};

export default ActorsGrid;