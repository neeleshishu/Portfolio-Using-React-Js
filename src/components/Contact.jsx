import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Contact = ()=>{
    return(
        <>
        <div className='background_contact'>
       <form class="row g-3 col-6 for">
        <h1>Contact Us</h1>
  
  <div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputAddress" placeholder="@gmail.com"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Massage</label>
    <input type="text" class="form-control" id="inputAddress2"/>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Send</button>
  </div>
  <br/>
  <br/>
  -----Other Detailes-----
  <div className="d-flex">
  <a href="https://www.linkedin.com/in/neelesh-tiwari-0451b621a/"><button className='mx-2 btn btn-outline-primary'>Linkdin</button></a>
  <a href="https://github.com/neeleshishu"><button className='mx-2 btn btn-outline-info'>GitHub</button></a>
  <a href="https://www.hackerrank.com/neeleshishu021"><button className='mx-2 btn  btn-outline-secondary'>HackerRank</button></a>
  </div>
</form>
</div>

        </>
    )
}

export default Contact;