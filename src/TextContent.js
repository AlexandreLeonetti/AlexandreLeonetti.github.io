import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="https://www.linkedin.com/in/alexandre-leonetti/">
        ALEX, <span style={white}>SENIOR WEB DEVELOPER</span>


      </Link>
      </p>
      
    </div>
  );
};

export default TextContent;

