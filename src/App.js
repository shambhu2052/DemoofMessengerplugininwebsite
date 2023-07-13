import logo from './logo.svg';
import './App.css';
import { Ref } from './components/Ref';
import Parent from './components/contexthook/Parent';
import ChildC from './components/contexthook/ChildC';
import Parent1 from './components/liftingstateup/Parent1';
import Form from './components/Form';
import Getmethod from './components/api/Getmethod';
import Postmethod from './components/api/Postmethod';
import Putmethod from './components/api/Putmethod';
import {Routes,Route} from "react-router-dom";
import Home from './components/reactrouterdom/Home';
import About from './components/reactrouterdom/About';
import Contact from './components/reactrouterdom/Contact';
import Navbar from './components/reactrouterdom/Navbar';
import Pagenotfound from './components/Pagenotfound';
import { useState } from 'react';
import Product from './components/reactrouterdom/Product';
import Feature from './components/reactrouterdom/Feature';
import Newproduct from './components/reactrouterdom/Newproduct';
import Userid from './components/reactrouterdom/Userid';
import Googlemap from './components/Googlemap';
import Directionmap from './components/Directionmap';
function App() {
  return (
    <div className="App">
    {/* <Ref/> */}
    {/* <Parent/>

    <ChildC/> */}
    {/* <Parent1/> */}
    {/* <Form/> */}
    {/* <Getmethod/> */}
    {/* <Postmethod/> */}
    {/* <Putmethod/> */}
    {/* <Navbar/>
    <Routes> */}
     
      {/* <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="/*" element={<Pagenotfound/>}/> */}
      {/* This is a nested routing */}
      {/* <Route path="product" element={<Product/>}> */}
        {/* this is a indexed routing */}
        {/* <Route index element={<Feature/>}/> */}
        {/* <Route path="./feature" element={<Feature/>}/>
        <Route path="./new" element={<Newproduct/>}/>
      </Route> */}
      {/* This is user parmas example */}
      {/* <Route path=":userid" element={<Userid/>}/> */}
    {/* </Routes> */}

 <Googlemap/> 
<Directionmap/>
    </div>
  );
}

export default App;
