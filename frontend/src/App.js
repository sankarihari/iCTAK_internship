import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Userdashboard from './pages/Userdashboard';
import Booking from './pages/Booking';
import Moviedetails from './pages/Moviedetails';
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
        <Route path='/userdashboard' element={<Userdashboard/>}/>
        <Route path='/booktickets' element={<Booking/>}/>
        <Route path='/moviedetails' element={<Moviedetails/>}/>
        <Route path='/admindashboard' element={<Admindashboard/>}/>
        <Route path='/adminaddform' element={<Adminaddform method="post" data={{ title: '', img_url: '', category: '', language: '', cast: '', content: '', ticketrate: '', seats: '' }}/>}/>
        <Route path='/addreview' element={<Addreview/>}/>
        <Route path='*' element={<div>Page not found</div>}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
