import React from 'react';
import {Route,Routes} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Error from './components/Error';
import Score from './components/Score';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


const App = ()=>{
    return(
        <>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='/Score' element={<Score/>}/>
            <Route exact path="*" element={<Error/>} />
        </Routes>
                
        </>
    )
}

export default App;