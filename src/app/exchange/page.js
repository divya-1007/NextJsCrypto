"use client";
import "../../component/exchangePage/ecxhange.css";
import NavPage from "../../component/landingPage/navpage";
import Chart from 'react-apexcharts';
import React, { useEffect, useState,} from "react";


export default function Exchange() {
  const [toggle, setToggle] = useState(true);
  const [selectedOption, setSelectedOption] = useState("paywallet");
  const [optionValume, setOptionValume] = useState("BTC");
  const [optionCurrentBlance, setOptionCurrentBlance] = useState("BTC");
  const [optionPage, setOptionPage] = useState(10);
  const [optionPrice, setOptionPrice] = useState('');
  const [optionTime, setOptionTime] = useState('');
  const options1 = {
    chart: {
      type: 'candlestick',
      height: 350,
    },
    title: {
      text: 'stroke Line',
    },
    xaxis: {
      type: 'category',
      categories: [
        '01-01-2022',
        '01-02-2022',
        '01-03-2022',
        '01-04-2022',
        '01-05-2022',
        '01-06-2022',
      ],
    },
  };

  const series = [
    {
      name: 'Candlestick',
      data: [
        {
          x: new Date(1538778600000).toLocaleTimeString('it-IT'),
          y: [6629.81, 6650.5, 6623.04, 6633.33]
        },
        {
          x: new Date(1538780400000).toLocaleTimeString('it-IT'),
          y: [6632.01, 6643.59, 6620, 6630.11]
        },
        {
          x: new Date(1538782200000).toLocaleTimeString('it-IT'),
          y: [6630.71, 6648.95, 6623.34, 6635.65]
        },
        {
          x: new Date(1538784000000).toLocaleTimeString('it-IT'),
          y: [6635.65, 6651, 6629.67, 6638.24]
        },
        {
          x: new Date(1538785800000).toLocaleTimeString('it-IT'),
          y: [6638.24, 6640, 6620, 6624.47]
        },
        {
          x: new Date(1538787600000).toLocaleTimeString('it-IT'),
          y: [6624.53, 6636.03, 6621.68, 6624.31]
        },
        {
          x: new Date(1538789400000).toLocaleTimeString('it-IT'),
          y: [6624.61, 6632.2, 6617, 6626.02]
        },
        {
          x: new Date(1538791200000).toLocaleTimeString('it-IT'),
          y: [6627, 6627.62, 6584.22, 6603.02]
        },
        {
          x: new Date(1538793000000).toLocaleTimeString('it-IT'),
          y: [6605, 6608.03, 6598.95, 6604.01]
        },
        {
          x: new Date(1538794800000).toLocaleTimeString('it-IT'),
          y: [6604.5, 6614.4, 6602.26, 6608.02]
        },
        {
          x: new Date(1538796600000).toLocaleTimeString('it-IT'),
          y: [6608.02, 6610.68, 6601.99, 6608.91]
        },
        {
          x: new Date(1538798400000).toLocaleTimeString('it-IT'),
          y: [6608.91, 6618.99, 6608.01, 6612]
        },
        {
          x: new Date(1538800200000).toLocaleTimeString('it-IT'),
          y: [6612, 6615.13, 6605.09, 6612]
        },
        {
          x: new Date(1538802000000).toLocaleTimeString('it-IT'),
          y: [6612, 6624.12, 6608.43, 6622.95]
        },
        {
          x: new Date(1538803800000).toLocaleTimeString('it-IT'),
          y: [6623.91, 6623.91, 6615, 6615.67]
        },
        {
          x: new Date(1538805600000).toLocaleTimeString('it-IT'),
          y: [6618.69, 6618.74, 6610, 6610.4]
        },
        {
          x: new Date(1538807400000).toLocaleTimeString('it-IT'),
          y: [6611, 6622.78, 6610.4, 6614.9]
        },
        {
          x: new Date(1538809200000).toLocaleTimeString('it-IT'),
          y: [6614.9, 6626.2, 6613.33, 6623.45]
        },
        {
          x: new Date(1538811000000).toLocaleTimeString('it-IT'),
          y: [6623.48, 6627, 6618.38, 6620.35]
        },
        {
          x: new Date(1538812800000).toLocaleTimeString('it-IT'),
          y: [6619.43, 6620.35, 6610.05, 6615.53]
        },
        {
          x: new Date(1538814600000).toLocaleTimeString('it-IT'),
          y: [6615.53, 6617.93, 6610, 6615.19]
        },
        {
          x: new Date(1538816400000).toLocaleTimeString('it-IT'),
          y: [6615.19, 6621.6, 6608.2, 6620]
        },
        {
          x: new Date(1538818200000).toLocaleTimeString('it-IT'),
          y: [6619.54, 6625.17, 6614.15, 6620]
        },
        {
          x: new Date(1538820000000).toLocaleTimeString('it-IT'),
          y: [6620.33, 6634.15, 6617.24, 6624.61]
        },
        {
          x: new Date(1538821800000).toLocaleTimeString('it-IT'),
          y: [6625.95, 6626, 6611.66, 6617.58]
        },
        {
          x: new Date(1538823600000).toLocaleTimeString('it-IT'),
          y: [6619, 6625.97, 6595.27, 6598.86]
        },
        {
          x: new Date(1538825400000).toLocaleTimeString('it-IT'),
          y: [6598.86, 6598.88, 6570, 6587.16]
        },
        {
          x: new Date(1538827200000).toLocaleTimeString('it-IT'),
          y: [6588.86, 6600, 6580, 6593.4]
        },
        {
          x: new Date(1538829000000).toLocaleTimeString('it-IT'),
          y: [6593.99, 6598.89, 6585, 6587.81]
        },
        {
          x: new Date(1538830800000).toLocaleTimeString('it-IT'),
          y: [6587.81, 6592.73, 6567.14, 6578]
        },
        {
          x: new Date(1538832600000).toLocaleTimeString('it-IT'),
          y: [6578.35, 6581.72, 6567.39, 6579]
        },
        {
          x: new Date(1538834400000).toLocaleTimeString('it-IT'),
          y: [6579.38, 6580.92, 6566.77, 6575.96]
        },
        {
          x: new Date(1538836200000).toLocaleTimeString('it-IT'),
          y: [6575.96, 6589, 6571.77, 6588.92]
        },
        {
          x: new Date(1538838000000).toLocaleTimeString('it-IT'),
          y: [6588.92, 6594, 6577.55, 6589.22]
        },
        {
          x: new Date(1538839800000).toLocaleTimeString('it-IT'),
          y: [6589.3, 6598.89, 6589.1, 6596.08]
        },
        {
          x: new Date(1538841600000).toLocaleTimeString('it-IT'),
          y: [6597.5, 6600, 6588.39, 6596.25]
        },
        {
          x: new Date(1538843400000).toLocaleTimeString('it-IT'),
          y: [6598.03, 6600, 6588.73, 6595.97]
        },
        {
          x: new Date(1538845200000).toLocaleTimeString('it-IT'),
          y: [6595.97, 6602.01, 6588.17, 6602]
        },
        {
          x: new Date(1538847000000).toLocaleTimeString('it-IT'),
          y: [6602, 6607, 6596.51, 6599.95]
        },
        {
          x: new Date(1538848800000).toLocaleTimeString('it-IT'),
          y: [6600.63, 6601.21, 6590.39, 6591.02]
        },
        {
          x: new Date(1538850600000).toLocaleTimeString('it-IT'),
          y: [6591.02, 6603.08, 6591, 6591]
        },
        {
          x: new Date(1538852400000).toLocaleTimeString('it-IT'),
          y: [6591, 6601.32, 6585, 6592]
        },
        {
          x: new Date(1538854200000).toLocaleTimeString('it-IT'),
          y: [6593.13, 6596.01, 6590, 6593.34]
        },
        {
          x: new Date(1538856000000).toLocaleTimeString('it-IT'),
          y: [6593.34, 6604.76, 6582.63, 6593.86]
        },
        {
          x: new Date(1538857800000).toLocaleTimeString('it-IT'),
          y: [6593.86, 6604.28, 6586.57, 6600.01]
        },
        {
          x: new Date(1538859600000).toLocaleTimeString('it-IT'),
          y: [6601.81, 6603.21, 6592.78, 6596.25]
        },
        {
          x: new Date(1538861400000).toLocaleTimeString('it-IT'),
          y: [6596.25, 6604.2, 6590, 6602.99]
        },
        {
          x: new Date(1538863200000).toLocaleTimeString('it-IT'),
          y: [6602.99, 6606, 6584.99, 6587.81]
        },
        {
          x: new Date(1538865000000).toLocaleTimeString('it-IT'),
          y: [6587.81, 6595, 6583.27, 6591.96]
        },
        {
          x: new Date(1538866800000).toLocaleTimeString('it-IT'),
          y: [6591.97, 6596.07, 6585, 6588.39]
        },
        {
          x: new Date(1538868600000).toLocaleTimeString('it-IT'),
          y: [6587.6, 6598.21, 6587.6, 6594.27]
        },
        {
          x: new Date(1538870400000).toLocaleTimeString('it-IT'),
          y: [6596.44, 6601, 6590, 6596.55]
        },
        {
          x: new Date(1538872200000).toLocaleTimeString('it-IT'),
          y: [6598.91, 6605, 6596.61, 6600.02]
        },
        {
          x: new Date(1538874000000).toLocaleTimeString('it-IT'),
          y: [6600.55, 6605, 6589.14, 6593.01]
        },
        {
          x: new Date(1538875800000).toLocaleTimeString('it-IT'),
          y: [6593.15, 6605, 6592, 6603.06]
        },
        {
          x: new Date(1538877600000).toLocaleTimeString('it-IT'),
          y: [6603.07, 6604.5, 6599.09, 6603.89]
        },
        {
          x: new Date(1538879400000).toLocaleTimeString('it-IT'),
          y: [6604.44, 6604.44, 6600, 6603.5]
        },
        {
          x: new Date(1538881200000).toLocaleTimeString('it-IT'),
          y: [6603.5, 6603.99, 6597.5, 6603.86]
        },
        {
          x: new Date(1538883000000).toLocaleTimeString('it-IT'),
          y: [6603.85, 6605, 6600, 6604.07]
        },
        {
          x: new Date(1538884800000).toLocaleTimeString('it-IT'),
          y: [6604.98, 6606, 6604.07, 6606]
        },

      ],
    },
    // {
    //   name: 'Line',
    //   type: 'line', // Specify 'line' type for the line series
    //   data: [20, 35, 25, 45, 30, 50],
    // },
  ];


  const options = [
    { value: "paywallet", label: "Paywallet", icon: "usd.svg" },
    { value: "BTC", label: "BTC", icon: "logo-btc.svg" },
    { value: "ETH", label: "ETH", icon: "logo-eth.svg" },
  ];

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSelectChangeValume = (e) => {
    setOptionValume(e.target.value);
  };

  const handleSelectChangeCurrentBlance = (e) => {
    setOptionCurrentBlance(e.target.value);
  };

  const handleSelectPrice = (e) => {
    setOptionPrice(e.target.value);
  };

  const handleSelectTime = (e) => {
    setOptionTime(e.target.value);
  };

  // paggination
  const handleSelectPage = (e)=>{
    setOptionPage(e.target.value)
  }
  const [currentPage, setCurrentPage] = useState(1);

  const data = Array.from({ length: 2*optionPage }, (_, index) => ({
    time: '12:34:44',
    price: '243546.12443536',
    amount: '12425.21435364',
    total: '12425.21435364',
  }));

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * optionPage;
  const endIndex = startIndex + optionPage;
  const itemsToDisplay = data.slice(startIndex, endIndex);
  return (
    <div>
      <NavPage />
      <div class="flex flex-col items-center justify-between pt-24">
        <div className="container" style={{ overflow: "hidden" }}>
          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2 ...">
              <div class="grid grid-cols-2 gap-4 my-1 mx-1 card_style">
                <div class="...">
                  <div class="h-full rounded overflow-hidden p-5 ">
                    <div class="grid gap-2 grid-cols-2 card_style ">
                      <div class="grid gap-2 grid-cols-2 p-3">
                        <img
                          class="w-1/1"
                          src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-btc.svg"
                          alt="Sunset in the mountains"
                        />
                        <div>
                          <p class="font-serif font-bold ">Bitcoin</p>
                          <p class="font-serif text-lg">BTC/USD</p>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => setToggle(!toggle)}
                          class="text-white bg-gradient-to-br from-rose-500 to-green-700  font-medium rounded-lg text-white font-bold py-2 px-8 m-3 ml-10 p-4 rounded"
                        >
                          Show/Hide
                        </button>
                      </div>
                    </div>
                   {toggle ?
                    <div>
                      <div class="grid gap-2 grid-cols-2">
                        <div>
                          <p class="font-bold text-sl mt-8 font-serif text-base">
                            {" "}
                            24h change
                          </p>
                          <div class="flex rounded-t-lg animate__animated animate__flash animate__delay-0s animate__infinite infinite">
                            <img src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/arrow-bullish.svg" />
                            <span class="text-1xl font-bold text-gray-900 trade_colorCode_1">
                              2.11%
                            </span>
                          </div>
                        </div>
                        <div>
                          <img
                            class="float-right"
                            src="/svg-gobbler_2.svg"
                            style={{ width: "246px", height: "100px" }}
                            alt="action"
                          />
                        </div>
                      </div>
                      <div class="grid gap-2 grid-cols-2">
                        <p class="text-white-700">
                          Last Price:
                          <span class="text-emerald-300 animate__animated animate__flash animate__delay-0s animate__infinite infinite">
                            18432.320
                          </span>
                        </p>
                        <p class="text-white-700">
                          24 h Low:{" "}
                          <span class="text-red-500 animate__animated animate__flash animate__delay-0s animate__infinite infinite">
                            18432.320
                          </span>
                        </p>
                      </div>
                    </div>
                   :null}
                  </div>
                </div>

                <div class="...">
                  <div class="grid grid-cols-2 gap-4">
                    <div class="...">
                      <div class="max-w-sm max-h-24 rounded overflow-hidden p-2 my-3 mx-1 card_style ">
                        <div class="p-2">
                          <p class="text-white-700 text-2xl text-center font-bold ">
                            Last Price
                          </p>
                          <p class="text-emerald-400 text-2xl text-center font-bold animate__animated animate__flash animate__delay-0s animate__infinite infinite">
                            18432.320
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="...">
                      <div class="max-w-sm max-h-32 my-3 mx-2 card_style rounded overflow-hidden p-2 ">
                        <div class="p-2">
                          <p class="text-white-700 text-2xl text-center font-bold ">
                            24 h Low
                          </p>
                          <p class="text-red-400 text-2xl text-center font-bold animate__animated animate__flash animate__delay-0s animate__infinite infinite">
                            18432.320
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-span-2 ... gap-4">
                      <div class="max-h-32 rounded overflow-hidden p-2 my-3 mx-2 card_style  mt-4">
                        <div class="grid gap-2 grid-cols-2">
                          <div>
                            <p class="font-bold text-white-700 text-2xl m-3 font-serif ml-3">
                              {" "}
                              24h change
                            </p>
                            <div class="flex rounded-t-lg animate__animated animate__flash animate__delay-0s animate__infinite infinite">
                              <img src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/arrow-bullish.svg" />
                              <span class="text-1xl font-bold text-gray-900 trade_colorCode_1">
                                2.11%
                              </span>
                            </div>
                          </div>
                          <div>
                            <img
                              class="float-right mr-6 "
                              src="/svg-gobbler_2.svg"
                              style={{ width: "100%", height: "100%" }}
                              alt="action"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 gap-4 mt-5">
                <div class="h-full mx-1 rounded overflow-hidden p-4 card_style">
                  <div class="grid gap-2 grid-cols-3 border-b-2 border-gray-500 ">
                    <div class="...">
                      <p class="font-serif font-bold text-2xl p-1">BTC/USD</p>
                    </div>
                    <div class="...">
                      <div
                        className="items-center p-2 justify-between hidden w-full md:flex md:w-auto md:order-1 float-right"
                        id="navbar-sticky"
                      >
                        <ul
                          className="flex flex-col  mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0"
                          style={{ marginLeft: "14%" }}
                        >
                          <li>
                            <p class="text-gray-700  flex">
                              Open:{" "}
                              <span class="text-emerald-400 animate__animated animate__flash animate__delay-0s animate__infinite infinite">
                                18432.320
                              </span>
                            </p>
                          </li>
                          <li>
                            <p class="text-gray-700  flex">
                              High:
                              <span class="text-emerald-400 animate__animated animate__flash animate__delay-0s animate__infinite infinite">
                                18432.320
                              </span>
                            </p>
                          </li>
                          <li>
                            <p class="text-gray-700  flex">
                              Low:
                              <span class="text-emerald-400 animate__animated animate__flash animate__delay-0s animate__infinite infinite">
                                18432.320
                              </span>
                            </p>
                          </li>
                          <li>
                            <p class="text-gray-700 flex">
                              Close:
                              <span class="text-emerald-400 animate__animated animate__flash animate__delay-0s animate__infinite infinite">
                                18432.320
                              </span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="...">
                      <div class="flex">
                        <div class="w-full ">
                            <div class="">
                              <select
                                value={optionPrice}
                                onChange={handleSelectPrice}
                                class=" w-1/2 ml-12 outline outline-2 outline-white-900 text-white  focus:ring-2 focus:ring-green-200 dark:focus:ring-green-500   font-medium rounded-full text-sm px-2 py-2.5 text-center mr-1"
                                name="whatever"
                                id="frm-whatever"
                                style={{ marginLeft: "52%",background: "#272833" }}
                              >
                                <option  class="custom-option" value="price">Price</option>
                                <option  class="custom-option" value="depth">Depth</option>
                              </select>
                            </div>
                        </div>
                        <div class="w-full pl-4">
                            <div class="shadow-lg">
                              <select
                                value={optionTime}
                                onChange={handleSelectTime}
                                class=" w-full text-gray outline outline-2 outline-white-900 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-500  font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2"
                                name="whatever"
                                id="frm-whatever"
                                style={{ background: "#272833" }}
                              >
                                <option  class="custom-option" value="1_mini">1 min</option>
                                <option  class="custom-option" value="3_mini">3 min</option>
                                <option  class="custom-option" value="30_mini">30 mini</option>
                                <option  class="custom-option" value="1_hour">1 hour</option>
                                <option  class="custom-option" value="24_hour">24 hour</option>
                                <option  class="custom-option" value="day">1 day</option>
                                <option  class="custom-option" value="week">1 week</option>
                              </select>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="h-full rounded overflow-hidden">
                    <div class="grid grid-cols-1 gap-4 mt-8">
                    <div className="mixed-chart">
                    <Chart options={options1} series={series} type="candlestick" width={'100%'} />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right side box */}
            <div class="...">
              <div class="h-full rounded overflow-hidden p-5 my-1 mx-1 card_style" style={{height:'100%'}}>
                <div class="grid gap-2 grid-cols-2 mb-10">
                  <div class="grid gap-2 grid-cols-2 p-3">
                    <p class="font-bold text-white-700 text-2xl m-3 font-serif ml-3">
                      Bitcoin
                    </p>
                  </div>
                  <div>
                    <img
                      class="w-1/1 float-right mt-3"
                      src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-btc.svg"
                      alt="Sunset in the mountains"
                    />
                  </div>
                </div>

                <div>
                  <div class="grid gap-2 grid-cols-1">
                    <div>
                      <h1
                        class="text--gray-500 text-xl m-3 font-serif ml-3"
                        style={{ color: "#5d6588" }}
                      >
                        {" "}
                        Current Balance
                      </h1>
                      <div class="flex rounded-t-lg animate__animated animate__flash animate__delay-0s animate__infinite infinite"></div>
                    </div>
                  </div>

                  <div class="grid gap-2 grid-cols-2  border-b-2 border-gray-500">
                    <div class="grid gap-2 grid-cols-2 p-3 flex">
                      <div class="leading-normal font-bold text-2xl m-3 font-serif ml-3 ">
                        <input
                          type="text"
                          name="value"
                          placeholder="4000"
                          class="bg-transparent outline-0 contrast-more:placeholder-white-800"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="mt-3 float-right mr-3">
                        <select
                          value={optionCurrentBlance}
                          onChange={handleSelectChangeCurrentBlance}
                          className="appearance-none w-full bg-transparent outline-0 font-bold text-xl font-serif py-5 px-5 contrast-more:placeholder-white-800 text-center"
                          name="whatever"
                          id="frm-whatever"
                        >
                          <option class="custom-option" value="BTC">
                            BTC
                          </option>
                          <option class="custom-option" value="USD">
                            USD
                          </option>
                          <option class="custom-option" value="BTC">
                            BTC
                          </option>
                          <option class="custom-option" value="ETH">
                            ETH
                          </option>
                          <option class="custom-option" value="BNB">
                            BNB
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="grid gap-2 grid-cols-2 ">
                    <div class="grid gap-1 grid-cols-2 mt-5">
                      <h2
                        class="text-white-700 text-xl font-serif ml-2"
                        style={{ color: "#5d6588" }}
                      >
                        Volume (4h)
                      </h2>
                    </div>
                    <div class="rounded-t-lg mt-4 animate__animated animate__flash animate__delay-0s animate__infinite infinite">
                      <span class="float-right text-xl p-1 font-bold text-gray-500 trade_colorCode_1">
                        2.36%
                      </span>
                      <img
                        class="w-1/6 float-right p-2 "
                        src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/arrow-bullish.svg"
                      />
                    </div>
                  </div>

                  <div class="grid gap-2 grid-cols-2  border-b-2 border-gray-500">
                    <div class="grid gap-2 grid-cols-2 p-3 flex">
                      <div class="leading-normal font-bold text-2xl m-3 font-serif ml-3 ">
                        <input
                          type="text"
                          name="value"
                          placeholder="4000"
                          class="bg-transparent outline-0 contrast-more:placeholder-white-800"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="mt-3 float-right mr-3">
                        <select
                          value={optionValume}
                          onChange={handleSelectChangeValume}
                          className="appearance-none w-full bg-transparent outline-0 font-bold text-xl font-serif py-5 px-5 contrast-more:placeholder-white-800 text-center"
                          name="whatever"
                          id="frm-whatever"
                        >
                          <option class="custom-option" value="BTC">
                            BTC
                          </option>
                          <option class="custom-option" value="USD">
                            USD
                          </option>
                          <option class="custom-option" value="BTC">
                            BTC
                          </option>
                          <option class="custom-option" value="ETH">
                            ETH
                          </option>
                          <option class="custom-option" value="BNB">
                            BNB
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="grid gap-2 grid-cols-1">
                    <div>
                      <h1
                        class="text-gray-500 text-xl m-5 font-serif ml-3"
                        style={{ color: "#5d6588" }}
                      >
                        {" "}
                        Payment Method
                      </h1>
                      <div class="flex rounded-t-lg animate__animated animate__flash animate__delay-0s animate__infinite infinite"></div>
                    </div>
                  </div>

                  <div class="grid gap-2 grid-cols-1 mx-3 m-5">
                    <div class="...">
                      <div className="relative ">
                        <select
                          value={selectedOption}
                          onChange={handleSelectChange}
                          className="w-full appearance-none px-5 py-5 text-xl bg-transparent-to-br hover:bg-gradient-to-bl text-white font-bold font-serif outline outline-1 outline-gray-500 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-400 font-medium rounded-full text-sm"
                          style={{ background: "#272833" }}
                        >
                          {options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-10 flex items-center px-2 pointer-events-none">
                          <img
                            src={`https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/${
                              options.find((o) => o.value === selectedOption)
                                .icon
                            }`}
                            alt="currency icon"
                            className="w-6 h-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="grid gap-2 grid-cols-2 pt-8 ">
                    <button
                      type="button"
                      className="w-40  outline outline-2 outline-emerald-500  border-transparent text-white bg-transparent-to-br  hover:bg-gradient-to-bl focus:ring-2  focus:ring-green-200 dark:focus:ring-green-400 font-medium rounded-full text-sm px-5 py-5 text-center ml-9 mr-3"
                    >
                      Byu
                    </button>

                    <button
                      type="button"
                      className="w-40 outline outline-2 bg-transparent-to-br outline-rose-900  border-transparent text-white bg-transparent-to-br  hover:bg-gradient-to-bl focus:ring-2  focus:ring-pink-200 dark:focus:ring-pink-500 font-medium rounded-full text-sm px-5 py-5 text-center ml-3 mr-2"
                    >
                      Sell
                    </button>
                  </div>
                  <div class="grid gap-2 grid-cols-1 pt-8 ">
                    <a
                       href='/signup'
                      type="button"
                      className="w-full outline outline-2 bg-transparent-to-br outline-white-900  border-transparent text-white bg-transparent-to-br  hover:bg-gradient-to-bl focus:ring-2  focus:ring-pink-200 dark:focus:ring-pink-500 font-medium rounded-full text-sm px-5 py-5 text-center ml-3 mr-2"
                    >
                      Register Now
                    </a>
                  </div>
                  <div class="grid gap-2 grid-cols-1 pt-8 ">
                    <a href='/login'
                      type="button"
                      className="w-full outline outline-2 bg-transparent-to-br outline-white-900  border-transparent text-white bg-transparent-to-br  hover:bg-gradient-to-bl focus:ring-2  focus:ring-pink-200 dark:focus:ring-pink-500 font-medium rounded-full text-sm px-5 py-5 text-center ml-3 mr-2"
                    >
                      Log In
                    </a>
                  </div>
                  <div class="grid gap-2 grid-cols-1 pt-8 ">
                    <button
                      type="button"
                      className="w-full outline outline-2 bg-transparent-to-br outline-white-900  border-transparent text-white bg-transparent-to-br  hover:bg-gradient-to-bl focus:ring-2  focus:ring-pink-200 dark:focus:ring-pink-500 font-medium rounded-full text-sm px-5 py-5 text-center ml-3 mr-2"
                    >
                      Mock Trading
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4 mt-5 mb-20">
            <div class="col-span-2 ...">
              <div class="rounded overflow-hidden p-5 my-1 mx-1 card_style" style={{height: '100%',}}>
                <div class="grid grid-cols-3 gap-4 p-6">
                  <div class="col-span-1 font-bold text-2xl font-serif">
                    Market Trades
                  </div>
                  <div class="col-span-2 ...">
                    <div
                      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 float-right"
                      id="navbar-sticky"
                    >
                      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                          <button
                            className="text-white bg-gradient-to-br  from-rose-500 to-green-700 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-white-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          >
                            Market
                          </button>
                        </li>
                        <li>
                          <button
                            className="text-white bg-gradient-to-br from-rose-500 to-green-700 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-white-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          >
                            Trade
                          </button>
                        </li>
                        <li>
                          <button
                            className="text-white bg-gradient-to-br from-rose-500 to-green-700 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-white-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          >
                            More
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-4 mt-8" style={{ overflowY: 'auto', height: '300px' }}>
                  <table className="table-auto ">
                    <thead className="text-center p-6 border-b-2 border-gray-500">
                      <tr>
                        <th>Time</th>
                        <th>Price (ETH)</th>
                        <th>Amount (BTC)</th>
                        <th>Total (ETH)</th>
                      </tr>
                    </thead>
                    <tbody className="text-center overflow-auto">
                      {itemsToDisplay.map((item, index) => (
                        <tr key={index}>
                          <td>{item.time}</td>
                          <td>{item.price}</td>
                          <td>{item.amount}</td>
                          <td>{item.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                 
                  <div class="grid grid-cols-1 gap-4 mt-8">
                  <div className="pagination">
                      <select
                        value={optionPage}
                        onChange={handleSelectPage}
                        className="appearance-none px-5 py-2 pl-3 text-xl bg-transparent-to-br hover:bg-gradient-to-bl text-white font-bold font-serif outline outline-1 outline-gray-500 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-400 font-medium rounded-lg text-sm"
                        name="whatever"
                        id="frm-whatever"
                        style={{ background: "#272833" }}
                      >
                        <option class="custom-option" value="10">
                          10
                        </option>
                        <option class="custom-option" value="20">
                         20
                        </option>
                        <option class="custom-option" value="50">
                          50
                        </option>
                        <option class="custom-option" value="100">
                          100
                        </option>
                        <option class="custom-option" value="1000">
                          1000
                        </option>
                      </select>
                      <span className="pagination-page-number"></span>
                    <button
                      className="appearance-none px-5 py-2 pl-3 text-xl bg-gradient-to-br from-rose-500 to-green-700 hover:bg-gradient-to-bl text-white font-bold font-serif outline outline-1 outline-gray-500 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-400 font-medium rounded-lg text-sm"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    <span className="pagination-page-number">{currentPage}</span>
                    <button
                      className="appearance-none px-5 py-2 pl-3 text-xl bg-gradient-to-br from-rose-500 to-green-700 hover:bg-gradient-to-bl text-white font-bold font-serif outline outline-1 outline-gray-500 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-400 font-medium rounded-lg text-sm"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={endIndex >= data.length}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="">
              <div class="min-h-fit rounded overflow-hidden p-5 my-1 mx-1 card_style">
                <div class="grid gap-2 grid-cols-2 mb-10">
                  <div class="grid gap-2 grid-cols-2 p-3">
                    <p class="font-bold text-white-700 text-2xl m-3 font-serif ml-3">
                      Exchange
                    </p>
                  </div>
                  <div>
                    <img
                      class="w-1/1 float-right mt-3"
                      src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/exchange-white.svg"
                      alt="Sunset circle"
                    />
                  </div>
                </div>

                <div class="grid gap-2 grid-cols-3 my-5">
                  <div class="mt-3">
                    <p class="text-white-700 text-3xl font-bold font-serif ml-6">
                      1{" "}
                      <span class="text-red-500 text-xl font-bold font-serif ml-9">
                        BTC
                      </span>
                    </p>
                  </div>
                  <div class="mt-1">
                    <img
                      class="h-12 w-10 ml-10 animate__animated animate__flash animate__delay-0s animate__infinite infinite"
                      src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/arrow-right-white.svg"
                    />
                  </div>
                  <div class=" flex rounded-t-lg mt-4 animate__animated animate__flash animate__delay-0s animate__infinite infinite">
                    <span class="text-lg font-bold text-gray-500 trade_colorCode_1">
                      53,260.20 USD
                    </span>
                  </div>
                </div>

                <div>
                  <div class="grid gap-2 grid-cols-1">
                    <div>
                      <h1
                        class="text--gray-500 text-xl m-3 font-serif ml-6"
                        style={{ color: "#5d6588" }}
                      >
                        {" "}
                        Get
                      </h1>
                      <div class="flex rounded-t-lg animate__animated animate__flash animate__delay-0s animate__infinite infinite"></div>
                    </div>
                  </div>

                  <div class="grid gap-2 grid-cols-2  border-b-2 border-gray-500">
                    <div class="grid gap-2 grid-cols-2 p-3 flex">
                      <div class="leading-normal font-bold text-2xl m-3 font-serif ml-3 ">
                        <input
                          type="text"
                          name="value"
                          placeholder="4000"
                          class="bg-transparent outline-0 contrast-more:placeholder-white-800"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="mt-3 float-right mr-3">
                        <select
                          value={optionCurrentBlance}
                          onChange={handleSelectChangeCurrentBlance}
                          className="appearance-none w-full bg-transparent outline-0 font-bold text-xl font-serif py-5 px-5 contrast-more:placeholder-white-800 text-center"
                          name="whatever"
                          id="frm-whatever"
                        >
                          <option class="custom-option" value="BTC">
                            BTC
                          </option>
                          <option class="custom-option" value="USD">
                            USD
                          </option>
                          <option class="custom-option" value="BTC">
                            BTC
                          </option>
                          <option class="custom-option" value="ETH">
                            ETH
                          </option>
                          <option class="custom-option" value="BNB">
                            BNB
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="grid gap-1 grid-cols-2 mt-5">
                    <h2
                      class="text-white-700 text-xl font-serif ml-6"
                      style={{ color: "#5d6588" }}
                    >
                      Pay
                    </h2>
                  </div>

                  <div class="grid gap-2 grid-cols-2  border-b-2 border-gray-500">
                    <div class="grid gap-2 grid-cols-2 p-3 flex">
                      <div class="leading-normal font-bold text-2xl m-3 font-serif ml-3 ">
                        <input
                          type="text"
                          name="value"
                          placeholder="4000"
                          class="bg-transparent outline-0 contrast-more:placeholder-white-800"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="mt-3 float-right mr-3">
                        <select
                          value={optionValume}
                          onChange={handleSelectChangeValume}
                          className="appearance-none w-full bg-transparent outline-0 font-bold text-xl font-serif py-5 px-5 contrast-more:placeholder-white-800 text-center"
                          name="whatever"
                          id="frm-whatever"
                        >
                          <option class="custom-option" value="BTC">
                            BTC
                          </option>
                          <option class="custom-option" value="USD">
                            USD
                          </option>
                          <option class="custom-option" value="BTC">
                            BTC
                          </option>
                          <option class="custom-option" value="ETH">
                            ETH
                          </option>
                          <option class="custom-option" value="BNB">
                            BNB
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="grid gap-2 grid-cols-1 pt-8 ">
                    <button
                      type="button"
                      className="w-full outline outline-2 outline-blue-500  border-transparent text-white bg-gradient-to-br from-rose-500 to-green-700 hover:bg-gradient-to-bl  hover:bg-gradient-to-bl focus:ring-2  focus:ring-green-200 dark:focus:ring-green-400 font-medium rounded-full text-sm px-5 py-5 text-center mr-3"
                    >
                      Exchange
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
