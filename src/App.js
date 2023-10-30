
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import Footer from './components/footer/Footer';
import Privacy from './components/privacy/Privacy';
import { About, Admissions, Blog, Home, Journey, News, Programmes, Women } from './pages';




function App() {
  return (
    <div className="app">
      <Header />

        <Routes>
          <Route path="/" element={<Home/> } exact />
        
    
          <Route path="/about" element={<About/> } />
        
        
          <Route path="/admissions" element={<Admissions/> } />
      


        <Route path="/journey" element={<Journey />} />
        
      
          <Route path="/women_&_tech" element={<Women/> } />
          
      
      
        
          <Route path="/blog" element={<Blog/> } />
        
       
        
          <Route path="/news" element={<News/> } />
        
        
        <Route path="/programmes" element={<Programmes />} />
        
        
        </Routes>
  
      <Privacy />
      <Footer/>

      
    </div>
  );
}

export default App;
