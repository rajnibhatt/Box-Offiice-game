import React, { useReducer, useEffect } from 'react';
import ShowCard from './ShowCard';
const usePersistedReducer = (reducer,initialState,localStoragkey)=>{
  const [state,dispatch] = useReducer(staredShowReducer,initialState,initial=>{
  const persistedValue = localStorage.getItem(localStoragkey);
  return persistedValue ? JSON.parse(persistedValue): initial;
});
useEffect(()=>{
  localStorage.setItem(localStoragkey, JSON.stringify(state))
},[state,localStoragkey])
return [state,dispatch];
};

const staredShowReducer = (currentStared,action) => {
  switch(action.type){
    case 'STAR': return currentStared.concat(action.showId);
    case 'UNSTAR': return currentStared.filter(showId => showId !== action.showId);
    default:
      return currentStared;
  }

}
const ShowGrid = ({ shows }) => {
  const [staredShow,dispatchStared] = usePersistedReducer(
    staredShowReducer,
    [],
    'staredshows'
    );
  const onStarMeClick = (showId)=>{
    const isStared = staredShow.includes(showId);
    if(isStared){
      dispatchStared({type:'UNSTAR', showId});
    }else{
      dispatchStared({type:'STAR', showId});
    }

  };
  return (
    <div>
      {shows.map(data => (
        <ShowCard
       key={data.show.id}
       id={data.show.id}
       name={data.show.name}
       image={data.show.image ? data.show.image.medium : '/not-found-image.png'}
       summary={data.show.summary} 
       onStarMeClick ={onStarMeClick}
        />
      ))}
    </div>
  );
};

export default ShowGrid;