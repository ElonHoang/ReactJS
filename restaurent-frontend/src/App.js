import logo from './logo.svg';
import './App.css';
import ClientHeader from './components/Layout/Client/Header';
import ClientContent from './components/Layout/Client/Contents';
import ClientFooter from './components/Layout/Client/Footer';

function App() {
  return (
    <div className="App">
      
     <ClientHeader/>
     <ClientContent/>
     <ClientFooter/>

    </div>
  );
}

export default App;
