import Adminpage from './pages/AdminPage';
import AuthenticatedPage from './pages/AuthenticatedPage';
import CertificatePage from './pages/CertificatePage';
import FrontPage from './pages/FrontPage';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage/>} />
          <Route path="/admin" element={<Adminpage/>} />
          <Route path="/certificates" element={<CertificatePage/>} />
        </Routes>
      </Router>
    {/* <AuthenticatedPage/>  */}
    </div>
  );
}

export default App;