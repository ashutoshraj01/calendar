import React, {useState, useEffect} from 'react';
import './component.css';


export default function Modal(props) {
    const [name, setName]= useState("");
    const [id, setID]= useState(0);

    useEffect(()=>{
        console.log(props.modalData)
        if(props.modalData.length > 0){
              setName(props.name);
                setID(props.id);
        }
        
    },[props.name])
    
    function handleClick(e){
        props.closeModal();
        e.stopPropagation();
        props.deleteEvent(id);
    }
    function handleSubmit(){
        let iD = id === 0 ? 0 : id.split("=")[1];
        props.handleSubmit(name, iD);
    }

    function handleChange(e){
        setName(e.target.value);
    }

    return (
    <div className='modalWrapper'>
        <div className='close'>
           {id != 0  ? <span onMouseDown={handleClick} className='closeSpan'>Delete</span>: null }
        </div>
        <h3>Add Event</h3>
        <input value={name} onChange={handleChange} type="text" placeholder="Enter Event Name" />
        <p>Time <span>{props.stTime}</span><span>{props.edTime}</span></p>
        <button onMouseDown={handleSubmit}>Submit</button>
    </div>
  )
}
