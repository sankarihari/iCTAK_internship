import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Moviepage from './components/Moviepage';
import Cast from './components/Cast';
import Review from './components/Review';
import Userdashboard from './pages/Userdashboard';
import Booking from './pages/Booking';
import Moviedetails from './pages/Moviedetails';
import User from './pages/User';
import Admindashboard from './pages/Admindashboard';
import Adminaddform from './components/Adminaddform';
import Addreview from './components/Addreview';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/movies' element={<Moviepage/>}/>
        <Route path='/cast' element={<Cast/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/userdashboard' element={<Userdashboard/>}/>
        <Route path='/booktickets' element={<Booking/>}/>
        <Route path='/moviedetails' element={<Moviedetails/>}/>
        <Route path='/admindashboard' element={<Admindashboard/>}/>
        <Route path='/adminaddform' element={<Adminaddform/>}/>
        <Route path='/addreview' element={<Addreview/>}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
