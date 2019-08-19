import React from "react";

import Sparkline from "@/components/Common/Sparklines";

export default () => {
  return (
    <div className="card bg-info-light pt-2 b0">
      <div className="px-2">
        <em className="icon-cloud-upload fa-lg float-right" />
        <div className="h3 mt0">1234 / 1900</div>
        <div className="text-uppercase">Calories</div>
      </div>
      <Sparkline
        options={{
          type: "line",
          width: "100%",
          height: "60px",
          lineColor: "#23b7e5",
          chartRangeMin: "0",
          fillColor: "#23b7e5",
          spotColor: "#23b7e5",
          minSpotColor: "#23b7e5",
          maxSpotColor: "#23b7e5",
          highlightSpotColor: "#23b7e5",
          highlightLineColor: "#23b7e5",
          resize: true
        }}
        values="2,5,3,7,4,5,2,5,3,7,4,5,2,5,3,7,4,5"
        style={{ marginBottom: "-2px" }}
      />
    </div>
  );
};
