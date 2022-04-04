import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import License from './components/About/License';
import Privacy from './components/About/Privacy';
import TermsOfUse from './components/About/TermsOfUse';
import Blogs from './components/Blogs/Blogs';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
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
          <Route path="/reviews" element={<CustomerReviews />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />}>
            <Route index element={<TermsOfUse />} />
            <Route path="terms-and-condition" element={<TermsOfUse />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="license" element={<License />} />
          </Route>
          <Route path="*" element={<NoRoute />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

// #1E90C2
