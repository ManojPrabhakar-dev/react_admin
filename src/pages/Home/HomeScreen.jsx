import React from "react";
import "./homeScreen.css";
import ReportCard from "../../components/statisticsInfo/ReportCard";
import SalesChart from "../../components/charts/SalesChart";
import NewMembersList from "../../components/newUserInfo/NewMembersList";
import TransactionList from "../../components/transactionInfo/TransactionList";

const HomeScreen = () => {
  return (
    <div className="contentArea">
      <div className="statsInfoContainer">
        <ReportCard
          title="Revenue"
          price="1299"
          deviation="+11.5"
          bgColor={"#ade0cb"}
        />
        <ReportCard
          title="Sales"
          price="4350"
          deviation="-25.5"
          bgColor={"#eca9bb"}
          negative
        />
        <ReportCard
          title="Cost"
          price="3275"
          deviation="+32.5"
          bgColor={"#91c3da"}
        />
      </div>
      <div className="chartContainer cardShawdow">
        <span className="chartTitle">Sales Analytics</span>
        <SalesChart />
      </div>
      <div className="homeBottomContainer">
        <div className="leftCardContainer cardShawdow">
          <span className="btmCardTitle">New Join Members</span>
          <NewMembersList
            name="Anna prabhak"
            role="Software Engineer"
            imgSrc="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <NewMembersList
            name="Anna prabhak"
            role="Software Engineer"
            imgSrc="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <NewMembersList
            name="Anna prabhak"
            role="Software Engineer"
            imgSrc="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <NewMembersList
            name="Anna prabhak"
            role="Software Engineer"
            imgSrc="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
        </div>
        {/* <div style={{ flex: 4 }}>transaction</div> */}
        <TransactionList />
      </div>
    </div>
  );
};

export default HomeScreen;
