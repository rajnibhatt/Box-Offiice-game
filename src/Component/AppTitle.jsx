export default function AppTitle(props){
    const {
        title = "Box office",
        subTitle ="You can find your favourite movie here"} 
        = props;
    return(
<div className="container"> 
    <h1>{title}</h1>
    <p>{subTitle}</p>
</div>

    );
}