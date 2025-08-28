
import './App.css'
import LoginPage from './pages/login'
import { Routes, Route } from "react-router-dom";
import LibraryHome from './pages/mainHome';
import LibraryDashboard from './pages/dashboard';
import BookManagement from './pages/book';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route 
        path="home" element={<LibraryHome/>}>
        <Route path="dashboard" element={<LibraryDashboard/>} /> 
        <Route
            path="books"
            element={
              
                <BookManagement />
              
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
