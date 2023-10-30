"use client";
import "../../component/wallet/wallet.css";
import "../component/landingPage/customeStyle.css";
import NavPage from "../../component/landingPage/navpage";
import "animate.css";
import Chart from 'react-apexcharts';
import React, { useEffect, useState } from "react";

export default function Wallet() {
  const [currentPage, setCurrentPage] = useState(1);
  const [optionPage, setOptionPage] = useState(10);
  const [showModal, setShowModal] = React.useState(false);
  const data = Array.from({ length: optionPage }, (_, index) => ({
    time: '12:34:44',
    price: '243546.12443536',
    amount: '12425.21435364',
    total: '12425.21435364',
  }));
  // paggination
  const handleSelectPage = (e)=>{
    setOptionPage(e.target.value)
  }
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(currentPage ,"currentPage");

  const startIndex = (currentPage - 1) * optionPage;
  const endIndex = startIndex + optionPage;
  const itemsToDisplay = data.slice(startIndex, endIndex);
  

  const optionsCircle1 = {
    chart: {
      type: 'radialBar',
      height: 150,
      zoom: {
        enabled: false,
      },
      offsetY: 20,
    },
    colors: ['#6c5ccd'],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 0,
          },
        },
      },
    },
    series: [50.35],
    theme: {
      monochrome: {
        enabled: false,
      },
    },
    legend: {
      show: false,
    },
    title: {
      // text: 'Bounce Rate',
      align: 'left',
    },
  };

  const optionsCircle2 = {
    chart: {
      type: 'radialBar',
      height: 150,
      zoom: {
        enabled: false,
      },
      offsetY: 20,
    },
    colors: ['#099565'],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 0,
          },
        },
      },
    },
    series: [30.25],
    theme: {
      monochrome: {
        enabled: false,
      },
    },
    legend: {
      show: false,
    },
    title: {
      // text: 'Bounce Rate',
      align: 'left',
    },
  };
  // Simulating the randomizeArray function
  const randomizeArray = (data) => data.map(() => Math.floor(Math.random() * 100));

  // Generate some example data for sparkline
  const sparklineData = [...Array(24).keys()];

  var spark3 = {
      chart: {
        id: 'sparkline3',
        group: 'sparklines',
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'straight',
      },
      fill: {
        opacity: 1,
      },
      series: [
        {
          name: 'Profits',
          data: randomizeArray(sparklineData),
        },
      ],
      labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        min: 0,
      },
      colors: ['#099565'],
      title: {
        // text: '$135,965',
        offsetX: 30,
        style: {
          fontSize: '24px',
          cssClass: 'apexcharts-yaxis-title',
        },
      },
      subtitle: {
        // text: 'Profits',
        offsetX: 30,
        style: {
          fontSize: '14px',
          cssClass: 'apexcharts-yaxis-title',
        },
      },
  }

  var chart1 = {
    chart: {
      id: 'sparkline3',
      group: 'sparklines',
      type: 'area',
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      opacity: 5,
    },
    series: [{
      name: 'series1',
      data: [10, 80, 95, 200, 90, 30, 5]
    }, {
      name: 'series2',
      data: [11, 32, 150, 32, 109, 90, 10]
    }],
    dataLabels: {
      enabled: false
    },
    yaxis: {
      min: 0,
    },
    colors: ['#099565','#6c5ccd'],
    title: {
      // text: '$135,965',
      offsetX: 30,
      style: {
        fontSize: '24px',
        cssClass: 'apexcharts-yaxis-title',
      },
    },
    subtitle: {
      // text: 'Profits',
      offsetX: 30,
      style: {
        fontSize: '14px',
        cssClass: 'apexcharts-yaxis-title',
      },
    },
}

  return (
    <div>
      <NavPage />
      <div className="flex flex-col items-center justify-between pt-24">
        <div className="container" style={{ overflow: "hidden" }}>
          <div class="grid grid-cols-4 gap-2 pt-12 card_style">
            <div
              className="my-1 mx-1 card_style h-5/6 max-w-sm"
              style={{ background: "#1e1f25" }}
            >
              <div className="">
                <div className="flex items-center justify-between">
                  <img
                    className="p-4 rounded-t-lg w-20"
                    style={{ width: "5.3rem" }}
                    src="	https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-btc.svg"
                  />
                   <span className="text-2xl font-serif text-white-500" style={{marginLeft:'-31%'}}>
                     BTC 
                    </span>
                  
                  <div className="flex items-center justify-between p-2">
                     <img
                      className="p-3 rounded-t-lg animate__animated animate__flash animate__delay-0s animate__infinite	infinite"
                      src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/arrow-bullish.svg"
                    />
                    <span className="text-1xl font-bold text-green-600 animate__animated animate__flash animate__delay-0s animate__infinite	infinite ">
                      0.33%
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-1">
                <div className="items-center justify-between">
                  <p className="ml-5 text-3xl font-bold text-white-900 ">
                  0.2133214214
                  </p>
                  <p className="ml-5 p-1 text-1xl font-bold text-white-900 ">
                    3,230.98 USD
                    </p>
                </div>
              </div>
              <div className="items-center" style={{marginBottom:'12%'}}>
                <Chart options={chart1} series={chart1.series} type="area" height={100} />
              </div>
            </div>

            <div
              className="my-1 mx-1 card_style h-5/6 max-w-sm"
              style={{ background: "#1e1f25" }}
            >
              <div className="">
                <div className="flex items-center justify-between">
                  <img
                    className="p-4 rounded-t-lg w-20"
                    style={{ width: "5.3rem" }}
                    src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/ETH.svg"
                  />
                   <span className="text-2xl font-serif text-white-500" style={{marginLeft:'-6rem'}}>
                      ETH 
                    </span>
                    
                  <div className="flex items-center justify-between p-2">
                     <img
                      className="p-3 rounded-t-lg animate__animated animate__flash animate__delay-0s animate__infinite	infinite"
                      src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/arrow-bearish.svg"
                    />
                    <span className="text-1xl font-bold text-red-500 animate__animated animate__flash animate__delay-0s animate__infinite	infinite ">
                    0.12%
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-1">
                <div className="items-center justify-between">
                  <p className="ml-5 text-3xl font-bold text-white-900 ">
                  0.3454364
                  </p>
                  <p className="ml-5 p-1 text-1xl font-bold text-white-900 ">
                    2,345.21 USD
                  </p>
                </div>
              </div>
              <div className="items-center" style={{marginBottom:'11%'}}>
                <Chart options={chart1} series={chart1.series} type="area" height={100} />
              </div>
            </div>

            <div
              className="my-1 mx-1 card_style h-5/6 max-w-sm "
              style={{ background: "#1e1f25" }}
            >
              <div className="">
                <div className="flex items-center justify-between">
                  <img
                    className="p-4 rounded-t-lg w-20"
                    style={{ width: "5.3rem" }}
                    src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/USDT.svg"
                  />
                   <span className="text-2xl font-serif text-white-500" style={{marginLeft:'-6rem'}}>
                     USDT
                    </span>
                  
                  <div className="flex items-center justify-between p-1">
                     <img
                      className="p-3 rounded-t-lg animate__animated animate__flash animate__delay-0s animate__infinite	infinite"
                      src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/arrow-bullish.svg"
                    />
                    <span className="text-1xl font-bold text-green-600 animate__animated animate__flash animate__delay-0s animate__infinite	infinite">
                    0.56%
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-1">
                <div className="items-center justify-between">
                  <p className="ml-5 text-3xl font-bold text-white-900 ">
                  0.3454364
                  </p>
                  <p className="ml-5 p-1 text-1xl font-bold text-white-900 ">
                    2,345.21 USD
                    </p>
                </div>
              </div>
              
              <div className="items-center" style={{marginBottom:'12%'}}>
                <Chart options={chart1} series={chart1.series} type="area" height={100} />
              </div>
            </div>

            <div
              className="my-1 mx-1 card_style h-5/6 max-w-sm bg-white border-dotted border-2 border-white-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              style={{ background: "#1e1f25" }}
            >
             
              <div className="p-2">
                <div className="items-center justify-between text-center mt-24">
                <button
                    className="bg-gray-800 text-white active:bg-gray-800 outline outline-2 outline-emerald-100   font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                   Add Wallet
                </button>
                  
                </div>
              </div>
              
            </div>

            <div className="h-5/6 max-w-sm my-1 mx-1 card_style"
              style={{ background: "#1e1f25" }}
            >
              <div className="">
                <div className="flex items-center">
                  <img
                    className="p-4 rounded-t-lg w-20"
                    style={{ width: "5.3rem" }}
                    src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-eth.svg"
                     />
                   <span className="text-2xl font-serif text-white-500">
                    ETH 
                </span>
                </div>
              </div>

             
              <div className="my-3 mx-5 items-center">
              <p className="text-xl font-serif text-gray-600">
              Total Balance
                </p>
                <p className="text-3xl font-bold font-serif text-white-500">
                0.2133214214
                </p>
                <p className="text-xl font-serif text-gray-600">
                3,230.98 USD
                </p>
              </div>

              <div class="grid grid-cols-2 gap-2 mx-3 my-5  card_style" style={{background:'#272833'}}>
              <div className="items-center ml-3 mx-1 my-1 ">
              <p className="flex text-lg font-serif text-gray-600">
              Exchange Balance
                </p>
                <p className="text-3xl font-bold font-serif text-white-500">
                0.2133214214
                </p>
                <p className="text-xl font-serif text-green-600">
                3,230.98 USD
                </p>
              </div>
              <div className="items-center" style={{marginTop:'-2rem'}}>
                <Chart options={optionsCircle1} series={optionsCircle1.series} type="radialBar" height={150} />
              </div>
              </div>

              <div class="grid grid-cols-2 gap-2 mx-3 my-3 card_style" style={{background:'#272833'}}>
              <div className="items-center ml-3 mx-1 my-1 ">
              <p className="text-xl font-serif text-gray-600">
              Assets Balance
                </p>
                <p className="text-3xl font-bold font-serif text-white-500">
                0.2133214214
                </p>
                <p className="text-xl font-serif text-green-600">
                3,230.98 USD
                </p>
              </div>
              <div className="items-center" style={{marginTop:'-2rem'}}>
                <Chart options={optionsCircle2} series={optionsCircle2.series} type="radialBar" height={150} />
              </div>
              </div>

              <div class="grid grid-cols-2 gap-2 mx-3 my-10">
              <div className="items-center ml-3 mx-1 my-1 ">
              <button
                className="bg-blue-800 text-white active:bg-gray-800 outline outline-1 outline-white font-bold  text-sm px-6 py-3 rounded-full shadow hover:shadow-lg  mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                 >
                  Withdrow
                </button>
              </div>
              <div className="items-center text-center ">
              <button
                className="bg-gray-800 text-white active:bg-gray-800 outline outline-1 outline-white font-bold text-sm px-6 py-3 rounded-full shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                 >
                  Deposit
                </button>
              </div>
              </div>
            </div>

            <div className="col-span-3 my-1 mx-1 mb-5 card_style" >
            <div class="grid grid-cols-1 gap-4" style={{overflowX: 'hidden',overflowY:'scroll', height:'83%'}}>
              <table className="table-auto m-5 position-fixed">
                <thead className="text-center p-3 mb-3 border-b-2 border-gray-500">
                  <tr>
                    <th
                      className="market_table_header text-xl font-serif"
                      style={{ float: "left" }}
                    >
                      Assets
                    </th>
                    <th className="market_table_header text-xl font-serif">
                      Last Price
                    </th>
                    <th className="market_table_header text-xl font-serif">
                      Market Cap
                    </th>
                    <th className="market_table_header text-xl font-serif">
                      Change
                    </th>
                    <th
                      className="market_table_header text-xl font-serif"
                      style={{ float: "left" }}
                    >
                      Chart
                    </th>
                    <th className="market_table_header text-xl font-serif">
                      Trade
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center text-md font-serif overflow-auto">
                  {itemsToDisplay.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="flex text-center">
                          <img
                            className="w-7 mr-10"
                            src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-btc.svg"
                            alt={index}
                          />
                          <span className="">BTC</span>
                        </div>
                      </td>
                      <td>Bitcoin</td>
                      <td>{item.amount}</td>
                      <td className="text-emerald-300 animate__animated animate__flash animate__delay-0s animate__infinite	infinite">
                        0.25%
                      </td>
                      <td>
                        <img className="w-12" src="/stok.svg" />
                      </td>

                      <td>
                        <button className="text-white bg-gradient-to-br from-rose-500 to-green-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-white-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                          Buy
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
              <div class="grid grid-cols-1 gap-4">
                  <div className="pagination">
                      <select
                        value={optionPage}
                        onChange={handleSelectPage}
                        className="appearance-none px-5 py-2 pl-3 text-xl bg-transparent-to-br hover:bg-gradient-to-bl text-white font-bold font-serif outline outline-1 outline-gray-500 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-400 font-medium rounded-lg text-sm"
                        name="whatever"
                        id="frm-whatevers"
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
                      className="appearance-none px-5 py-2 pl-3 text-xl bg-gradient-to-br from-yellow-300 to-white-200 hover:bg-gradient-to-bl text-white font-bold font-serif outline outline-1 outline-gray-500 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-400 font-medium rounded-lg text-sm"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    <span className="pagination-page-number">{currentPage}</span>
                    <button
                      className="appearance-none px-5 py-2 pl-3 text-xl bg-gradient-to-br from-yellow-300 to-white-200 hover:bg-gradient-to-bl text-white font-bold font-serif outline outline-1 outline-gray-500 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-400 font-medium rounded-lg text-sm"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={endIndex >= data.length}
                    >
                      Next
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {showModal ? (
          <>
          <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl text-black font-serif font-semibold">
                    Add New Wallet
                  </h3>
                  <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                  >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                      </span>
                  </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                  <div className="relative w-full max-w-md max-h-full">
                      <div className="relative bg-dark rounded-lg shadow dark:bg-gray-700">
                          <div className="px-6 py-6 lg:px-8">
                              {/* <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3> */}
                              <form className="space-y-6" action="#">
                                  <div>
                                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                  </div>
                                  <div>
                                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                  </div>
                                  <div className="flex justify-between">
                                      <div className="flex items-start">
                                          <div className="flex items-center h-5">
                                              <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                          </div>
                                          <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                      </div>
                                      <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                                  </div>
                                  <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                      Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                  >
                      Close
                  </button>
                  <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                  >
                      Save Changes
                  </button>
                  </div>
              </div>
              </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
      ) : null}
      </div>
    </div>
  );
}
