
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <div>
         <Navbar/>
         <Routes>
         <Route exact  path="/" element={ <News key="general"  pageSize={9} country="in" category="general"/>} />
         <Route exact path="/technology" element={ <News key = "tec" pageSize={9} country="in" category="technology"/>} />
         <Route exact path="/sports" element={ <News key = "spo" pageSize={9} country="in" category="sports"/>} />
         <Route exact path="/science" element={<News key = "science" pageSize={9} country="in" category="science"/>} />
         <Route exact path="/health" element={ <News key = "heal" pageSize={9} country="in" category="health"/>} />
         <Route exact path="/business" element={ <News key = "bu" pageSize={9} country="in" category="business"/>} />
         <Route exact path="/entertainment" element={ <News  key = "en" pageSize={9} country="in" category="entertainment"/>} />

         </Routes>
      
      </div>
      </BrowserRouter>
    )
  }
}