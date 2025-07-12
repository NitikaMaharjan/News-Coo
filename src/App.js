import React, { useState } from 'react';
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import HomeFeed from './components/HomeFeed';
import News from './components/News';
import './App.css';

const App = () => {

  const [progress, setProgress] = useState(0);

  const updateProgress = (new_progress) => {
    setProgress(new_progress);
  }

  return (
    <BrowserRouter>
      <LoadingBar color="#245691" progress={progress}/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeFeed updateProgress={updateProgress}/>}/>
        <Route path='/characters' element={<News updateProgress={updateProgress} selectedType="Characters"/>}/>
        <Route path='/devil-fruits' element={<News updateProgress={updateProgress} selectedType="Devil Fruits"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
