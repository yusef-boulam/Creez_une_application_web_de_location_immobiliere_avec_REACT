import "../styles/Slideshow.css";

function Ball({data}) {
    console.log(data)

    return (
   
        <div className="container-ball">
        {data.data.pictures.map((picture) => (
          <div className="ball"></div>
        ))}
      </div>

  )}
  
  export default Ball;