import Dashboard from './pages/Dashboard';
import Stats from './pages/Stats';
import User from './pages/User';
import TransactionPage from './pages/TransactionPage';
import Airtime from './pages/Airtime';
import Electricity from './pages/Electricity';
import Login from './components/Login';
import{BrowserRouter, Routes, Route} from 'react-router'


function App() {

  return (
    <>
      <div>
      <BrowserRouter>
      <Routes>
        <Route path ='/login' element={<Login />}></Route>
        <Route path ='/dashboard' element={<Dashboard />}></Route>
        <Route path ='/stats' element={<Stats />}></Route>
        <Route path ='/users' element={<User />}></Route>
        <Route path ='/transactions' element={<TransactionPage />}></Route>
        <Route path ='/electricity' element={<Electricity />}></Route>
        <Route path ='/airtime' element={<Airtime />}></Route>
      </Routes>
      </BrowserRouter>
      </div>
  
    </>
  )
}

export default App
