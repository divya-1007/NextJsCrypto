/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react';
// import Carousel from 'react-material-ui-carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Carousels = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div id="animation-carousel" className="relative w-full">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        arrows={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        stopAutoPlayOnHover duration={500}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
         <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="">
            <div className="flex items-center justify-between">
              <img
                className="p-4 rounded-t-lg"
                src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-bnb.svg"
              />
              <div className="flex items-center justify-between">
              <img
                className="p-5 rounded-t-lg animate__animated animate__pulse animate__delay-0s animate__infinite	infinite"
                src="/svg-gobbler.svg" style={{ width: '246px', height: '100px' }}
              />
            </div>
            </div>
          </div>

          <div className="p-2">
            <div className="flex items-center justify-between">
              <span className="p-3 text-1xl font-bold text-gray-900 trade_colorCode">
              Binance Coin
              </span>
              <div className="flex items-center justify-between">
              <img
                className="p-3 rounded-t-lg animate__animated animate__flash animate__delay-0s animate__infinite	infinite"
                src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/arrow-bullish.svg" 
              />
              <span className="text-1xl font-bold text-gray-900 trade_colorCode">
               0.33%
              </span>
            </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 trade_colorCode">
              USD 247.71
              </span>
              <span className="text-1xl font-bold text-gray-900 trade_colorCode">
                BNB
              </span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="">
            <div className="flex items-center justify-between">
              <img
                className="p-4 rounded-t-lg"
                src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-xrp.svg"
              />
              <div className="flex items-center justify-between">
              <img
                className="p-5 rounded-t-lg animate__animated animate__pulse animate__delay-0s animate__infinite	infinite"
                src="/svg-gobbler_2.svg" style={{ width: '246px', height: '100px' }}
              />
            </div>
            </div>
          </div>

          <div className="p-2">
            <div className="flex items-center justify-between">
              <span className="p-3 text-1xl font-bold text-gray-900 trade_colorCode_1">
               XRP
              </span>
              <div className="flex items-center justify-between">
              <img
                className="rounded-t-lg animate__animated animate__flash animate__delay-0s animate__infinite	infinite"
                src="	https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/arrow-bearish.svg" 
              />
              <span className="p-3 text-1xl font-bold text-gray-900 trade_colorCode_1">
                2.11%
              </span>
            </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 trade_colorCode_1">
                USD 0.5464
              </span>
              <span className="text-1xl font-bold text-gray-900 trade_colorCode_1">
                XRP
              </span>
            </div>
          </div>
        </div> 

         <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="">
            <div className="flex items-center justify-between">
              <img
                className="p-4 rounded-t-lg"
                src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-btc.svg"
              />
              <div className="flex items-center justify-between">
              <img
                className="p-5 rounded-t-lg animate__animated animate__pulse animate__delay-0s animate__infinite	infinite"
                src="/svg-gobbler.svg" style={{ width: '246px', height: '100px' }}
              />
            </div>
            </div>
          </div>

          <div className="p-2">
            <div className="flex items-center justify-between">
              <span className="p-3 text-1xl font-bold text-gray-900 trade_colorCode_2">
              Bitcoin
              </span>
              <div className="flex items-center justify-between">
              <img
                className="p-3 rounded-t-lg animate__animated animate__flash animate__delay-0s animate__infinite	infinite"
                src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/arrow-bullish.svg" 
              />
              <span className="text-1xl font-bold text-gray-900 trade_colorCode_2">
               0.33%
              </span>
            </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 trade_colorCode_2">
                USD 247.71
              </span>
              <span className="text-1xl font-bold text-gray-900 trade_colorCode_2">
                BNB
              </span>
            </div>
          </div>
        </div>

         <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="">
            <div className="flex items-center justify-between">
              <img
                className="p-4 rounded-t-lg"
                src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-eth.svg"
              />

              <div className="text-1xl font-bold text-gray-900 trade_colorCode_3">
                <img
                  className="p-5 rounded-t-lg animate__animated animate__pulse animate__delay-0s animate__infinite	infinite" style={{ width: '246px', height: '100px' }}
                  src="/svg-gobbler_2.svg"
                />
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="flex items-center justify-between">
              <span className="p-3 text-1xl font-bold text-gray-900 trade_colorCode_3">
                Ethereum
              </span>
              <div className="flex items-center justify-between">
                <img
                  className="p-3 rounded-t-lg animate__animated animate__flash animate__delay-0s animate__infinite	infinite"
                  src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/arrow-bearish.svg"
                />
                <span className="text-1xl font-bold text-gray-900 trade_colorCode_3">
                  0.33%
                </span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 trade_colorCode_3">
                USD 1,643.80
              </span>
              <span className="text-1xl font-bold text-gray-900 trade_colorCode_3">
                ETH
              </span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ background: '#272833' }}>
          <div className="">
            <div className="flex items-center justify-between">
              <img
                className="p-4 rounded-t-lg"
                src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-usdt.svg
                "
              />

              <div className="text-1xl font-bold text-gray-900 trade_colorCode_3">
                <img
                  className="p-5 rounded-t-lg text-1xl font-bold text-gray-900 trade_colorCode_4" style={{ width: '246px', height: '100px' }}
                  src="/graph_2.svg"
                />
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="flex items-center justify-between">
              <span className="p-3 text-1xl font-bold text-gray-900 trade_colorCode_4">
                Tether
              </span>
              <div className="flex items-center justify-between">
                <img
                  className="p-3 rounded-t-lg"
                  src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/arrow-bullish.svg"
                />
                <span className="text-1xl font-bold text-gray-900 trade_colorCode_4">
                  0.11%
                </span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 trade_colorCode_4">
                USD 247.71
              </span>
              <span className="text-1xl font-bold text-gray-900 trade_colorCode_4">
                USDT
              </span>
            </div>
          </div>
        </div> 
      </Carousel>
    </div>
  );
};

export default Carousels;