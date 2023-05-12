import React from 'react'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFoundPage'
import Signup from './pages/Signup'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/signup' element={<Signup />}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default App