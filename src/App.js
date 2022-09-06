import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useEffect } from "react";
//import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
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
  }, [dispatch, user]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
