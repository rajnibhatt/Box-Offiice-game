import { useState } from "react";
import {searchForShows} from "./../Api/Tvmaze";

const Home = ()=>{
   const [searchStr,setsearchStr] =  useState("");
   const [apiData,setApiData] = useState([]);
   const [apiDataError,setApiDataError] = useState(null);
   console.log(searchStr);

   const onSearchInputChange = (ev)=>{
    setsearchStr(ev.target.value);
   };


   const onSearch = async (ev)=>{
    ev.preventDefault();
    try{
        setApiDataError(null);
    const result = await searchForShows(searchStr);
    setApiData(result);
}catch(Error){
    setApiDataError(Error);
}
   
   }


   const renderApiData = () =>{
    if(apiDataError){
        return <div>Error occured:{apiDataError.message}</div>;
    }
    if(apiData){
        return apiData.map((data)=>(
         <div key={data.show.id}>{data.show.name}</div>
                
        ));
    }
    return null;
        };

    return (
    <div>
       <form onSubmit={onSearch}>
       <input type="text" value={searchStr} onChange={onSearchInputChange}></input>
        <button type="submit">Search </button>
       </form>
    <div>{renderApiData()}</div>
    </div>
    );
};

export default Home;