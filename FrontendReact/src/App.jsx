import React from 'react';
import Page from './page/index.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from './page/LoginScreen/LoginScreen.jsx';


const App = () => {

  return (
    
    <BrowserRouter>
            <Routes>
              <Route path='/' element={<Page.LoginScreen/>}/>
              <Route path='/Main' element={<Page.MainBlogs/>}/>
              <Route path='/Search' element={<Page.AllInOneSearch />}/>
              <Route path='/Chat' element={<Page.ChatAi />}/>
            </Routes>
    </BrowserRouter>
  )

}

export default App;