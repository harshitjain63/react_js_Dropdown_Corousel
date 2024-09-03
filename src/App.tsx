import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './App.css';
import { Dropdown } from './Dropdown';

function App() {

  const [selected , setSelected] = useState('');
  
  return (

    <div className="app-container">
      <header className="header">
        <h1>My Carousel Heading</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla distinctio fuga consequatur voluptatem fugit voluptates veniam delectus optio porro dicta odio doloribus, architecto tempora qui, expedita nam sapiente. Ratione, dignissimos?</p>
      </header>

      <Carousel
        swipeable={true}
        infiniteLoop={true}
        interval={2000}
        autoPlay={true}
        showArrows={true}
        >
        <div>
          <img src="assets/1.jpeg" alt='a tree' />
        </div>
        <div>
          <img src="assets/tree.jpg" alt='a tree' />
        </div>
        <div>
          <img src="assets/img.avif" alt='a tree' />
        </div>
      </Carousel>

      <Dropdown selected={selected} setSelected={setSelected}/>

      <footer className="footer">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi amet, veniam facilis qui maxime nisi voluptatem, reiciendis explicabo temporibus aliquam sed consectetur nam molestiae, rem excepturi fuga corporis debitis ipsam?</p>
      </footer>
    </div>
  );
}

export default App;
