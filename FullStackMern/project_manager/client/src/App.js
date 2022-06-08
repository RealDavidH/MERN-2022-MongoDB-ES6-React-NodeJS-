import {Route, Routes} from 'react-router-dom'
import React from 'react'
import Form from './components/Form'
import Display from './components/view/Display';
import Product from './components/view/Product';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<><Form /><Display /> </> } />
        <Route path='/product/:id' element={<Product /> }/>
        <Route path='/edit/:id' element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
