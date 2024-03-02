import React from "react";
import Products from "./Products";


function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-transperent"> 
        <img src="/assets/banner.jpg" className="card-img" alt="" height="550px"/> 
        <div className="card-img-overlay d-flex flex-column"> 
          <div className="container">
            <h5
              style={{ color: "black" }}
              className="card-title display-6 fw-bolder mt-4 mb-2" 
            >
              FIND YOUR STYLE WITH OUR LATEST ADDITION!
            </h5>
            <p className="card-text lead " style={{ color: "black" }}> 
              Whether You're Looking for Comfortable Loungewear or Stylish
              Accessories, Our Latest Additions Have Something for Every
              Occasion.
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
