import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [selectedOption, setSelectedOption] = useState("Home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = document.querySelector(".h1").offsetHeight; 
      const offsetPosition = section.offsetTop - headerHeight; 
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
  
      setIsDrawerOpen(false); 
    }
  };
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="h1">
      <div className="logo">Reshmitha</div>
      <div className="gap"></div>

      
      <div className="menu-icon" onClick={toggleDrawer}>
        ☰
      </div>

      
      <ul className={`options ${isDrawerOpen ? "drawer-open" : ""}`}>
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`o1 ${selectedOption === item.label ? "selected" : ""}`}
            onClick={() => {
              setSelectedOption(item.label);
              scrollToSection(item.id);
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
