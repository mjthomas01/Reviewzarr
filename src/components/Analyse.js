import React from 'react'
import Navbar from './Navbar'
import"./analyse.css";
import Footer from './footer';
import { useState,useEffect } from 'react';

export default function Analyse() {

    const revsss = {"str":["unable to load"]};
    const [reviews, setReviews] = useState(revsss);

//     const getApiData = async () => {
//   const revs = await fetch(
//     "http://127.0.0.1:8000/"
//   );
// const json = await revs.json();
//   // update the state
//   setReviews(json);
// };


const getApiData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/");
      const json = await response.json();
      setReviews(json);
    } catch (error) {
      console.log(error);
      
    }
  };

  useEffect(() => {
  getApiData();
}, []);


// const revList = reviews.str.map((review, key) => <li key={key}>{review}</li> )
// console.log(revList);
  return (

    <>
      <Navbar />
      <div id="product">
        {reviews.str.map(review => <h1>{review}</h1> )}
        {/* {reviews.map(review =>
            <h1>{review}</h1>
            )} */}
            
            <div class="product shadow-lg d-flex flex-column flex-md-row bg-white p-3"style={{marginTop:"50px",marginLeft:"8%",marginRight:"8%"}}>
                <div class="d-flex justify-content-center">
                    <img src="./img/product.bmp" alt="" class="img-fluid prod"/>
                </div>
                <div class="h-100 d-flex flex-column gap-0 p-2 p-md-4 pb-0">
                    <div>
                        <h2>Product Name</h2>
                    </div>
                    <div>
                        <h4 class="text-secondary">Review</h4>
                    </div>
                    <div class="scrollable">
                        <p> About the phone: Apple phone without a second delay, I would say it is better than all android phones I have used. The phone is like water, it flows in a way you want and shaping in your way. In a best way possible, the phone is designed to only show what the user wants and eliminating unnecessary ads, features that I have seen in android.</p>
                        <p>This iPhone 14 is worth its price. Amazing features with amazing camera. Thanks to Amazon.</p>
                        <p>I updated the iPhone 14 from iPhone 11.
                            I exchange my old phone and I got the new phone in a fair price.
                            It is very handy, I like the build, it’s very fast.
                            And I got good price on exchange the cameras really good.</p>
                        <p>It’s IPhone, what else to say! The only thing I was worried about was the 60 Hz refresh rate and switching from a 120 Hz Android phone, but trust me, the difference is not that big. I think iOS is so optimised that it is a non issue.</p>
                        <p>Better than Expectations</p>
                        <p>Planned for Amazon exchange and thought I will try iPhone again after the iPhone 2 disaster.
                            Amazon exchange turned out to be a faux. The delivery guy seemed to be pre determined in not accepting my old Samsung phone. He wanted me to remove the almost perfect tempered glass to check the screen. He entered incorrect IMEI number of my phone in his mobile said that the system shows wrong IMEI and cannot do exchange. He wanted to pay the difference or return delivery. Ended up paying extra amount and replace my tempered glass.</p>
                        <p>Likes:
                            1. The mobile is simply superb after years of using android device I have switched to IPHONE to be precise the performance is butter smooth
                            2. The cinematic camera is just awesome
                            3. The look is simple and cool
                            4. Face unlock is best among the mobiles.
                            5. Multitasking is superb.
                            Dislike:
                            1. The first day itself the phone got hanged to home screen alert I have to hard reboot and fortunately there was solution to overcome. I was little bit worried on that when I saw that.
                            2. Front camera is not so great as per Iphone brand and standard.
                            3. Control center is not customizable and it's very limited to few apps.
                            4. Clear all feature is not there for opened features as such android.
                            
                            Overall it's good phone. I have got it in a good deal along with the exchange offer.</p>
                        <p>This is one of the all rounder excellent quality smartphone I would say.</p>
                        <p>It’s IPhone, what else to say! The only thing I was worried about was the 60 Hz refresh rate and switching from a 120 Hz Android phone, but trust me, the difference is not that big. I think iOS is so optimised that it is a non issue.</p>
                        <p>1) To use wired Headphone with adapter Bluetooth must be kept ON
                            2) For exchange offer purchase amazon sends some pre exchange instructions in registered e-mail. This instruction is not at all clear neither easy to follow unless one is very very computer savvy. Old phone has to be made prior ready or else exchange is bound to be refused. Pick-up person utmost tries to refuse exchange with slightest pretext. Better NOT to expect any help at pick-up.
                            3) Need to change some settings for workable battery backup.
                            4) The phones looks super classic and so far fully satisfied.</p>
                        <p>A product happy to acquire.</p>
                        <p>I feel it’s worth investing in iPhone 14 if you’re holding iPhone 11 or lower Versions… Good battery life, Amazing new features…etc.</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <div class="shadow-lg d-flex flex-column bg-white overflow-hidden p-4 gap-3 align-items-center"style={{marginTop:"50px",marginLeft:"8%",marginRight:"8%",marginBottom:"30px"}}>
                <div>
                    <h3>Chart</h3>
                </div>
                <div class="text-center px-md-5">
                    <p>Thank you for your interest in our review of this product. Our team has thoroughly analyzed the product and we would like to share our findings with you. Overall, we believe that this product is a solid choice for those in need of its features and functionality. We hope that our evaluation is helpful to you in making an informed purchasing decision.</p>
                </div>
                <div class="d-flex flex-column flex-md-row gap-2 gap-md-5 justify-content-between align-items-center">
                    <div class="chart-pic">
                        <img src="./img/chart.png" alt="" srcset="" class="img-fluid2"/>
                        <div class="overlayer">
                            <h2>6.0</h2>
                            <p>Reviewer <br></br> Rating</p>
                        </div>
                    </div>
                    <div class="">
                        <div class="list-unstyled chart-area">
                            <div class="border-bottom py-3"><i class="bi bi-circle-fill"style={{color:"#FFDEB6"}} ></i> Good Review</div>
                            <div class="border-bottom py-3"><i class="bi bi-circle-fill" ></i> Neutral Review</div>
                            <div class="border-bottom py-3"><i class="bi bi-circle-fill" ></i> Bad Review</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      
      <Footer/>
      
    </>
  )
}
