import { useStaredShows } from "../librarycustom/useStaredShow";
import { useQuery } from "@tanstack/react-query";
import { getShowByIds } from "../Api/Tvmaze";
import ShowGrid from "../Component/shows/ShowGrid";
import { TextCenter } from "../Common/TextCenter";

const Started = ()=>{
    const [staredShowIds] = useStaredShows( );
    const {data:staredShow, error:staredShowError} = useQuery({
        queryKey:['stared', staredShowIds],
        queryFn: () => getShowByIds(staredShowIds).then(result => result.map(show=> ({ show })
          )),
        refetchOnWindowFocus:false,
    });
    if(staredShow?.length === 0){
        return <TextCenter>NO Shows were stared</TextCenter>

    }
    if(staredShow?.length > 0){
        return <ShowGrid shows={staredShow}></ShowGrid>
    }
    if(staredShowError){
        return <TextCenter>Error occured:{staredShowError.message}</TextCenter>
    }
    return <TextCenter>shows are lloadinng...</TextCenter>
    
};
export default Started;