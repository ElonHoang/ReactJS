import logo from './logo.svg';
import './App.css';
import ClientHeader from './components/Layout/Client/Header';
import ClientContent from './components/Layout/Client/Contents';
import ClientFooter from './components/Layout/Client/Footer';
import AdminFooter from './components/Layout/Admin/Footer';
import AdminHeader from './components/Layout/Admin/Header';
import AdminSideBar from './components/Layout/Admin/SideBar';
import AdminContent from './components/Layout/Admin/Contents';

function App() {
  return (
    <div className="App">
      
     {/* <ClientHeader/>
     <ClientContent/>
     <ClientFooter/> */}
     <AdminHeader/>
     <AdminSideBar/>
     <AdminContent/>
     <AdminFooter/>

    </div>
  );
}

export default App;
