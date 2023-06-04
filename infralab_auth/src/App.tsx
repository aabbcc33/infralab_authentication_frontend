import Adminpage from './pages/AdminPage';
import AuthPage from './pages/AuthPage';
import CertificatePage from './pages/CertificatePage';
import FrontPage from './pages/FrontPage';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import AccessDeny from './pages/AccessDeny';
import { useAuth } from './components/context/AuthProvider';
import NavBar from './components/navbar/NavBar';
import NotAuthNavBar from './components/navbar/NotAuthNavBar';

function App() {

  const { auth } = useAuth();
  
  return (
    <div className="App">
      <Router>
      {auth?.email  ? <NavBar/> : <NotAuthNavBar/>}
        <Routes>
          <Route path="/" element={<FrontPage/>} />
          <Route path="/admin" element={<Adminpage/>} />
          <Route path="/certificates" element={<CertificatePage/>} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/error" element={<AccessDeny />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;