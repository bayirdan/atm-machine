import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageHome from "./pages/Home/PageHome";
import PageLogin from "./pages/LoginRegister/PageLogin";
import PageRegister from "./pages/LoginRegister/PageRegister";
import PageTransaction from "./pages/Transaction/PageTransaction";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/register" element={<PageRegister />} />
          <Route path="transaction/withdraw" element={<PageTransaction />} />
          <Route path="transaction/deposit" element={<PageTransaction />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
