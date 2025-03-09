import { Routes, Route } from 'react-router-dom'
import './App.css'
import MovieList from './features/movie-list/containers/MovieList'
import NavBar from './shared/components/NavBar'

function App() {
  
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie-list" element={<MovieList />} />
          <Route path="favorites" element={<MovieList />} />
        </Routes>
      </main>
    </>
  )
}

export default App
