import "./styleTransaction.scss";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Header from "../../components/Header/Header";

const PageTransaction = () => {
  const { pathname } = useLocation();
  const [transaction, setTransaction] = useState("");
  useEffect(() => {
    const location = pathname.split("/").reverse()[0];
    setTransaction(location);
  }, [pathname]);
  console.log(transaction);
  return (
    <>
      <Header />
      <div className="transaction-page">
        <div className="form">
          <h1>{transaction && transaction}</h1>
          <form>
            <input type="number" placeholder="total..." />
            <input type="submit" value="Confirm" />
            <p className="message">Success!</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default PageTransaction;
