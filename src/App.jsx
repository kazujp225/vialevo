import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Company from './pages/Company';
import Job from './pages/Job';
import People from './pages/People';
import Recruit from './pages/Recruit';
import Entry from './pages/Entry';
import News from './pages/News';
import PagePlaceholder from './pages/Placeholder';
import ScrollToTop from './components/ScrollToTop'; // We'll create this helper

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Header />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/job" element={<Job />} />
            <Route path="/people" element={<People />} />
            <Route path="/news" element={<News />} />
            <Route path="/recruit" element={<Recruit />} />
            <Route path="/entry" element={<Entry />} />
            <Route path="*" element={<PagePlaceholder title="404 Not Found" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
