import React from "react";
import pic1 from '../pics/skills1 (1).jpg';
import pic2 from '../pics/skills1 (2).jpg';
import pic3 from '../pics/skills1 (3).jpg';
import pic4 from '../pics/skills1 (4).jpg';
import pic5 from '../pics/skills1 (5).jpg';




const Score = ()=>{
    return(
        <>
        <div className="bg-dark">
          <br/>
          <br/>
          <h1 className=" text-center h1">----Skills----</h1>
          <br/>
          <br/>
        <div className=" row row-cols-1 row-cols-md-3 g-4">
  <div className="col bg-info">
    <div className="card h-75">
      <img src={pic2} className="card-img-top service_img" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">React Js</h5>
        <p className="card-text">This Porfolio which you see is made up of React js with the help Route for Stabilty</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-75 service_col">
      <img src={pic3} className="card-img-top service_img" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Node js</h5>
        <p className="card-text">Well Skilled Node Developer and i also make several projects using Node js you can also visit my GitHub for my Projects</p>
      </div>
    </div>
  </div>
  <div className="col service_color">
    <div className="card h-75">
      <img src={pic1} className="card-img-top service_img" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Express Js</h5>
        <p className="card-text">Well Skilled Express Developer and i also make several projects using Express js you can also visit my GitHub for my Projects</p>
      </div>
    </div>
  </div>
  <div className="col bg-info">
    <div className="card h-75">
      <img src={pic4} className="card-img-top service_img" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">C/C++</h5>
        <p className="card-text">Currently working on DSA for stronger C++ Concept</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-75 service_col">
      <img src={pic5} className="card-img-top service_img" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">DataBase (Sql,MongoDB)</h5>
        <p className="card-text">Well known about Data Bases and also make several projects on MongoDB</p>
      </div>
    </div>
  </div>
  <div className="col service_color">
    <div className="card h-75">
      <img src={pic1} className="card-img-top service_img" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Agile Methodology/Agile Development</h5>
        <p className="card-text">I'm a Trained Agile Developer from Xtransmatrix Consulting Banglore.</p>
      </div>
    </div>
  </div>
</div>
</div>
        </>
    )
}
export default Score;
