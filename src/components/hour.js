import React, {useState} from 'react';
import './component.css';
import Modal from './modal';

export default function Hour(props) {
    const [modalStatus, setModalStatus]= useState(false);
    const [name, setName]= useState([]);
    const [modalData, setModalData]= useState([]);
    const [id, setID]= useState("");

    function handleClick(e){
        setModalStatus(true);
    }

    function closeModal(e){
        setModalStatus(false);
    }

    function handleSubmit(data,id){
        console.log(data, id)
        
        if(id === 0 ){
            setID(`${data}=${Math.random()}`);
            let dataObj = {
                name: data,
                id: `${data}=${Math.random()}`
            }
            let modalVal = [...modalData];
            modalVal.push(dataObj);
            setModalData(modalVal);
            setModalStatus(false);
        }else{
            console.log("--------")
            modalData.map((item)=>{
                    console.log(item);
                    
                 })
        }
        
    }

    function deleteEvent(id){
       let data =  modalData.filter((item)=>{
              return  item.id == id;
         });
         setModalData(data);
    }

    function openModalWithData(e){
        setModalStatus(true);
        setName(e.target.id);
    }

    return (
    <div className='hourWrapper'>
        {console.log(modalData)}
        <div className='hourComponent' id={props.time} onClick={handleClick}>
            <div className='time'>
                {props.time['start']}
            </div >
            {modalData.map((item)=>{
                console.log(item)
                return <span className='events' id={item.name} onMouseDown={openModalWithData} >
                    {item.name}
                    <span></span>
                    </span>
            })}
            {modalStatus ? <Modal 
                id={id}
                name={name}
                deleteEvent={deleteEvent}
                modalData={modalData} stTime={props.time['start']} edTime={props.time['end']}  closeModal={closeModal} handleSubmit={handleSubmit}/> : null}
        </div>
    </div>
  )
}
