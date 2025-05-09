import Dashboard from './pages/Dashboard';
import Stats from './pages/Stats';
import User from './pages/User';
import TransactionPage from './pages/TransactionPage';
import Airtime from './pages/Airtime';
import Electricity from './pages/Electricity';
import Login from './components/Login';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import UserDetails from './pages/UserDetails';
import Cable from './pages/Cable';
import Data from './pages/Data';
import Crypto from './pages/Crypto';
import GiftCard from './pages/GiftCard';
import CrowdFund from './pages/CrowdFund';
import Booking from './pages/Booking';
import Staff from './pages/Staff';


function App() {

  return (
    <>
      <div>
      <BrowserRouter>
      <Routes>
        <Route path ='' element={<Login />}></Route>
        <Route path ='/dashboard' element={<Dashboard />}></Route>
        <Route path ='/stats' element={<Stats />}></Route>
        <Route path ='/users' element={<User />}></Route>
        <Route path ='/transactions' element={<TransactionPage />}></Route>
        <Route path ='/electricity' element={<Electricity />}></Route>
        <Route path ='/airtime' element={<Airtime />}></Route>
        <Route path ='/user-details' element={<UserDetails />}></Route>
        <Route path ='/cable-tv' element={<Cable />}></Route>
        <Route path ='/data' element={<Data />}></Route>
        <Route path ='/crypto' element={<Crypto />}></Route>
        <Route path ='/gift-card' element={<GiftCard />}></Route>
        <Route path ='/crowd-funding' element={<CrowdFund />}></Route>
        <Route path ='/booking-ticketing' element={<Booking />}></Route>
        <Route path ='/staffs' element={<Staff />}></Route>
      </Routes>
      </BrowserRouter>
      </div>
  
    </>
  )
}

export default App
