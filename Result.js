function Result(props)
{


return(
<>
<center>
<h1> { props.title} </h1>
<img src= { props.urlToImage}></img>
<br/>
<a href={ props.url }> Read More</a>
<hr/>
<hr/>
</center>
</>
);
}
export default Result;