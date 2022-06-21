import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componets/About/About';
import Apponitments from './Componets/Apponitments/Apponitments';
import Contact from './Componets/Home/Contact/Contact';
import Home from './Componets/Home/Home/Home';
import Login from './Componets/Login/Login';
import Review from './Componets/Review/Review';
import Header from './Componets/Shered/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Apponitments></Apponitments>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
