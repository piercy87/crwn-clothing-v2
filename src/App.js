import Home from "./components/Routes/Home/Home.component";
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Routes/Navigation/Navbar.component";
import AuthenticationPage from "./components/Routes/Authentication-page/Authentication-page.component";
import Shop from "./components/Routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />} >
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/authentication' element={<AuthenticationPage />} />
      </Route>
    </Routes>
  );
};

export default App;
