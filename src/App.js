import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Sidenav1 from "./Component/Sidenav1/Sidenav1";
import Sidenav2 from "./Component/Sidenav2/Sidenav2";
import MainContent from "./Component/MainContent/MainContent";
import './App.css';

function App() {
  return (
    <div className="App d-flex row">
      <Header/>

      <Sidenav1/>
      <MainContent/>
      <Sidenav2/>

      <Footer/>
    </div>
  );
}

export default App;
