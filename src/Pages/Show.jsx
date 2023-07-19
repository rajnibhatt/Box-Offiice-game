import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { getShowById } from "../Api/Tvmaze";
const useShowById = showId =>{
    const [showData,setShowData] = useState(null);
    const [showError,setShowError] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            try{

                const data = await getShowById(showId);
                setShowData(data);
            }catch(err){
                setShowError(err)
            }
        }
        fetchData();
    },[showId])
    return{showData,showError};

}
const Show = () => {
const {showId} = useParams(); 
const {showData,showError} = useShowById(showId);
if(showError){
    return <div>we have an error: {showError.message}</div>;
}
if(showData){
    return <div>Got show data: {showData.name}</div>;

}
    return(
        <div>show page for {showId}</div>
    );
}
export default Show;