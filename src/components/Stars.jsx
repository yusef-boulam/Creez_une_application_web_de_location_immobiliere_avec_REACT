import "../styles/Stars.css";
import star from "../assets/ficheLogement/stars.png";
import greyStar from "../assets/ficheLogement/greyStars.png";

function Stars(rating) {

  const stars = Number(rating.rating)

  {if(stars===0){
  return (
  
  <div className="Stars"> 
<img src={greyStar} alt="etoile sans j'aime" className="stars" />
   <img src={greyStar} alt="etoile sans j'aime" className="stars" />
   <img src={greyStar} alt="etoile sans j'aime" className="stars" />
   <img src={greyStar} alt="etoile sans j'aime" className="stars" />
   <img src={greyStar} alt="etoile sans j'aime" className="stars" />
  </div>
  
  );
} else if(stars===1){
  return (
  
    <div className="Stars"> 
     <img src={star} alt="etoile j'aime" className="stars" />
     <img src={greyStar} alt="etoile sans j'aime" className="stars" />
   <img src={greyStar} alt="etoile sans j'aime" className="stars" />
   <img src={greyStar} alt="etoile sans j'aime" className="stars" />
   <img src={greyStar} alt="etoile sans j'aime" className="stars" />
    </div>
  )
} else if(stars===2){
  return (
  
    <div className="Stars"> 
       <img src={star} alt="etoile j'aime" className="stars" />
       <img src={star} alt="etoile j'aime" className="stars" />
   <img src={greyStar} alt="etoile sans j'aime" className="stars" />
   <img src={greyStar} alt="etoile sans j'aime" className="stars" />
   <img src={greyStar} alt="etoile sans j'aime" className="stars" />
    </div>
  )
} else if(stars===3){
  return (
  
    <div className="Stars"> 
    <img src={star} alt="etoile j'aime" className="stars" />
       <img src={star} alt="etoile j'aime" className="stars" />
       <img src={star} alt="etoile j'aime" className="stars" />
   <img src={greyStar} alt="etoile sans j'aime" className="stars" />
   <img src={greyStar} alt="etoile sans j'aime" className="stars" />
    </div>
  )
} else if(stars===4){
  return (
  
    <div className="Stars"> 
      <img src={star} alt="etoile j'aime" className="stars" />
       <img src={star} alt="etoile j'aime" className="stars" />
       <img src={star} alt="etoile j'aime" className="stars" />
       <img src={star} alt="etoile j'aime" className="stars" />
   <img src={greyStar} alt="etoile sans j'aime" className="stars" />
    </div>
  )
} else if(stars===5){
  return (
  
    <div className="Stars"> 
     <img src={star} alt="etoile j'aime" className="stars" />
     <img src={star} alt="etoile j'aime" className="stars" />
     <img src={star} alt="etoile j'aime" className="stars" />
     <img src={star} alt="etoile j'aime" className="stars" />
     <img src={star} alt="etoile j'aime" className="stars" />
    </div>
  )
}
} }

export default Stars;
