import React from "react";
import myImg from "../assets/My_Img.png";  
import "./Home.css"; 

const Home = () => {
  const handleDownload = () => {
    
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1igPCjeN2kJ8lM4ZHrhxO9rtKel0QZDxX/view?usp=sharing"; 
    link.download = "Resume_Reshmitha.pdf"; 
    link.click();
  };

  return (
    <div className="home-container">
      
      <div className="home-text">
        <h1>
          <span className="highlight">I</span> AM <br />
          RESHMITHA<span className="dot">.</span>
        </h1>
        <span className="underline"></span>
        <button onClick={handleDownload} className="cta-button">
          Download Resume 
        </button>
      </div>

      
      <div className="home-image">
        <div className="image-container">
          <div className="circle-bg"></div>
          <img
            src={myImg} 
            alt="Alex"
            className="main-img"
          />
        </div>

        
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  );
};

export default Home;
