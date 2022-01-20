import React from "react";

const ProgressBar = ({ width }) => (
  <div className="outer">
    <div
      className="inner"
      style={{
        width: `${width}%`,
        backgroundColor: width === 10 ? "#e84118" : "#4cd137"
      }}
    />
  </div>
);

export default ProgressBar;