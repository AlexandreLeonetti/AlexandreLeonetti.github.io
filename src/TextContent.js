import React from 'react';

const TextContent = () => {
  const zIdx = {
    zIndex: 8,
    position:"relative",
      color:"white",
  };

  return (
    <div className="TextContent" style={zIdx}>
      <p >
        ALEX, SENIOR WEB DEVELOPER
      </p>
      <a 
        color="white"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};

export default TextContent;

