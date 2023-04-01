
import './App.css';
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignupPage';
import Homepage from './Pages/Homepage';
import'./input.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from './Pages/ProfilePage';
import PostPage from './Pages/PostPage';

function App() {
  return (
    <div >

    
  <Router>
    <main>
      <Routes>
      <Route path="/" element={<LoginPage></LoginPage>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/home" element={<Homepage/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/post" element={<PostPage/>} />
      </Routes>
    </main>
  </Router>
    </div>
    
  );
}

export default App;
