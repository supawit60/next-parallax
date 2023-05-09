import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export const ImageSlide = () => {

  return (
    <Slide>
      <div className="each-slide-effect">
        <div style={{ backgroundColor: 'red', backgroundSize: '100px' }}>
          <span>Slide 1</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: 'green', backgroundSize: '100px' }}>
          <span>Slide 2</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: 'blue', backgroundSize: '100px' }}>
          <span>Slide 3</span>
        </div>
      </div>
    </Slide>
  )
}
