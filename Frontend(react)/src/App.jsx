import React from 'react';
import NavBar from './components/NavBar';
import Page from './page/index.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <div className='h-screen bg-green-400 flex flex-col flex-1'>
        
        <Routes>
          <Route path='/' element={<Page.MainBlogs />}/>
          <Route path='/Search' element={<Page.AllInOneSearch />}/>
          <Route path='/Chat' element={<Page.ChatAi />}/>
        </Routes>
        <div className= 'w-screen h-20 bottom-0'>
          <NavBar/>
        </div>
        
      </div>
    </BrowserRouter>
  )

}

export default App;