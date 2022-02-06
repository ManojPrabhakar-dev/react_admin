import React from "react";
import "./sideBar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";

const sideBar = () => {
  return (
    <div className="sidebarContainer">
      <div className="category">
        <span className="sectionTitle">Dashboard</span>
        <ul className="listWrapper">
          <li className="listItem active">
            <LineStyle />
            <span className="itemText">Home</span>
          </li>
          <li className="listItem">
            <Timeline />
            <span className="itemText">Analytics</span>
          </li>
          <li className="listItem">
            <TrendingUp />
            <span className="itemText">Sales</span>
          </li>
        </ul>
      </div>

      <div className="category">
        <span className="sectionTitle">Quick Menu</span>
        <ul className="listWrapper">
          <li className="listItem">
            <PermIdentity />
            <span className="itemText">Users</span>
          </li>
          <li className="listItem">
            <Storefront />
            <span className="itemText">Products</span>
          </li>
          <li className="listItem">
            <AttachMoney />
            <span className="itemText">Transactions</span>
          </li>
          <li className="listItem">
            <BarChart />
            <span className="itemText">Reports</span>
          </li>
        </ul>
      </div>

      <div className="category">
        <span className="sectionTitle">Notifications</span>
        <ul className="listWrapper">
          <li className="listItem">
            <MailOutline />
            <span className="itemText">Mail</span>
          </li>
          <li className="listItem">
            <DynamicFeed />
            <span className="itemText">Feedback</span>
          </li>
          <li className="listItem">
            <ChatBubbleOutline />
            <span className="itemText">Messages</span>
          </li>
        </ul>
      </div>

      <div className="category">
        <span className="sectionTitle">Staff</span>
        <ul className="listWrapper">
          <li className="listItem">
            <WorkOutline />
            <span className="itemText">Manage</span>
          </li>
          <li className="listItem">
            <Timeline />
            <span className="itemText">Analytics</span>
          </li>
          <li className="listItem">
            <Report />
            <span className="itemText">Reports</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default sideBar;
