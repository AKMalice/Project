import './App.css';
import Navbar from './components/Navbar';
import SignIn from './components/Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignUp from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import Analytics from './components/Analytics';
import Mailing from './components/Mailing';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();
  console.log("token=",token)
  return (
    <Router>
    <div className="App">
      <Navbar token={token}/>
      <Routes>
      <Route  path='Home' element={< Home />}></Route>
      <Route  path='Register' element={< SignUp setToken={setToken} token={token} />}></Route>
      <Route  path='SignIn' element={token?<Profile token={token}/> :< SignIn setToken={setToken} token={token}/>}></Route>
      <Route  path='Analytics' element={<Analytics/> }></Route>
      <Route  path='Mailing' element={<Mailing/> }></Route>
      </Routes>

  
    </div>
    </Router>
  );
}

export default App;
