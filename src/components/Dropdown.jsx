import "../styles/Dropdown.css";
import React from "react";
import Vector from "../assets/Apropos/Vector.png";

function Dropdown({texte, arrayDropdown, setArrayDropdown, id}) {
 
  const openClose = (id) => {

 // copie du state 
 const arrayDropdownModify = [...arrayDropdown]

 // manipule la copie du state
   const dropdownClic = arrayDropdownModify.find(dropdown => id === dropdown.id)
     if(dropdownClic.Open === true) {
      arrayDropdownModify.find(dropdown => id === dropdown.id).Open = false

  } else if (dropdownClic.Open === false){
    arrayDropdownModify.find(dropdown => id === dropdown.id).Open = true
   }
   
     // modifie le state
   setArrayDropdown(arrayDropdownModify)

  }

  // AFFICHAGE
  const dropdownClic = arrayDropdown.find(dropdown => id === dropdown.id)

if (dropdownClic.Open === true){
// si descrpitif ouvert
  return (
    <div className="container-Dropdown">
        <h2>{`${texte}`}</h2>
      <img
        onClick={()=> openClose(id)}
        src={Vector}
        alt="fleche ouverture descriptifs"
      />
    </div>
  );
}

else {
  // si descrpitif ferme
  return (
    <div className="gloabal-container">
    <div className="container-Dropdown">
        <h2>{`${texte}`}</h2>
      <img className="img-close"
        onClick={()=> openClose(id)}
        src={Vector}
        alt="fleche ouverture descriptifs"
      />
    </div>
    <div className="descriptif"> {dropdownClic.description}</div>
    </div>
  );

}
}
export default Dropdown;
