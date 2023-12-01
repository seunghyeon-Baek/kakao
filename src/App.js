import logo from './logo.svg';
import './assets/css/common.scss'
import './App.css';
import Header from './Components/Header/Header'
import MainTop from './Components/Main/MainTop';
import MainNews from './Components/Main/MainNews';

function App() {
  return (
      <div className=''>
        <Header/>
        <MainTop />
        <MainNews/>
      </div>


      

  );
}

export default App;
