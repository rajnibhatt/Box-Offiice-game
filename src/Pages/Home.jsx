import { useState } from "react";
import {searchForShows,searchForPeople} from "./../Api/Tvmaze";
import SearchForms from '../Component/SearchForms';
const Home = ()=>{

   const [apiData,setApiData] = useState([]);
   const [apiDataError,setApiDataError] = useState(null);
   const onSearch = async ({q,searchOption})=>{
    try{
    setApiDataError(null);
    if(searchOption === 'shows'){
        const result = await searchForShows(q);
        console.log(`result- ${result}`);
        setApiData(result);
    }else{
        const result = await searchForPeople(q);
        console.log(`result- ${result}`);
        setApiData(result);
    }
   
}catch(Error){
    setApiDataError(Error);
}
   };
   const renderApiData = () =>{
    if(apiDataError){
        return <div>Error occured:{apiDataError.message}</div>;
    }
    if(apiData.length){
        console.log(apiData);
        return apiData[0].show 
        ? apiData.map(data =><div key={data.show.id}>{data.show.name}</div>  )
        : apiData.map(data =><div key={data.person.id}>{data.person.name}</div>
         ); 
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