import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
    
  );
}

export default App;
