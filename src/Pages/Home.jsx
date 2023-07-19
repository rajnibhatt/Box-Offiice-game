import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {searchForShows,searchForPeople} from "./../Api/Tvmaze";
import SearchForms from '../Component/SearchForms';
import ShowGrid from "../Component/shows/ShowGrid";
import ActorsGrid from "../Component/actors/ActorsGrid";
const Home = ()=>{
    const [filter,setFilter] = useState(null);

    const {data:apiData, error:apiDataError} = useQuery({
        queryKey:['search', filter],
        queryFn: () => filter.searchOption === 'shows' 
        ? searchForShows(filter.q) 
        : searchForPeople(filter.q),
        enabled : !!filter,
        refetchOnWindowFocus:false,
    });


//    const [apiData,setApiData] = useState([]);
//    const [apiDataError,setApiDataError] = useState(null);

   const onSearch = async ({q,searchOption})=>{
    setFilter({q,searchOption})
//     try{
//     setApiDataError(null);
//     if(searchOption === 'shows'){
//         const result = await searchForShows(q);
//         console.log(`result- ${result}`);
//         setApiData(result);
//     }else{
//         const result = await searchForPeople(q);
//         console.log(`result- ${result}`);
//         setApiData(result);
//     }
   
// }catch(Error){
//     setApiDataError(Error);
// }
   };
   const renderApiData = () =>{
    if(apiDataError){
        return <div>Error occured:{apiDataError.message}</div>;
    }
    if(apiData?.length === 0){
        return <div>No Result</div>
    }
    if(apiData){
        console.log(apiData);
        return apiData[0].show 
        ? (<ShowGrid shows={apiData}/>)
        :(<ActorsGrid actors={apiData}/>)
         
    }
    return null;
        };

    return (
    <div className="container">
        <SearchForms onSearch={onSearch}></SearchForms>
       <div>{renderApiData()}</div>
    </div>
    );
};

export default Home;