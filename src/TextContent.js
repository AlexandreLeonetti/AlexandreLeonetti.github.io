import React from 'react';

const TextContent = () => {
  const zIdx = {
    zIndex: 8,
    position:"relative",
      fontWeight:'800',
/*      fontSize:"2em",
      color:"#eb4a4c",
      marginTop:'-10%',
      "@media (minWidth: 920px)": {
        fontSize: "4em",
      }*/
  };
   const white = {
       color:"white",
   };

  return (
    <div className="TextContent" style={zIdx}>
      <p >
        ALEX, <span style={white}>SENIOR WEB DEVELOPER</span>
      </p>
      
    </div>
  );
};

export default TextContent;

