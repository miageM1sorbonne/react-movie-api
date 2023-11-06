import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TMDbLayout from './components/TMDbLayout/TMDbLayout';
import WatchLater from './components/WatchLater/WatchLater';

function App() {
 return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="" element={<TMDbLayout />} /> 
          <Route path="/WatchLater" element={<WatchLater />} />
        </Routes>
      </BrowserRouter>
    </div>
 );
}

export default App;