import { Link, useParams } from "react-router-dom";
import { useQuery} from '@tanstack/react-query';
import { getShowById } from "../Api/Tvmaze";
import ShowMainData from "../Component/shows/ShowMainData";
import Details from "../Component/shows/Details";
import Seasons from "../Component/shows/Seasons";
import Cast from "../Component/shows/Cast";
import UseReducer from "../UseReducer";
import styled from "styled-components";
import { TextCenter } from "../Common/TextCenter";
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
    return <TextCenter>we have an error: {showError.message}</TextCenter>;
}
if(showData){
    return (

        <ShowPageWrapper>
            <UseReducer></UseReducer>
            <BackHomeWrapper>
            <Link to={"/"}>Go Back To Start</Link>
            </BackHomeWrapper>
            {/* <button type="button" onClick={onGoBack}>Go Back</button> */}
        <ShowMainData
        image={showData.image}
        name={showData.name}
        ratinng={showData.ratinng}
        summary={showData.summary}
        genres={showData.genres}
        >

        </ShowMainData>
        <InfoBlock>
            <h1>Details</h1>
            <Details
            status = {showData.status}
            premiered= {showData.premiered}
            network = {showData.network}
            >

            </Details>
        </InfoBlock>

        <InfoBlock>
            <h2>Seasons</h2>
            <Seasons seasons={showData._embedded.seasons}></Seasons>
        </InfoBlock>

        <InfoBlock>
            <h2>Cast: </h2>
            <Cast cast={showData._embedded.cast}></Cast>
        </InfoBlock>
        </ShowPageWrapper>
    );

}
    return(
        <TextCenter>show page for {showId}</TextCenter>
    );
}
export default Show;
const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;