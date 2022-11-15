//import Navbar from './components/Navbar';
import { Login } from './components/LoginView/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="landing-page">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' exact/>
        </Routes>
      </Router>
      <br></br>
      <Login/>
    </div>
  );
}

export default App;
