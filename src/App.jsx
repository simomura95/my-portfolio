import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
// import Contact from './pages/Contact'
import Career from './pages/Career'
import Portfolio from './pages/Portfolio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

function App() {
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
          <Routes>
            <Route
              path="/" 
              element={addNavbarFooter(Home)} 
            />
            <Route 
              path="/career" 
              element={addNavbarFooter(Career)} 
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
      </BrowserRouter>
    </div>
  );
}

export default App;

