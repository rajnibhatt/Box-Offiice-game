
import {useReducer,useEffect} from "react";

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
   export const useStaredShows = ()=>{
    return usePersistedReducer(
        staredShowReducer,
        [],
        'staredshows'
        );

  }