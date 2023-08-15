import {useState} from 'react';
import {Routes, Route} from 'react-router-dom'

import './App.css'
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar';
import SignUpForm from '../../components/SignUpForm';
import HomePage from '../HomePage/HomePage';


function App() {
 const [user, setUser] = useState(null);



  return (
    <main className="App">
      {user ? (
        <>
        <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage/>}> </Route>
            <Route path="/orders/new" element={<NewOrderPage />}></Route>
            <Route path="/orders" element={<OrderHistoryPage />}></Route>
          </Routes>
        </>
      ) : (
        <>
        <AuthPage />
        <SignUpForm/>
        </>
      )}
    </main>
  );
}

export default App
