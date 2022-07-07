import Home from "./components/Routes/Home/Home.component";
import { Routes, Route, Outlet, Link} from "react-router-dom"
import Navbar from "./components/Routes/Navigation/Navbar.component";
import SignIn from "./components/Routes/sign-in/sign-in.component";

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
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
