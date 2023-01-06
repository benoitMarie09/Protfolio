import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Work from "./pages/work/Work";


const images_colines = [Coline_img_1, Coline_img_2, Coline_img_3, Coline_img_4, Coline_img_5, Coline_img_6]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Work 
    images= {images_colines}
    
    />
  </React.StrictMode>
);


