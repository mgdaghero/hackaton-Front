import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from 'pages/home/Home'

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp
