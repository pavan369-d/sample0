import { useState, useEffect } from 'react';

import gridSquares from '../public/images/grid-squares.png';
import leftArrow from '../public/images/left-arrow.png';
import rightArrow from '../public/images/right-arrow.png';
import questionMark from '../public/images/question-mark.png';
import plusSign from '../public/images/plus-sign.png';
import widget from '../public/images/widget.png';
import rightScroll from '../public/images/right-scroll.png';
import blueSquare from '../public/images/blue-square.webp';

function App() {
  const [activeLink, setActiveLink] = useState(1);
  const [allWidgets, setAllWidgets] = useState([{ id: 1, img: widget }]);

  const handleChange = (id) => {
    setActiveLink(id);
  };

  const handleGallery = () => {
    const newWidget = { id: allWidgets.length + 1, img: widget };
    setAllWidgets((prevWidgets) => [...prevWidgets, newWidget]);
  };

  const handlePrev = () => {
    let box = document.querySelector('.widget-boxes');
    let width = box.clientWidth;
    box.scrollLeft -= width;  // Decrease scrollLeft by the width of the box
    console.log(width);
  };

  const handleNext = () => {
    let box = document.querySelector('.widget-boxes');
    let width = box.clientWidth;
    box.scrollLeft += width;  // Increase scrollLeft by the width of the box
    console.log(width)
  };

  useEffect(() => {
    console.log(allWidgets);
  }, [allWidgets]);

  return (
    <div className="container">
      <div className="flex-container">
        <div className="top-container">
          <aside>
            <div className="aside-left">
              <div>
                <img src={questionMark} alt="about" />
              </div>
              <div className="grid-squares">
                <img src={gridSquares} alt="grid-squares" />
                <img src={gridSquares} alt="grid-squares" />
                <img src={gridSquares} alt="grid-squares" />
                <img src={gridSquares} alt="grid-squares" />
                <img src={gridSquares} alt="grid-squares" />
                <img src={gridSquares} alt="grid-squares" />
              </div>
            </div>
          </aside>
          <header>
            <nav className="nav-bar">
              <ul>
                <li
                  className={activeLink === 1 ? "active-li" : "links"}
                  onClick={() => handleChange(1)}
                >
                  About Me
                </li>
                <li
                  className={activeLink === 2 ? "active-li" : "links"}
                  onClick={() => handleChange(2)}
                >
                  Experiences
                </li>
                <li
                  className={activeLink === 3 ? "active-li" : "links"}
                  onClick={() => handleChange(3)}
                >
                  Recommended
                </li>
              </ul>
            </nav>
          </header>
          <div className={activeLink === 1 ? "main-text" : 'show-none'} id="main-text">
            <p>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            </p>
            <p>
              I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
            </p>
          </div>
          <div className={activeLink === 2 ? "main-text" : 'show-none'}>
            <p>
              Experience 1: Senior Sales Executive at TechWave Solutions (2018-2021) Led a team of 10 sales professionals, focusing on B2B solutions in the tech industry. Increased the company's annual revenue by 25% through strategic partnerships and enhanced client relations. Developed and implemented a new CRM strategy that improved customer retention by 15%. Awarded "Salesperson of the Year" in 2019 for consistently exceeding sales targets.
            </p>
          </div>
          <div className={activeLink === 3 ? "main-text" : 'show-none'}>
            <p>Dave comes highly recommended by his peers for his dedication, expertise, and results-driven approach.</p>
          </div>
          <div className="right-scrollbar">
            <img src={rightScroll} alt="scroll" />
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="bottom-container">
          <div className="aside-bottom-left">
            <div>
              <img src={questionMark} alt="about" />
            </div>
            <div className="grid-squares">
              <img src={gridSquares} alt="grid-squares" />
              <img src={gridSquares} alt="grid-squares" />
              <img src={gridSquares} alt="grid-squares" />
              <img src={gridSquares} alt="grid-squares" />
              <img src={gridSquares} alt="grid-squares" />
              <img src={gridSquares} alt="grid-squares" />
            </div>
          </div>
          <header>
            <div className="widgets">
              <li className="gallery-link">
                <a href="#">Gallery</a>
              </li>
              <div className="right-section">
                <div className="widget-addmore" onClick={handleGallery}>
                  <img src={plusSign} alt="add-more" />
                  <span id="addButton">ADD IMAGE</span>
                </div>
                <div className="arrows">
                  <div className="left-arrow" onClick={handlePrev}>
                    <img src={leftArrow} alt="left arrow" />
                  </div>
                  <div className="right-arrow" onClick={handleNext}>
                    <img src={rightArrow} alt="right arrow" />
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="widget-boxes" id="gallery">
            {allWidgets.map((item) => (
              <div className='box' key={item.id}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="horizontal-line"></div>
      </div>
    </div>
  );
}

export default App;
