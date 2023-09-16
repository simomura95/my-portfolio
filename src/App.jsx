import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Resume from './pages/Resume'
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
      </BrowserRouter>
    </div>
  );
}

export default App;

