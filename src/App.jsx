import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

// pages & components
import Home from './pages/Home'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

function App() {
  function Wrapper ({children}) { // to open new pages on top instantly (behavior: "smooth" shows scrolling animation)
    const location = useLocation();
    useEffect(() => {
      document.documentElement.scroll({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, [location.pathname]);
    return children
  } 

  function addNavbarFooter(Component) {
    return(
      <>
        <Navbar />
        <Component />
        <Footer />
      </>
    )
  }

  return (
    <div className="App d-flex flex-column pt-5">
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route
              path="/" 
              element={addNavbarFooter(Home)} 
            />
            <Route 
              path="/resume" 
              element={addNavbarFooter(Resume)} 
            />
            <Route 
              path="/portfolio" 
              element={addNavbarFooter(Portfolio)} 
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;