import React from 'react';
import Carousel from './Carousel';
import Productcard from './Productcard';
//import Poster from './Poster';


const Carouselmain = () => {
  const slides = [
    { imageUrl: 'https://img.freepik.com/free-psd/special-sales-banner-template_23-2148975924.jpg', text: 'Slide 1 Text' },
    { imageUrl: 'https://png.pngtree.com/thumb_back/fh260/background/20230526/pngtree-the-desktops-and-computer-screens-of-ecommerce-stores-with-a-shopping-image_2644100.jpg', text: 'Slide 2 Text' },
    { imageUrl: 'https://st.depositphotos.com/1004713/4845/i/450/depositphotos_48458829-stock-photo-shopping-woman-surrounded-by-icons.jpg', text: 'Slide 3 Text' },
    { imageUrl: 'https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg', text: 'Slide 3 Text' },
    { imageUrl: 'https://img.freepik.com/free-psd/shopping-woman-template-banner_23-2148764976.jpg', text: 'Slide 3 Text' },
  ];

  return (
    <div>
      {/*<h1>React Carousel Example</h1>*/}
      <Carousel slides={slides} />
      {/* <Poster></Poster> */}
      <Productcard></Productcard>
      
    </div>
  );
};

export default Carouselmain;
