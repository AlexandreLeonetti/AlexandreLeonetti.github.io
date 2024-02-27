import React, { useState, useEffect } from 'react';
import './Card.css'; 

const Card= ({ data, lastPrice }) => {
  return (
    <div className="card">
      {data && (
        <div>
          <div  className="data-element"  style={{ backgroundColor: lastPrice / data.ma10 * 100 - 100 > 0 ? '#1B9786' : '#971B2C', padding: '10px', margin: '0px' }}>
            ma10: {(lastPrice/data.ma10)*100 -100}
          </div>
           <div  className="data-element" style={{ backgroundColor: lastPrice / data.ma25 * 100 - 100 > 0 ? '#1B9786' : '#971B2C', padding: '10px', margin: '0px' }}>
            ma25: {(lastPrice/data.ma25)*100 -100}
          </div>
            <div className="data-element" style={{ backgroundColor: lastPrice / data.ma50 * 100 - 100 > 0 ? '#1B9786' : '#971B2C', padding: '10px', margin: '0px' }}>
            ma50: {(lastPrice/data.ma50)*100 -100}
          </div>
             <div className="data-element" style={{ backgroundColor: lastPrice / data.ma100 * 100 - 100 > 0 ? '#1B9786' : '#971B2C', padding: '10px', margin: '0px' }}>
            ma100: {(lastPrice/data.ma100)*100 -100}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
