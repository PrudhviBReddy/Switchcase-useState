import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/homepage' element={<Homepage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
