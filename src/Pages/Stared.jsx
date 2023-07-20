import { useStaredShows } from "../librarycustom/useStaredShow";
const Started = ()=>{
    const [staredShow] = useStaredShows( );
    return <div>Stared page, stared{staredShow.length}</div>
    
};
export default Started;