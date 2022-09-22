import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componets/About/About';
import Apponitments from './Componets/Apponitments/Apponitments';
import Allusers from './Componets/Dashborad/Allusers';
import Dashborad from './Componets/Dashborad/Dashborad';
import MyAppointment from './Componets/Dashborad/MyAppointment';
import MyHistory from './Componets/Dashborad/MyHistory';
import MyReview from './Componets/Dashborad/MyReview';
import AddDoctor from './Componets/Dashborad/AddDoctor';
import Contact from './Componets/Home/Contact/Contact';
import Home from './Componets/Home/Home/Home';
import Login from './Componets/Login/Login';
import SingUp from './Componets/Login/Singup/SingUp';
import RequireAuth from './Componets/RequireAuth/RequireAuth';
import RequireAdmit from './Componets/RequireAuth/RequireAdmit';
import Review from './Componets/Review/Review';
import Header from './Componets/Shered/Header/Header';
import ManegeDoctor from './Componets/Dashborad/ManegeDoctor';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Apponitments></Apponitments>
          </RequireAuth>
        }></Route>
        <Route path='/dashborad' element={
          <RequireAuth>
            <Dashborad></Dashborad>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='myhistory' element={<MyHistory></MyHistory>}></Route>
          <Route path='allusers' element={<RequireAdmit>
            <Allusers></Allusers>
            </RequireAdmit>}></Route>
          <Route path='adddoctor' element={<RequireAdmit>
            <AddDoctor></AddDoctor>
            </RequireAdmit>}></Route>
          <Route path='manegedoctor' element={<RequireAdmit>
            <ManegeDoctor></ManegeDoctor>
            </RequireAdmit>}></Route>
        </Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
