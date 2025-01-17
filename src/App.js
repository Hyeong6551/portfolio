import './App.css';
import MyMain from './components/MyMain';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route, } from 'react-router-dom';
import BList from './pages/BList';
import BWrite from './pages/BWrite';
import BDetail from './pages/BDetail';
import Outer from './components/Outer';
import Error from './pages/Error';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container my5">
        <Routes>
          <Route path='/' element={<MyMain/>}/>
          <Route path='/board' element={<Outer/>}>
            <Route path='list' element={<BList/>} />
            <Route path='write' element={<BWrite/>} />
            <Route path='detail/:id' element={<BDetail/>} />
          </Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
