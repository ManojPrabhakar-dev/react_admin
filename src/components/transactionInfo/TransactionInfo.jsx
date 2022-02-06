import "./transactionInfo.css";

const TransactionInfo = ({ name, imgSrc, date, amount, status }) => {
  return (
    <>
      <div className="transactionInfoContainer">
        <div className="customerPicWrapper">
          <img className="customerPic" src={imgSrc} alt="userProfilePic" />
          <span className="customerName">{name}</span>
        </div>
        <span className="transactionDate">{date}</span>
        <span className="transactionAmount">&#8377;{amount}</span>
        <div className="transactionStatus">
          <span
            className={`statusText ${
              status === "Approved"
                ? "approved"
                : status === "Declined"
                ? "declined"
                : "pending"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
    </>
  );
};

export default TransactionInfo;
