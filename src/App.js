import "./App.css";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import ReportCard from "./components/statisticsInfo/ReportCard";
import SalesChart from "./components/charts/SalesChart";
import NewMembersList from "./components/newUserInfo/NewMembersList";
import TransactionList from "./components/transactionInfo/TransactionInfo";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="contentWrapper">
        <SideBar />
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
            <div className="rightCardContainer cardShawdow">
              <span className="btmCardTitle">Latest transactions</span>
              <div className="transationHeadingWrapper">
                <span className="transationHeading customer">Customer</span>
                <span className="transationHeading date">Date</span>
                <span className="transationHeading amount">Amount</span>
                <span className="transationHeading status">Status</span>
              </div>
              <TransactionList
                name="Manoj Prabhakar"
                imgSrc="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                amount="2750"
                date="2 Jun 2021"
                status="Approved"
              />
              <TransactionList
                name="Rajesh"
                imgSrc="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                amount="1200"
                date="2 Jun 2021"
                status="Declined"
              />
              <TransactionList
                name="Suresh"
                imgSrc="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                amount="3200"
                date="2 Jun 2021"
                status="pending"
              />
              <TransactionList
                name="Nagaraj"
                imgSrc="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                amount="1750"
                date="2 Jun 2021"
                status="Approved"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
