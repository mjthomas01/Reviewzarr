import React from "react";
import { Link } from 'react-router-dom';

import "./product.css";

function Product() {
  
  
  return (
    <>
      <div id="items">
        <div
          id="item1"
          class="shadow-lg flex-column flex-lg-row bg-white overflow-hidden p-3"
        >
          <div class="d-flex justify-content-center">
            <img src="/common/product.bmp" alt="iphone-img" class="img-fluid newround" />
          </div>
          <div class="d-flex flex-column  align-items-center gap-2 p-2 p-md-4">
            <div>
              <h2>Apple iPhone 14 Pro 1TB Gold</h2>
              <p>
                15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On
                and ProMotion Dynamic Island, a magical new way to interact with
                iPhone 48MP Main camera for up to 4x greater resolution
                Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode
                for smooth, steady, handheld videos
              </p>
            </div>
            <div class="d-flex gap-2 gap-md-3">
              {/* <a href="/analyse">Analyse</a> */}
              <Link to="/analyse" class="btn btn-dark px-5">Analyse</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
