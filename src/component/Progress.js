
// import React from 'react'; 
// const  = (props) => {
//     const { bgcolor, completed } = props;
  
//     const containerStyles = {
//       height: 10,
//       width: '100%',
//       backgroundColor: "#e0e0de",
      
//       margin: 0
//     }
  
//     const fillerStyles = {
//       height: '100%',
//       width: `${completed}%`,
//       backgroundColor: bgcolor,
//       borderRadius: 'inherit',
//       textAlign: 'right'
//     }
  
  
//     return (
//       <div >
//        <h1 style={{backgroundColor:'black'}}>dkfg;kdk;gkdf</h1>
//       </div>
//     );
//   };
  
 

  import React,{useState} from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./Progress.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      {/* <div className="text">Remaining</div> */}
      <div className="value">{remainingTime}</div>
      {/* <div className="text">seconds</div> */}
    </div>
  );
};

function ProgressBar(props) {

  return (
    <div>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying={props.playing}
          duration={120}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          // onComplete={() => [true, 1000]}
          size={100}
        >
          {renderTime}
        </CountdownCircleTimer>
       
      </div>
    </div>
  );
}

export default ProgressBar;