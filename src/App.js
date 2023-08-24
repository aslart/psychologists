import './App.css';
import { BrowserRouter, Routes, Route, Layout } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Specialists from './pages/specialists/Specialists';
import Specialist from './pages/specialist/Specialist';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/psychologists" element={<Specialists />} />
          <Route path="/psychologists/:id" element={<Specialist />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
