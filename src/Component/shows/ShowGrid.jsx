import ShowCard from './ShowCard';
import { useStaredShows } from '../../librarycustom/useStaredShow';



const ShowGrid = ({ shows }) => {
 const [staredShow,dispatchStared] = useStaredShows();
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
       isStared = {staredShow.includes(data.show.id)}
        />
      ))}
    </div>
  );
};

export default ShowGrid;