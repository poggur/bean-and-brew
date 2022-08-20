import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/navbar';
import CoffeeShop from './pages/Coffee_Shops';
import Lessons from './pages/Baking_Lessons';
import Takeaway from './pages/Baking_Takeaway';

function App() {
  return (


    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/coffee" element={<CoffeeShop/>}/>
          <Route path="/lessons" element={<Lessons/>}/>
          <Route path="/takeaway" element={<Takeaway/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
