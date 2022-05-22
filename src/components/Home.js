import React from 'react';
import Hour from './hour';

export default function Home() {
  const timeArr = [
      {
          start: "12 AM",
          end: "1 AM"  
      },
      {
        start: "1 AM",
        end: "2 AM"  
    },
    {
        start: "2 AM",
        end: "3 AM"  
    },
    {
        start: "3 AM",
        end: "4 AM"  
    },
    {
        start: "4 AM",
        end: "5 AM"  
    },
    {
        start: "5 AM",
        end: "6 AM"  
    },
    {
        start: "6 AM",
        end: "7 AM"  
    },
    {
        start: "7 AM",
        end: "8 AM"  
    },
    {
        start: "8 AM",
        end: "9 AM"  
    },
    {
        start: "9 AM",
        end: "10 AM"  
    },
    {
        start: "10 AM",
        end: "11 AM"  
    },
    {
        start: "11 AM",
        end: "12 PM"  
    },
    {
        start: "12 PM",
        end: "1 PM"  
    },
    {
        start: "1 PM",
        end: "2 PM"  
    },
    {
        start: "2 PM",
        end: "3 PM"  
    },
    {
        start: "3 PM",
        end: "4 PM"  
    },
    {
        start: "4 PM",
        end: "5 PM"  
    },
    {
        start: "5 PM",
        end: "6 PM"  
    },
    {
        start: "6 PM",
        end: "7 PM"  
    },
    {
        start: "7 PM",
        end: "8 PM"  
    },
    {
        start: "8 PM",
        end: "9 PM"  
    },
    {
        start: "9 PM",
        end: "10 PM"  
    },
    {
        start: "10 PM",
        end: "11 PM"  
    },
    {
        start: "11 PM",
        end: "12 AM"  
    },
    ];

    return (
    <div className='homeWrapper'>
        {timeArr.map((item)=>{
             return <Hour time={item}/>   
        })}
       
    </div>
  )
}
