import "./styleHome.scss";

import Header from "../../components/Header/Header";

const PageHome = () => {
  return (
    <>
      <Header />
      <div className="home-page">
        <h1>Dalyar Akbaş</h1>
        <div className="info">
          <h2>
            Mail: <span>dalyar@gmail.com</span>
          </h2>
          <h2>
            Balance: <span>$5000</span>
          </h2>
        </div>
        <div className="history">
          <h2 style={{ display: "none" }}>Account History</h2>
          <h2>No Account History Yet !</h2>
          <ul>
            <li>+500$ - date: 21.01.2022</li>
            <li>-250$ - date: 14.01.2022</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PageHome;
