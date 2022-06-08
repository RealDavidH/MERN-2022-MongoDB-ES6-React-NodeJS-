import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Main from './components/Main/Main';

import Header from './components/Header';
import ManaMain from './components/Manage/ManaMain';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Manage/:num' element={<ManaMain/>}/>
      </Routes>
    </div>
  );
}

export default App;
