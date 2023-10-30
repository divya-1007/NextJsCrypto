"use client";
import "../../component/exchangePage/ecxhange.css";
import "../component/landingPage/customeStyle.css";
import "animate.css";
import React, { useEffect, useState } from "react";

export default function signUp() {
  return (
    <div className="flex flex-col items-center justify-between pt-24">
      <div className="container" style={{ overflow: "hidden" }}>
        <div className="grid grid-cols-2 gap-0 my-1 mx-1 card_style ">
          <div
            className="rounded overflow-hidden border-r-4 border-indigo-500"
             style={{ height: "100%",  position: 'relative',
             }}
          >
             <img
            className="hero__grid-bg"
            src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/sign-in/signin-v2-page-background.svg"
            alt="Background"
            style={{
            position: 'absolute',
            overflow:'hidden',
            pointerEvents:'none',
            transform:'scaleX(-1.2)',
            zIndex:'-1' 
            }}
          />
          <a href="/">
          <svg style={{display:'block',font: '7rem arial', fontFamily: 'arial black',width: '100%',height: '230px',marginBottom: '-8rem',}}>
              <symbol id="s-text">
              <text textAnchor="small" x="10%" y="40%">Alpha </text>
              </symbol>

              <g className = "g-ants">
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
              </g>
            </svg>
            </a>
            <p className="text-center font-serif text-lg pt-10 mb-5">Set up your account and verify your account to get started on trading crypto.</p>
           

            <form className="mini-form text-center mt-10">
            <div class="leading-normal font-light text-xl m-3 mb-10 font-serif ml-3 ">
                <input
                  type="text"
                  name="value"
                  placeholder="Enter your First Name"
                  class="w-3/5 bg-transparent font-light outline outline-2 bg-transparent-to-br outline-white-900 rounded-full p-3 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-white-200  contrast-more:placeholder-white-400"
                />
              </div>
              <div class="leading-normal font-light text-xl m-3 mb-10 font-serif ml-3 ">
                <input
                  type="text"
                  name="value"
                  placeholder="Enter your Last Name"
                  class="w-3/5 bg-transparent font-light outline outline-2 bg-transparent-to-br outline-white-900 rounded-full p-3 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-white-200  contrast-more:placeholder-white-400"
                />
              </div>
              <div class="leading-normal font-light text-xl m-3 mb-10 font-serif ml-3 ">
                <input
                  type="email"
                  name="value"
                  placeholder="Enter your email address"
                  class="w-3/5 bg-transparent font-light outline outline-2 bg-transparent-to-br outline-white-900 rounded-full p-3 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-white-200  contrast-more:placeholder-white-400"
                />
              </div>
              <div class="leading-normal font-light text-xl m-3 mb-10 font-serif ml-3 ">
                <input
                  type="password"
                  name="value"
                  placeholder="Enter your password"
                  class="w-3/5 bg-transparent font-light outline outline-2 bg-transparent-to-br outline-white-900 rounded-full p-3 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-white-200 contrast-more:placeholder-white-400"
                />
              </div>
              <div className="ml-24 flex">
              <input className="mr-2 ml-12" type="checkbox" class="checked:bg-red-500 ..." />
              <p className="text-sm  font-serif">I agree to the Terms and Conditions and the Trading Risk Notice</p>
              {/* <a href="/" className="mr-10 text-blue-500">I agree to the Terms and Conditions and the Trading Risk Notice</a> */}
              </div>
              <button style={{ background: "#5d6588" }} className="w-3/5 text-white bg-transparent bg-gradient-to-br from-rose-500 to-green-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-white-800 font-medium rounded-full text-sm px-5 py-5 text-center my-5 mx-1">
                Sign Up Now
              </button>
            </form>
            <div className="flex ml-24 mb-10 font-serif text-md gap-2 text-center">
              <p className="ml-12">Already have an account? </p>
              <a  className="text-rose-500 "href="/login">Log In now</a>
            </div>
          </div>
          <div
            className="rounded overflow-hidden pt-24 p-0 my-1 mx-1"
            style={{ height: "100%",  position: 'relative',
            backgroundImage: 'url(https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/sign-in/signin-v2-page-background.svg)', /* Update the URL with the correct path to your image */
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
            width: '100%',
            height: 'inherit',
            }}
          >
            <div className="sign-in-banner">
              <div>
                <h2 className="text-2xl font-serif font-bold m-7">
                  Start Building Your Crypto Portfolio With Cryptolly
                </h2>
                <p className="text-xl font-serif m-5">
                  Cryptolly is the easiest place to buy and sell crypto assets.
                </p>
                <img className="w-full h-full" src="/signin-v2.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
