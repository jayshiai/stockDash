"use client";
import { useState, useEffect } from "react";

const StockData = ({ symbol }) => {
  const [quote, setQuote] = useState(null);
  let textColor = "text-green-400";

  const fetchData = async () => {
    const response = await fetch(`/api/data/${symbol}`);
    const data = await response.json();
    setQuote(data);
    console.log("retrieved");
  };
  useEffect(() => {
    fetchData();

    const interval = setInterval(() => fetchData(), 65000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {quote ? (
        <div className="flex items-center justify-between gap-3">
          <h1 className="rounded-2xl bg-white p-2">{symbol}</h1>
          <div className="text-sm">
            <p className="text-green-400">Price: {quote.last}</p>
            <p className={textColor}>
              Change: {quote.percentChange.toFixed(2)}
            </p>
          </div>
        </div>
      ) : (
        <>
          <p className="text-white">LOADING....</p>
        </>
      )}
    </>
  );
};

export default StockData;
