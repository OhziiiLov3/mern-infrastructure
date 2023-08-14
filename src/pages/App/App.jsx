import {useState} from 'react';

import './App.css'
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
// import {OrderHistoryPage} from '../OrderHistoryPage';

function App() {
 const [user, setUser] = useState(null);

  return (
    <main className='App'>
      {user ? 
      <NewOrderPage/>
      :
      <AuthPage/>
      }

    </main>
  )
}

export default App