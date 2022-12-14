import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
import Fav from './components/Fav'
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<><Banner/><MovieList/></>}/>
        <Route path="/favourites" element={<Fav/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
