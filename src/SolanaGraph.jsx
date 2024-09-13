import React, { useEffect } from "react";

const SolanaGraph = () => {
  useEffect(() => {
    // Create and append the TradingView widget script
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [["Solana", "BINANCE:SOLUSDT|1D"]],
      chartOnly: false,
      width: "100%",
      height: 500,
      locale: "en",
      colorTheme: "dark",
      autosize: true,
      showVolume: true,
      showMA: true,
      hideDateRanges: false,
      hideSymbolLogo: false,
      scalePosition: "right",
      scaleMode: "Normal",
      fontFamily: "Trebuchet MS, sans-serif",
      fontSize: "12",
      container_id: "tradingview_123",
    });

    // Append the script to the container
    document.getElementById("tradingview_widget").appendChild(script);
  }, []);

  return (
    <div className="ml-10 mr-10 p-4 bg-gray-900 rounded-lg shadow-lg border border-gray-600">
      <h2 className="text-xl font-bold text-center text-white mb-4">Solana Live Price Chart</h2>
      <div
        id="tradingview_widget"
        className="rounded-lg overflow-hidden"
        style={{ height: "500px", width: "100%" }}
      ></div>
    </div>
  );
};

export default SolanaGraph;
