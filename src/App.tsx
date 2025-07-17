import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="/*" element={<NotFound404 />} />*/}
          </Routes>
      </main>
      <Footer />
    </div>
  );
}
