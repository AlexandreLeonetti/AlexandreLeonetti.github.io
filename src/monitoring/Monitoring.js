import React, { useState, useEffect } from 'react';

const Monitoring= () => {
  const [data, setData] = useState(null);
  const  [lastPrice, setLastPrice] =  useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://16.170.155.76:5000/daysig');
        const jsonData = await response.json();
        setData(jsonData);
        let latest  = await fetch('http://16.170.155.76:5000/history');
        latest = await latest.json();
        latest = latest[latest.length-1];
        latest = parseFloat(latest);
        setLastPrice(latest);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <div>
          <div style={{ backgroundColor: lastPrice / data.ma10 * 100 - 100 > 0 ? '#1B9786' : '#971B2C', padding: '10px', margin: '0px' }}>
            ma10: {(lastPrice/data.ma10)*100 -100}
          </div>
           <div style={{ backgroundColor: lastPrice / data.ma25 * 100 - 100 > 0 ? '#1B9786' : '#971B2C', padding: '10px', margin: '0px' }}>
            ma25: {(lastPrice/data.ma25)*100 -100}
          </div>
            <div style={{ backgroundColor: lastPrice / data.ma50 * 100 - 100 > 0 ? '#1B9786' : '#971B2C', padding: '10px', margin: '0px' }}>
            ma50: {(lastPrice/data.ma50)*100 -100}
          </div>
             <div style={{ backgroundColor: lastPrice / data.ma100 * 100 - 100 > 0 ? '#1B9786' : '#971B2C', padding: '10px', margin: '0px' }}>
            ma100: {(lastPrice/data.ma100)*100 -100}
          </div>
        </div>
      )}
    </div>
  );
};

export default Monitoring;
