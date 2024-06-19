import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from './pages/HomePage';
import ContactMe from "./pages/ContactMe";
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import NotFound from './pages/NotFound';
import Loading from './pages/Loading';

const AppRouter = () => {  
  
  const ScrollToTop = () => {
    document.body.style.overflowX = "hidden";
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left:0,
        behavior: 'smooth',
      });
    }, [pathname]);
  };

  ScrollToTop();

  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => setLoading(false), 3400)
  }, [])

  if (loading) {
      return <Loading/>
  }

  return (
    <>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="contact" element={<ContactMe />} />
      <Route path="projects" element={<Projects />} />
      <Route path="aboutme" element={<AboutMe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}