import React, { useState, createContext } from 'react';
import NavBar from "./components/NavBar";
import Form from './components/Form';
import { Wrapper } from "./context/WrapperContext"

const MyContext = React.createContext();

function App() {
  const [name, setName] = useState('')

  return (
    <div className="text-center mt-2">
      <Wrapper.Provider value={{name, setName}}>
        <NavBar />
        <Form />
      </Wrapper.Provider >
    </div>
  );
}

export default App;
