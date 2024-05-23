import React from 'react'
import './stylinglist.css'
function RenderingList (props){
    function handleClick(){
     console.log("trying to delete")
    
    }
    return <>
    <div className='container'>
    <li >
        {props.item}
        
        <img
        src=" /assets/download.png"
        alt="Delete item"
        onClick={handleClick}
        style={{ marginLeft: '100px' }}
      />
    </li>
    
   
    </div>
    </>
}
export default RenderingList;