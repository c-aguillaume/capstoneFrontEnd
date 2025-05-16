import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header'






export default function App(){
  return (
  <>
  <Header />
  <Routes>
    <Route path='/' element={<HomePage />} />
  </Routes>
  </>
  )
}