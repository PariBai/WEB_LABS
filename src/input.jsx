import React, { useState } from 'react'
import './stylinglist.css'

function InputComponent (props){
    const [inputText , setInputText] = useState('');
    const [status,setStatus] = useState("Progress")
    return <>
    <div className='container'>
        <div className='center'>
            <input type='text' placeholder='Enter yuor todo'
            value={inputText}
            onChange={e=>{
                setInputText(e.target.value)
            }}>

            </input>
            <button onClick={()=>{
                props.add({inputText,status})
                setInputText("")
             }}> + </button>
             <label> Status</label>
             <select style={{marginLeft:'20px', width:'200px'}}  onChange={e=>{
                setStatus(e.target.value)
             }}>
                <option value="Progress">Progress</option>
                <option value="Backlog">Backlog</option>
                <option value="Completed">Completed</option>
             </select>
             

        </div>
    </div>
    </>
}
export default InputComponent;