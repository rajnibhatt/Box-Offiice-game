import { useStaredShows } from "../librarycustom/useStaredShow";
import { useQuery } from "@tanstack/react-query";
import { getShowByIds } from "../Api/Tvmaze";
import ShowGrid from "../Component/shows/ShowGrid";

const Started = ()=>{
    const [staredShowIds] = useStaredShows( );
    const {data:staredShow, error:staredShowError} = useQuery({
        queryKey:['stared', staredShowIds],
        queryFn: () => getShowByIds(staredShowIds).then(result => result.map(show=> ({ show })
          )),
        refetchOnWindowFocus:false,
    });
    if(staredShow?.length === 0){
        return <div>NO Shows were stared</div>

    }
    if(staredShow?.length > 0){
        return <ShowGrid shows={staredShow}></ShowGrid>
    }
    if(staredShowError){
        return <div>Error occured:{staredShowError.message}</div>
    }
    return <div>hello</div>
    
};
export default Started;