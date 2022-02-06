import React from "react";
import "./reportCard.css";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

const ReportCard = ({ title, price, deviation, bgColor, negative }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="reportCard cardShawdow"
    >
      <span className="reportTitle">{title}</span>
      <div className="reportPriceContainer">
        <span className="reportPrice">&#8377;{price}</span>
        <span className="reportPriceDeviation">{deviation}</span>
        {negative ? (
          <span className="priceDownIcon">
            <ArrowDownward />
          </span>
        ) : (
          <span className="priceUpIcon">
            <ArrowUpward />
          </span>
        )}
      </div>
      <span className="summaryReport">Compared to last month</span>
    </div>
  );
};

export default ReportCard;
