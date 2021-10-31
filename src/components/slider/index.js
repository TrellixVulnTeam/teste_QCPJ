import React from "react";
import { Zoom } from "react-slideshow-image";
import teste from "../../assets/consultorio01.jpg"
import image2 from "../../assets/consultorio02.jpg"
import image3 from "../../assets/consultorio03.jpg"
import image4 from "../../assets/teste.png"

// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";
const images = [teste, image2, image3, image4];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} style={{ width: "100%" }} src={each} />
        ))}
      </Zoom>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Slideshow />
    </div>
  );
}

export default App;
