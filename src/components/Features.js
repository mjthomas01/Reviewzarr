import React from "react";
import "./features.css";

function Features() {
  return (
    <>
    <section>
        <div class="px-md-5 px-3 row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5 m-0 p-0 gap-3">
            <div class="testimony col flex-grow-1" style={{backgroundColor:"#A4DCD0"}} >
                <p>I had a fantastic experience with this company! The customer service was exceptional, and the service exceeded my expectations. I highly recommend this company and will definitely be a returning customer in the future.</p>
                <div>
                    <img src="/common/profile1.bmp" alt=""/>
                    <span>
                        <h5>Rosa Mariam John</h5>
                        <p>Signature Cake</p>
                    </span>
                </div>
            </div>
            <div class="testimony col flex-grow-1" style={{backgroundColor:"#EFABA7"}}>
                <p>"I am thoroughly impressed! The analysing process was quick and easy. Not to mention, the quality of the service exceeded my expectations. I highly recommend this website to anyone looking for reliable service </p>
                <div>
                    <img src="/common/profile2.bmp" alt=""/>
                    <span>
                        <h5>Melvin J Thomas</h5>
                        <p>TCS</p>
                    </span>
                </div>
            </div>
            <div class="testimony col flex-grow-1" style={{backgroundColor:"#F3DAAE"}} >
                <p>I had a fantastic experience with this website! The interface was user-friendly, and I was able to find exactly what I was looking for quickly. The customer service was excellent, and any questions I had were promptly answered. I highly recommend this website to anyone looking for a great shopping experience</p>
                <div>
                    <img src="/common/profile3.bmp" alt=""/>
                    <span>
                        <h5>Raghul Surendran</h5>
                        <p>Google</p>
                    </span>
                </div>
            </div>
            <div class="testimony col flex-grow-1" style={{backgroundColor:"#DFDFFF"}} >
                <p>I had an incredible experience with this website! The user interface was easy to navigate, and the customer service was top-notch. The product I received exceeded my expectations and was delivered promptly. I would highly recommend this website to anyone looking for quality products and exceptional customer service.</p>
                <div>
                    <img src="/common/profile4.bmp" alt=""/>
                    <span>
                        <h5>John Doe</h5>
                        <p>Signature Cake</p>
                    </span>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Features;
