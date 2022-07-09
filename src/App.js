import Home from "./components/Routes/Home/Home.component";
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Routes/Navigation/Navbar.component";
import AuthenticationPage from "./components/Routes/Authentication-page/Authentication-page.component";

const Test = () => {
  return (
    <>
      <h1 
        style={
          {
            marginLeft: '20px', 
            marginRight:' 20px',
            backgroundColor: 'red', 
            padding: '20px', color: 'white', 
            borderRadius: '5px'
          }
        }>Test of the router system this will be the shop component</h1>
    </>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />} >
        <Route index element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/authentication' element={<AuthenticationPage />} />
      </Route>
    </Routes>
  );
};

export default App;
