import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoRoute from './components/NoRoute/NoRoute';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/customer-reviews" element={<CustomerReviews />} />
          <Route path="*" element={<NoRoute />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

// #1E90C2
