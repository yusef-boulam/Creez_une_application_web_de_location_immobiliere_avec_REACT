import "../styles/Dropdown.css";
import React, { useState } from "react";


function Dropdown({title, description}) {

    //CREATION DU STATE
    const [isOpen, setIsOpen] = useState(true)

    function handleClick(event){
        event.preventDefault()
              //CODE a ecrire pour changer l'etat de isOpen
              let CopyisOpen = true
             isOpen ? CopyisOpen = false : CopyisOpen = true
             setIsOpen(CopyisOpen)
        
             console.log(CopyisOpen)
   


  
    }

    //AFFICHAGE
return (
    <div>
        <button onClick={handleClick}>{title}</button>
        {isOpen && (<p>{description}</p>)}
    </div>
)


}

export default Dropdown;