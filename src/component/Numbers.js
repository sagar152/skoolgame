import React from 'react';

const Numbers = ({ makeProgress, progress,number,qustion })=>{
    return(
        <>
          <div  onClick={makeProgress}
   style={{color: progress === 100 ? "#e84118" : "white",backgroundColor:'transparent',border:'2px solid rgba(0, 0, 0, 0.2)',width:'fit-content',padding:'5px 16px',borderRadius:'28px',margin:'9px',height:'25px'}}>
            <p onClick={makeProgress} style={{color:'white'}}>{number}</p></div></>
    )
}
export default Numbers;