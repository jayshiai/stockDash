import { use } from "react";
import { NseIndia } from "stock-nse-india";
const nseIndia = new NseIndia();

const StockTest = ({ symbol }) => {
  const quote = use(
    nseIndia.getEquityDetails(symbol).then((details) => {
      return details.priceInfo;
    })
  );
  return (
    <div>
      <h1>{symbol}</h1>
      <p>Price: {quote.lastPrice}</p>
      <p>Change: {quote.change}</p>
      <p>Change %: {quote.pChange}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default StockTest;
