import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import GamePage from "./pages/gamePage/GamePage";
import { HomePage } from "./pages/homePage/HomePage";
import { OrderPage } from "./pages/orderPage/OrderPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app/:title" element={<GamePage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
