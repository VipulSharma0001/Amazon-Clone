import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import './App.css';

const promise = loadStripe('pk_test_51PUOLcHIh9hCVSSEPPTjc9rzexGoDvZPd8ZIt7q0HxMDn1XKgcA203L9131hvxA2UlaKXOVdyTWgkuii7go2KLLC00T8oGRZ8Y');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>', authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<><Header /><Orders/></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/payment" element={<><Header /><Elements stripe={promise}><Payment /></Elements></>} />
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
