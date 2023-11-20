import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import UserDashBoard from "./Components/UserDashBoard";

const App = () => {


  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Routes >
          <Route path="/" element={<UserDashBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};


export default App;
