import './App.css';
import PaginaFeed from './components/PaginaFeed';
import PaginaPost from './components/PaginaPost';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import LinhaDoTempo from './components/LinhaDoTempo';
import ComponentePost from './components/ComponentePost'


function App() {






  return (
    <div className="App">
              
               <BrowserRouter>
               
               <Routes>
                    <Route exact path="/" element={<PaginaFeed />} ></Route>
                </Routes>
                <Routes>
                <Route path="/postar" element={<PaginaPost/>} ></Route>
                </Routes>

               </BrowserRouter>
    </div>
  );
}

export default App;
