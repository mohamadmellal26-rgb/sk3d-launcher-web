import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/HomePage/Home'; // صفحتك الرئيسية

import DownloadPage from '@/pages/DownlodPage/Page_Downlod';
import LinkCapes from '@pages/CapesPage/linkCapes';
import { CapeDetailsPage } from './pages/CapeDetails/CapeDetails';

import Header from '@components/Header/Header';
import Footer from '@components/footer/footer';

// تسجيل دخول
import LogIn from './components/Authentication/logIn';
import SignUp from './components/Authentication/SignUp';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/Capes" element={<LinkCapes />} />
        <Route path="/capes/:id" element={<CapeDetailsPage />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}