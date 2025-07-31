import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchForm } from './components/SearchForm';
import { InfoPelicula } from './components/InfoPelicula';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchForm />} />
        <Route path="/movie/:id" element={<InfoPelicula />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;