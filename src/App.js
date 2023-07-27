import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TasksPage from './pages/TasksPage'
import FormikPage from './pages/FormikPage'
import MenuPage from './pages/MenuPage'
import { URLs } from './routes/routes'

function App() {
  const taskspage = URLs.homepage + URLs.tasksPage + '/*'
  const formikpage = URLs.homepage + URLs.formikPage

  return (
    <Router>
      <Routes>
        <Route path={URLs.homepage} element={<MenuPage />} />
        <Route path={taskspage} element={<TasksPage />} />
        <Route path={formikpage} element={<FormikPage />} />
      </Routes>
    </Router>
  )
}

export default App
