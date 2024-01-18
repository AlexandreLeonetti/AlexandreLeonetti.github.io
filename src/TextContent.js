import React from 'react';

const TextContent = () => {
  const zIdx = {
    zIndex: 8,
  };

  return (
    <div style={zIdx}>
      <p>
        ALEX, SENIOR WEB DEVELOPER
      </p>
      <a
        className="App-link"
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

