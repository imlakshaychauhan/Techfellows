import './App.css';
import  { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Authenticate from './pages/authenticate/Authenticate';
import Activate from './pages/activate/Activate';
import Rooms from './pages/Rooms/Rooms';
const isAuth = false;
const user = {
  activated: false
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        {/* Guest Area Routes */}
        <Route path="/" element={ isAuth ? <Navigate to="/rooms" /> : <Home /> } />
        <Route path="/authenticate" element={ isAuth ? <Navigate to="/rooms" /> : <Authenticate /> } />
        {/* Semi Protected Routes */}
        <Route path="/activate" element={ !isAuth ? <Navigate to="/authenticate" /> : (isAuth && !user.activated ? <Activate /> : <Navigate to="/rooms" />) } />
        <Route path="/rooms" element={ !isAuth ? <Navigate to="/" /> : (isAuth && !user.activated ? <Navigate to="/activate" /> : <Rooms />)} />
        <Route path="*" element={ <Home /> } />
      </Routes>
    </Router>
  );
};

export default App;