// cd client
// npm run dev
import { useState } from "react";
 
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
 
function App() {
   
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [page, setPage] = useState("home");
   
    if (!loggedIn) {
     
      if (showLogin) {
          return (
          <Login
          setLoggedIn={setLoggedIn}
          goToRegister={() => setShowLogin(false)}
          />
      );
    }
     
      return (
        <Register
        goToLogin={() => setShowLogin(true)}
      />
    );
  }
   
  if (page === "calendar") {
    return (
    <Calendar
    setPage={setPage}
    />
    );
  }
   
    return (
    <Home
    setPage={setPage}
    setLoggedIn={setLoggedIn}
    />
  );
}
 
export default App;