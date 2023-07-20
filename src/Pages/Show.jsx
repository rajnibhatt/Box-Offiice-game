import { Link, useParams } from "react-router-dom";
import { useQuery} from '@tanstack/react-query';
import { getShowById } from "../Api/Tvmaze";
import ShowMainData from "../Component/shows/ShowMainData";
import Details from "../Component/shows/Details";
import Seasons from "../Component/shows/Seasons";
import Cast from "../Component/shows/Cast";
// const useShowById = showId =>{
//     const [showData,setShowData] = useState(null);
//     const [showError,setShowError] = useState(null);

//     useEffect(()=>{
//         async function fetchData(){
//             try{

//                 const data = await getShowById(showId);
//                 setShowData(data);
//             }catch(err){
//                 setShowError(err)
//             }
//         }
//         fetchData();
//     },[showId])
//     return{showData,showError};

// }
const Show = () => {
const {showId} = useParams(); 
const {data:showData,error:showError} = useQuery({
    queryKey:['Show', showId],
    queryFn: () => getShowById(showId),
});
// const navigateTo = useNavigate();
// const onGoBack = ()=>{
//     navigateTo('/');
// }
//const {showData,showError} = useShowById(showId);
if(showError){
    return <div>we have an error: {showError.message}</div>;
}
if(showData){
    return (
        <div>
            <Link to={"/"}>Go Back To Start</Link>
            {/* <button type="button" onClick={onGoBack}>Go Back</button> */}
        <ShowMainData
        image={showData.image}
        name={showData.name}
        ratinng={showData.ratinng}
        summary={showData.summary}
        genres={showData.genres}
        >

        </ShowMainData>
        <div>
            <h1>Details</h1>
            <Details
            status = {showData.status}
            premiered= {showData.premiered}
            network = {showData.network}
            >

            </Details>
        </div>

        <div>
            <h2>Seasons</h2>
            <Seasons seasons={showData._embedded.seasons}></Seasons>
        </div>

        <div>
            <h2>Cast: </h2>
            <Cast cast={showData._embedded.cast}></Cast>
        </div>
        </div>
    );

}
    return(
        <div>show page for {showId}</div>
    );
}
export default Show;