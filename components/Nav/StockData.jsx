import { use } from "react";
import { NseIndia } from "stock-nse-india";
const nseIndia = new NseIndia();
const StockData = ({ symbol }) => {
  let quote;
  let textColor;

  quote = use(
    nseIndia.getEquityDetails(symbol).then((details) => {
      return details.priceInfo;
    })
  );

  textColor = "text-green-400";
  if (quote.change < 0) {
    textColor = "text-red-400";
  }
  console.log(quote);

  return (
    <div className="flex items-center justify-between gap-3">
      <h1 className="rounded-2xl bg-white p-2">{symbol}</h1>
      <div className="text-sm">
        <p className="text-green-400">Price: {quote.lastPrice}</p>
        <p className={textColor}>Change: {quote.change.toFixed(2)}</p>

        {/* Add more fields as needed */}
      </div>
    </div>
  );
};

export default StockData;
