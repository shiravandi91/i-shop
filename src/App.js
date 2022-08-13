import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomePage  from './components/HomePage';
import Login from './components/Login';
import SingleProduct from './components/SingleProduct';
import NotFound from './components/NotFound';
function App() {




  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Product/:productId" element={<SingleProduct />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
