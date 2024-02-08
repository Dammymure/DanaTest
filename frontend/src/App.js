import './App.css';
import CreateUser from './Pages/CreateUser';
import Home from './Pages/Home';
import Login from './Pages/Login';
import CarDisplay from './Pages/CarDisplay';
import CreateCars from './Pages/CreateCars';
import DisplayData from './components/DisplayData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStateContext } from './context/ContextProvider'


function App() {
  const { token, setToken } = useStateContext()
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<DisplayData/>}/>
      <Route path="/createuser" element={<CreateUser/>}/>
      <Route path="/login" element={<Login/>}/>

      <Route path="/cars" element={<CarDisplay />} /> 
      <Route path='/createcars' element={<CreateCars/>}/>
      
      
        {/* <Routes/> */}

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
