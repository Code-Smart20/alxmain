
import './App.css';
import { Header } from './components';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Privacy from './components/privacy/Privacy';



function App() {
  return (
    <div className="app">
      <Header />

      <Home />
      <Footer />
      <Privacy/>

      
    </div>
  );
}

export default App;
