import React from 'react';
import styles from './qustionpage.module.css'
const Answerheet = ({ makeProgress, progress,number,qustion })=>{

    return(
        <>
        <div className={styles.Answerheet} onClick={makeProgress}>
          
            <h2 className={styles.qustion}>{qustion}</h2>
        
        </div>
        </>
    )
}

export default Answerheet;
// import React from "react";

// const ProgressButton = ({ makeProgress, progress }) => (
//   <button
//     onClick={makeProgress}
//     style={{
//       color: progress === 100 ? "#e84118" : "white"
//     }}
//   >
//     sdfdsfds
//     {/* {progress === 100 ? "Again!" : "button"} */}
//   </button>
// );

// export default ProgressButton;
