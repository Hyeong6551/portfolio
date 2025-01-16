import './App.css';
import MyMain from './components/MyMain';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<MyMain/>}/>
          <Route path='*' element={
            <div style={{color:"red", fontWeight:"bold", marginTop:"4%", fontSize:"44px"}}>존재하지 않은 페이지입니다.</div>
          }>

          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
