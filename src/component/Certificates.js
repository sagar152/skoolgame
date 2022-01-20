import React from "react";
import Certificate from "../images/certifiate.jpg";
const Certificates =()=>{
    return (
        <>
          <div style={{position:'relative'}}>
                    <img
                      src={Certificate}
                      id='image'
                      alt="certificate not found"
                      style={{ width: "100%", height: "auto" }}
                    />
      <div style={{position:'absolute',top: '40.5%',left: '46%'}}> 
       <h1 style={{color:'black'}}>
            {name.value}
                    </h1>
                    <p style={{color: 'black',fontWeight:'bold',position: 'relative',left:'60px',top:'-15px'}}>
                        {score} <span style={{fontSize:'9px'}}>Out of </span> {Object.keys(quiestions).length}
                    </p>
                    {/* <p>Thank you!</p> */}
                    </div>
                  </div> 
        </>
    )
}
export default Certificates;