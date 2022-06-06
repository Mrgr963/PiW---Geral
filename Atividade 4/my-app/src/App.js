import './App.css';
import PaginaFeed from './components/common/PaginaFeed/PaginaFeed';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<PaginaFeed />}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
