import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import VariablesPage from './pages/VariablesPage/VariablesPage'
import VariablesDetailsPage from './pages/VariablesDetailsPage/VariablesDetailsPage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Layout />}>
            <Route index element={<HomePage />} />
            <Route path='variables' element={<VariablesPage />} />
            <Route path='variables/:variableId' element={<VariablesDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
