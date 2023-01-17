import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';




const Home = ()=>{
    return(
        <>
        <section className=' d-flex align-item-center background_home'>
        <div className=' container-fluid'>
            <div className="row">
            <div className='col-10 mx-auto'>
                <div className="row">
            <div className='text_home col-md-6 order-2 pt-5 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column'>
            <h1 className='home_text'>Hii,</h1>
            <h2 className='home_text'>My name is<strong className=' text-primary'> Neelesh Tiwari</strong></h2>
            <h3 className='home_text'>Web Developer and Software Developer</h3>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        </>
    )
}

export default Home;