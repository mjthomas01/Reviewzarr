import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
    <footer class="mt-2">
    <div class="w-100 px-5 py-md-5 py-3 d-flex flex-md-row flex-column justify-content-between gap-4 align-items-center">
        <div class="d-flex flex-column gap-3 list-unstyled ms-md-5 text-start">
            <a href="#main">HOME</a>
            <a href="#productURL">ANALYSE</a>
            <a href="">CONTACT</a>
        </div>
        <div class="footer-logo">
           
            <h6 class="text-white">REVIEWZAR</h6>
        </div>
    </div>
    </footer>
    </>
  );
}

export default Footer;
