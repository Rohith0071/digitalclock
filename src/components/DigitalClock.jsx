import React from 'react'
import { useState,useEffect } from 'react'

const DigitalClock = () => {
    //Usestate for storing the current time
    const [time,setTime]=useState(new Date())
    console.log(time)

    //useeffect for the handling the time
    useEffect(()=>{
        let intervalID=setInterval(()=>{
            setTime(new Date())  //updating the time after every 1 sec
        },1000)
        return()=>{
            clearInterval(intervalID)
        }//cleanup function
    },[])//dependency

    //formatting the time
    function formatTime(){
        let hours=time.getHours()
        let min=time.getMinutes()
        let seconds=time.getSeconds()
        let AmPm=(hours>=12)?"PM":"AM"
        hours=hours%12 || 12
        return `${AddZero(hours)}:${AddZero(min)}:${AddZero(seconds)} ${AmPm}`
    }
    function AddZero(a){
        return (a<10?"0":"")+a

    }






  return (
    <div className='container'>
        <div className="p-3 mb-2 bg-success text-white">
            <h1 className='text-info'>{formatTime()}</h1>
        </div>
      
    </div>
  )
}

export default DigitalClock
