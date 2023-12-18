// import logo from './logo.svg';
import React from "react"
import CreateUser from "./Components/User/CreateUser";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import DisplayUser from "./Components/displayUser/DisplayUser";
import UpdateUsers from "./Components/Update/UpdateUsers";

function App() {
  return (
   

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateUser/>}/>
      <Route path="/users" element={<DisplayUser/>}/>
      <Route path="/update" element={<UpdateUsers/>}/>

    </Routes>
    </BrowserRouter>
    
        //  <div>
        //   <h1>this is to confirm</h1>
        //  </div>
  );
}

export default App;
