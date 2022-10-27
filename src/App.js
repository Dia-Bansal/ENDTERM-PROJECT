import './App.css';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import Subscription from './Subscription';
import Match from './Match'
import Gateway from './Gateway';
import Girlsprofile from './Girlsprofile'
import Boysprofile from './Boysprofile';
import Profile from './Profile';
import Profile1 from './Profile1';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";
function App() {
  return (
    <>
  <Router>
     <Navbar />
     <Routes>
     <Route exact path='/' element={<Register />}/>
     <Route exact path="/Login" element={<Login/>}/>
     <Route exact path="/Subscription" element={<Subscription/>}/>
     <Route exact path='/Match' element={<Match/>}/>
     <Route exact path='/Gateway' element={<Gateway/>}/>
     <Route exact path='/Girlsprofile' element={<Girlsprofile/>}/>
     <Route exact path='/Boysprofile' element={<Boysprofile/>}/>
     <Route exact path='/Profile' element={<Profile/>}/>
     <Route exact path='/Profile1' element={<Profile1/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
