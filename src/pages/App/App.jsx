import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from '../../components/NavBar'
import HomePage from '../HomePage/HomePage'

function App() {
  const [user, setUser] = useState(null)


  return (
    <main className="App">
      {user ? (
        <>
        <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/orders/new" element={<NewOrderPage />}></Route>
            <Route path="/orders" element={<OrderHistoryPage />}></Route>
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

export default App
