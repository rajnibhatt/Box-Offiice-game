import { useState } from "react";
import { useSearchStr } from "../librarycustom/UseSearchStr";
import CustomRadio from "./CustomRadio";
const SearchForms = ({onSearch}) => {
    const [searchStr,setsearchStr] =  useSearchStr('');
    const [searchOption,setSearchOption] = useState('shows');

    const onSearchInputChange = (ev)=>{
        setsearchStr(ev.target.value);
       };
    
       const onRadioChange  = ev =>{
        setSearchOption(ev.target.value);
       }

       const onSubmit = ev =>{
        ev.preventDefault();
        const option =  {
            q: searchStr,
            searchOption,

        };
        onSearch(option);
       }

    return (
    <form onSubmit={onSubmit}>
    <input type="text" value={searchStr} onChange={onSearchInputChange}></input>

            <CustomRadio
              label="Shows"
              name="search-option" 
              value = "shows"
             checked = {searchOption === 'shows'}
             onChange={onRadioChange}
            />

            <CustomRadio
              label="Actors"
              name="search-option" 
              value = "actors"
             checked = {searchOption === 'actors'}
             onChange={onRadioChange}
            />

             {/* <label>
              shows
             <input type="radio"
              name="search-option" 
              value = "shows"
             checked = {searchOption === 'shows'}
             onChange={onRadioChange} >
             </input>
             </label>

             <label>
             Actor
             <input type="radio" name="search-option" value= "actors"
             checked = {searchOption === 'actors'}
             onChange={onRadioChange}>
             </input>
             </label> */}
 <button type="submit">Search </button>
    </form>
    );
}
export default SearchForms;