import './App.css';
import PaginaFeed from './components/common/PaginaFeed/PaginaFeed';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import { PaginaPostar } from './components/pages/PaginaPostar/PaginaPostar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<PaginaFeed/>}></Route>
          <Route exact path ="/post" element={<PaginaPostar/>}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
