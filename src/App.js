import React from 'react'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default App