import { NseIndia } from "stock-nse-india";
const nseIndia = new NseIndia();

export const GET = async (request, { params }) => {
  try {
    let data = await nseIndia
      .getEquityStockIndices(params.symbol)
      .then((details) => {
        return details.marketStatus;
      });

    console.log(data);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data", { status: 500 });
  }
};
