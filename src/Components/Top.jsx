import React, { useState } from 'react';
import { CiSearch,CiHeart,CiShoppingCart } from "react-icons/ci";
import { FaCodeCompare } from "react-icons/fa6";
import './Top.css';  
const Top = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Close dropdown if clicked outside
  const handleOutsideClick = (e) => {
    if (!e.target.closest('.dropdown')) {
      setIsOpen(false);
    }
  };

  // Attach event listener to the window for clicks outside
  React.useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className="container-fluid p-3 top ">
      <div className="d-flex align-items-center justify-content-between">

      <div className="d-flex align-items-center">
        <div className="dropdown">
          <button
            className={`border-0 bg-transparent drop-down ${isOpen ? 'open' : ''}`}
            onClick={toggleDropdown}
            >
            English <span className="dropdown-arrow">↓</span>
          </button>
          {/* Dropdown menu */}
          {isOpen && (
              <div className="dropdown-menu">
              <div className="dropdown-item">Spanish</div>
              <div className="dropdown-item">French</div>
              <div className="dropdown-item">German</div>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button
            className={`border-0 bg-transparent drop-down ${isOpen ? 'open' : ''}`}
            onClick={toggleDropdown}
            >
            Pakistan BDT ৳  <span className="dropdown-arrow">↓</span>
          </button>
          {/* Dropdown menu */}
          {isOpen && (
              <div className="dropdown-menu">
              <div className="dropdown-item">Spanish</div>
              <div className="dropdown-item">French</div>
              <div className="dropdown-item">German</div>
            </div>
          )}
        </div>
        
      </div>
      <span className="h2 fw-bold">Flexon</span>
      <div className="d-flex align-items-center justify-content-center gap-2">
        <button className='border-0  i-btn '> <CiSearch  size={25}/></button>
        <button className='border-0  i-btn'> <FaCodeCompare  size={25}/></button>
        <button className='border-0  i-btn'> <CiHeart size={25}/></button>
        <button className='border-0  i-btn'> <CiShoppingCart size={25}/></button>
      </div>
          </div>
    </div>
  );
};

export default Top;
