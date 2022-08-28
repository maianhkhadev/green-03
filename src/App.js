import { Routes, Route, Link } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Dashboard from './pages/Dashboard'
import Organizations from './pages/Organizations'
import Users from './pages/Users'
import UserCreate from './pages/UserCreate'
import UserView from './pages/UserView'
import UserEdit from './pages/UserEdit'

function App () {
  return (
    <div>
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
        <div className='container'>
          <Link to='/'>
            <span className='fs-4'>Green Academy</span>
          </Link>

          <Link to='/organizations'>
            <span>Organizations</span>
          </Link>

          <Link to='/users'>
            <span>Users</span>
          </Link>
        </div>
      </header>

      <main>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/organizations' element={<Organizations />} />
            <Route path='/users' element={<Users />} />
            <Route path='/user/create' element={<UserCreate />} />
            <Route path='/user/:id' element={<UserView />} />
            <Route path='/user/:id/edit' element={<UserEdit />} />
          </Routes>
        </div>
      </main>

      <footer></footer>
    </div>
  )
}

export default App
