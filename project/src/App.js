import './App.css';
import Navbar from './components/Navbar';
import SignIn from './components/Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignUp from './components/Signup';
import Home from './components/Home'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route  path='Home' element={< Home />}></Route>
      <Route  path='Register' element={< SignUp />}></Route>
      <Route  path='SignIn' element={< SignIn />}></Route>
      </Routes>
  
    </div>
    </Router>
  );
}

export default App;
