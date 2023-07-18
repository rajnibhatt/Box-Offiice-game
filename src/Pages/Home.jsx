import { useState } from "react";
import {searchForShows,searchForPeople} from "./../Api/Tvmaze";
const Home = ()=>{
   const [searchStr,setsearchStr] =  useState("");
   const [apiData,setApiData] = useState([]);
   const [apiDataError,setApiDataError] = useState(null);
   const [searchOption,setSearchOption] = useState('shows');
   
   console.log(searchOption);

   const onSearchInputChange = (ev)=>{
    setsearchStr(ev.target.value);
   };

   const onRadioChange  = ev =>{
    setSearchOption(ev.target.value);
   }

   const onSearch = async (ev)=>{
    ev.preventDefault();
    try{
    setApiDataError(null);
    if(searchOption === 'shows'){
        const result = await searchForShows(searchStr);
        console.log(`result- ${result}`);
        setApiData(result);
    }else{
        const result = await searchForPeople(searchStr);
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
       <form onSubmit={onSearch}>
       <input type="text" value={searchStr} onChange={onSearchInputChange}></input>
                <label>
                 shows
                <input type="radio" name="search-option" value = "shows"
                checked = {searchOption === 'shows'}
                onChange={onRadioChange} >
                </input>
                </label>

                <label>
                Actor
                <input type="radio" name="search-option" value= "Actor"
                checked = {searchOption === 'Actor'}
                onChange={onRadioChange}>
                </input>
                </label>
    <button type="submit">Search </button>
       </form>
       <div>{renderApiData()}</div>
    </div>
    );
};

export default Home;