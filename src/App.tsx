import React from 'react';
import './App.css';
import {Outlet} from "react-router";
import HeaderComponent from "./components/HeaderComponent";

const App = () => {
  return (
    <div>
      <HeaderComponent/>
      <Outlet/>
    </div>
  );
}

export default App;
