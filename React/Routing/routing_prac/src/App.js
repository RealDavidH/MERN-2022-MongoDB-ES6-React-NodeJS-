import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  const Home = () => {
    return (
      <div>
        <p>Home</p>
      </div>
    )
  }

  return (
    <BrowserRouter>


      <Routes>
        <Route path="/Home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;