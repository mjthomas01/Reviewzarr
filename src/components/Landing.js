import React from "react";
import DarkButton from "./button";
import "./landing.css";

function Landing() {
  return (
    <>
      <div className="d-flex flex-wrap container">
        <div class="row">
         
        <div className="col-lg-6 col-md-12 col-sm-12 left">
          <p className="display-1 nlp-product-review-container">
            <span className="nlp-product-review">{`NLP Product Review `}</span>
            <span className="nlp-product-review">Analyser</span>
          </p>

          <div className="a-comprehensive-review">
            A Comprehensive Review and Analysis of NLP based Sentiment Analysis
            for Product Reviews.
          </div>
          <div className="get-started">
            <DarkButton />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 right">
        <div className="man-phone">
          <img className="myran" src="./img/man1.jpg" alt="man" />
        </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Landing;
