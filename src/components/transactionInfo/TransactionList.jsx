import React from "react";
import "./transactionList.css";

const TransactionList = () => {
  return (
    <div className="transactionListContainer cardShawdow">
      <h3 className="transactionTitle">Latest Transaction</h3>
      <table className="tableContainer">
        <tr className="tRow">
          <th className="tHeading">Customer</th>
          <th className="tHeading">Date</th>
          <th className="tHeading">Amount</th>
          <th className="tHeading">Status</th>
        </tr>
        <tr className="tRow">
          <td className="customerPicWrapper">
            <img
              className="customerPic"
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="userProfilePic"
            />
            <span className="customerName">Manoj Prabhakar</span>
          </td>
          <td className="tdDate">2 Jun 2021</td>
          <td className="tdAmount">&#8377;2400</td>
          <td className="tdStatus">
            <span className={`statusText approved`}>Approved</span>
          </td>
        </tr>
        <tr className="tRow">
          <td className="customerPicWrapper">
            <img
              className="customerPic"
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="userProfilePic"
            />
            <span className="customerName">Rajesh</span>
          </td>
          <td className="tdDate">2 Jun 2021</td>
          <td className="tdAmount">&#8377;3500</td>
          <td className="tdStatus">
            <span className={`statusText pending`}>Pending</span>
          </td>
        </tr>
        <tr className="tRow">
          <td className="customerPicWrapper">
            <img
              className="customerPic"
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="userProfilePic"
            />
            <span className="customerName">Nagaraj</span>
          </td>
          <td className="tdDate">2 Jun 2021</td>
          <td className="tdAmount">&#8377;1300</td>
          <td className="tdStatus">
            <span className={`statusText declined`}>Declined</span>
          </td>
        </tr>
        <tr className="tRow">
          <td className="customerPicWrapper">
            <img
              className="customerPic"
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="userProfilePic"
            />
            <span className="customerName">Daniel</span>
          </td>
          <td className="tdDate">2 Jun 2021</td>
          <td className="tdAmount">&#8377;1100</td>
          <td className="tdStatus">
            <span className={`statusText approved`}>Approved</span>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TransactionList;
