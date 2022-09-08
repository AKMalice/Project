import './App.css';
import Navbar from './components/Navbar';
import SignIn from './components/Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignUp from './components/Signup';
import Car from './components/Carousel'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Car/>
      <Routes>
      <Route  path='Register' element={< SignUp />}></Route>
      <Route  path='SignIn' element={< SignIn />}></Route>
      </Routes>
  
    </div>
    </Router>
  );
}

export default App;
