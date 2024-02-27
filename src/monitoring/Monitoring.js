import React, { useState, useEffect } from 'react';
import Card from "./Card";
import './Monitoring.css';

const Monitoring= () => {
  const [data, setData] = useState(null);
  const  [lastPrice, setLastPrice] =  useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await fetch('http://16.170.155.76:5000/daysig');
        //const jsonData = await response.json();
        //setData(jsonData);
        //let latest  = await fetch('http://16.170.155.76:5000/history');
        let latest    = await fetch('https://worldmathranking.com/api/mongo');
        latest = await latest.json();
        latest = latest[latest.length-1];
        latest = parseFloat(latest);
        let testArr = [latest,latest,latest,latest,latest];
        setLastPrice(testArr);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid-container">
            {lastPrice && lastPrice.map((currency, index) => (
                        <Card key={index} data={data} lastPrice={currency} />
            ))}
    </div>
  );
};

export default Monitoring;
