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


 

  return (
    // affichage
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

export default Dropdown;
