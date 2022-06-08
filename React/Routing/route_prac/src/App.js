import { Route, Routes, Navigate, useParams } from 'react-router-dom'


function App() {

  const Home = () => {
    return (
      <div className='text-center bg-light text-dark mt-4'>
        <p className='fs-1'>Home</p>
      </div>
    )
  }
  const DisplayColors = () => {
    const { color } = useParams();
    const { bgcolor } = useParams();
    return (
      <div className='text-center text-dark mt-4' style={{ backgroundColor: `${bgcolor}` }}>
        <p className='fs-1' style={{ color: `${color}` }}>Hello</p>
      </div>
    )
  }
  const DisplayNumber = () => {
    const { num } = useParams();
    return (
      <div className='text-center bg-light text-dark mt-4'>
        <p className='fs-1'>{num}</p>
      </div>
    )
  }

  const DisplayAll = () => {
    const { color } = useParams();
    const { bgcolor } = useParams();
    const { word } = useParams();
    return (
      <div className='text-center text-dark mt-4' style={{ backgroundColor: `${bgcolor}` }}>
        <p className='fs-1' style={{ color: `${color}` }}>{word}</p>
      </div>
    )
  }


  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/:num" element={<DisplayNumber />} />
      <Route path="/:color/:bgcolor" element={<DisplayColors />} />
      <Route path="/:word/:color/:bgcolor" element={<DisplayAll />} />
    </Routes>
  );
}


export default App;