import styled from "styled-components";
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
    <SearchInput type="text" placeholder="Search for something...." value={searchStr} onChange={onSearchInputChange}></SearchInput>
             <RadiosWrapper>

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
            </RadiosWrapper>

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
             <SearchButtonWrapper>
                 <button type="submit">Search </button>
             </SearchButtonWrapper>
    </form>
    );
}
export default SearchForms;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;