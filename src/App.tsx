import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home'; // صفحتك الرئيسية

import DownloadPage from './combonent/Nav_Links/linkDownlod/linkDownlod';
import LinkCapes from './combonent/Nav_Links/linkCapes/linkCapes';

import Header from './combonent/Star.Header/Header';
import Footer from './combonent/end.footer/footer';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/Capes" element={<LinkCapes />} />
      </Routes>
      <Footer />
    </Router>
  );
}