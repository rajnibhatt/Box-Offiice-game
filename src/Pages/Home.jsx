import { useState } from "react";

const Home = ()=>{
   const [searchStr,setsearchStr] =  useState("");
   console.log(searchStr);
   const onSearchInputChange = (ev)=>{
    setsearchStr(ev.target.value);
   };
   const onSearch = (ev)=>{
    ev.preventDefault();

   }

    return (
    <div>
       <form onSubmit={onSearch}>
       <input type="text" value={searchStr} onChange={onSearchInputChange}></input>
        <button type="submit">Search </button>
       </form>
    </div>
    );
}
export default Home;