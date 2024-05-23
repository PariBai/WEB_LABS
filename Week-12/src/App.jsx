import { useState } from 'react'

import './App.css'
//import Users from './Users'
//import CustomComponent from './CustomComponent'
import InputComponent from './input.jsx'
import RenderingList from './RendringList.jsx';

function App() {
  const [mylist,setList] = useState([]);
  function addlist({inp, status}){
    if(inp=="")
      alert("please enter something in list")
    else
    setList([...mylist,{inp,status}])
  }
 
  return (
    
    <>
    <InputComponent add={addlist}/>
    {console.log(mylist)}
    <h1>TODO</h1>
    <hr></hr>
    {mylist.map((listitem,i)=>{
      return(
        <RenderingList
        key={i}
        item={listitem.inputText}
        status={listitem.status}
        
      />
      )
    }
  )
}

    </>
  )
}

export default App
