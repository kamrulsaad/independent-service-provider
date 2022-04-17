import { Route, Routes } from "react-router-dom";
import CheckOut from "./CheckOut/CheckOut";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Loading from "./Pages/Shared/Loading/Loading";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}  ></Route>
        <Route path="/home" element={<Home></Home>}  ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
