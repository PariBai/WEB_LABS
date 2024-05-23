
import React, { useState } from "react";
import "./todo.css";
const MyList = () => {
    const [text,setText] = useState("")
    const [recipes, setRecipes] = useState([])
    
    const [ingredeint, setIngredeint] = useState("salt")
    function addrecipe(){
        if(text === ''){
            alert("please enter name of recipe")
        }
        else {
            setRecipes((prevRecipes) => [...prevRecipes,{name : text, ingredeints: ingredeint }])
            setText("")
        }
    }
  return (
    <>
    <div className="container">
        <input type='text' placeholder="Name of Recipe" value={text} onChange={(e)=>
            setText(e.target.value)
        }/>
        <select value={ingredeint} onChange={(e)=> setIngredeint(e.target.value)}>
            <option value='salt'>salt</option>
            <option value='lemon'>lemon</option>
            <option value='chilli'>chilli</option>
        </select>

        <button onClick={addrecipe}>Add New Recipe</button>
        //{console.log({recipes})} 
        <div className="MyContainer">
            recipes.map((recipe)=>{
                 
            })
        </div>
    </div>
    </>
  )
}

export default MyList