import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import { Blog } from "./Pages/Blogs/Blogs";
import Contact from "./Pages/CheckOut/CheckOut";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}  ></Route>
        <Route path="/home" element={<Home></Home>}  ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="/contact" element={
          <RequireAuth>
            <Contact></Contact>
          </RequireAuth>}>
        </Route>
        <Route path="/contact/:serviceId" element={
          <RequireAuth>
            <Contact></Contact>
          </RequireAuth>}>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
