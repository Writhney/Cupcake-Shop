import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import {BrowserRouter as Router,
        Routes,
        Route } from 'react-router-dom';

import Cupcakes from './pages/Cupcakes';
import Nosotros from './pages/Nosotros';

const credits = {
  author: 'Writhney Lazo',
  currentYear: new Date().getFullYear()
};

function App() {
  return (
    
    <Router>
      <Header/>
      <main className='main'>
        <Routes>
          
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/cupcakes" element={<Cupcakes/>}/>

          
        </Routes>
        
        <Footer
      credits = {credits}/>
      </main>
      
    </Router>
    
  );
}

export default App;
