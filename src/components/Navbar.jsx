import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { NavLink } from 'react-router-dom';


const Navbar = ()=>{
    return(
        <>

<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container">
    <NavLink className="navbar-brand text-light text-decoration-none" to={'/'}>Neelesh</NavLink>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    
    <div className=" justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav d-flex flex-md-row flex-sm-row ">
      <li className=" mx-5">
        <NavLink   aria-current="page" className={({isActive})=>{
            return isActive?" text-success  text-decoration-none":" text-info  text-decoration-none"
        }} to='/Portfolio-Using-React-Js'>Home</NavLink>
        </li>
        <li className=" mx-5">
        <NavLink  className={({isActive})=>{
            return isActive?" text-success  text-decoration-none":" text-info text-decoration-none "
        }} to='/Score'>Skills</NavLink>
        </li>
        <li className=" mx-5">
        <NavLink  className={({isActive})=>{
            return isActive?" text-success text-decoration-none ":" text-info text-decoration-none "
        }} to='/About'>About Us</NavLink>
        </li>
        <li className=" mx-5">
        <NavLink  className={({isActive})=>{
            return isActive?"  text-success text-decoration-none":"  text-info text-decoration-none"
        }} to="/contact">Contact Us</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}

export default Navbar;
