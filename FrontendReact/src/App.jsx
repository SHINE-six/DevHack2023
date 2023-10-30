import React from 'react';
import NavBar from './components/NavBar';
import Page from './page/index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='h-screen flex flex-col'>
        <Routes>
          <Route path='/' element={<Page.LoginScreen />} />
          <Route path='/Main' element={<Page.MainBlogs/>} />
          <Route path='/Search' element={<Page.AllInOneSearch />} />
          <Route path='/Chat' element={<Page.ChatAi />} />
          <Route path="/Medical" element={<Page.medicalInfo/>}/>
          <Route path="/Profile" element={<Page.ProfileScreen/>}/>
          <Route path="/Edit" element={<Page.EditProfile/>}/>
        </Routes>
        <div className='w-screen h-20 bottom-0'>
          <NavBar/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
