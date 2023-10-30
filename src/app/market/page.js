"use client";
// import "../../component/exchangePage/ecxhange.css";
import NavPage from "../../component/landingPage/navpage";
import "../component/landingPage/customeStyle.css";
import "animate.css";
import React, { useEffect, useState } from "react";
import CarouselsPage from '../../component/market/carousel';

export default function Market() {

  const [currentPage, setCurrentPage] = useState(1);
  const [optionPage, setOptionPage] = useState(10);

  const data = Array.from({ length: 2*optionPage }, (_, index) => ({
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

  const startIndex = (currentPage - 1) * optionPage;
  const endIndex = startIndex + optionPage;
  const itemsToDisplay = data.slice(startIndex, endIndex);
  return (
    <div>
      <NavPage />
      <div className="flex flex-col items-center justify-between pt-24">
        <div className="container" style={{ overflow: "hidden" }}>
            <CarouselsPage />
          <div className="grid grid-cols-1 gap-4 mt-5 mb-10">
          <div class="rounded overflow-hidden p-5 my-1 mx-1 card_style" style={{height: '100%',}}>
                <div class="grid grid-cols-3 gap-4 p-6">
                  <h2 class="col-span-1 font-bold text-2xl font-serif text-rainbow-animations_1">
                    Market Place
                  </h2>
                  <div class="col-span-2 ...">
                    <div
                      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 float-right"
                      id="navbar-sticky"
                    >
                      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                          <button
                            className="text-white bg-gradient-to-br from-yellow-300 to-white-200 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-white-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          >
                            All Assets
                          </button>
                        </li>
                        <li>
                          <button
                            className="text-white bg-gradient-to-br from-yellow-300 to-white-200 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-white-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          >
                            Gainers
                          </button>
                        </li>
                        <li>
                          <button
                            className="text-white bg-gradient-to-br  from-yellow-300 to-white-200 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-white-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          >
                           Gainers
                          </button>
                        </li>
                        <li>
                          <button
                            className="text-white bg-gradient-to-br  from-yellow-300 to-white-200 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-white-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          >
                           Tradeble
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-4 mt-8" style={{ overflowY: 'auto', height: '300px' }}>
                  <table className="table-auto m-5 ">
                    <thead className="text-center  p-3 mb-3 border-b-2 border-gray-500">
                      <tr>
                        <th className="market_table_header text-xl font-serif" style={{float:'left'}}>Assets</th>
                        <th className="market_table_header text-xl font-serif">Last Price</th>
                        <th className="market_table_header text-xl font-serif">Market Cap</th>
                        <th className="market_table_header text-xl font-serif">Change</th>
                        <th className="market_table_header text-xl font-serif"  style={{float:'left'}}>Chart</th>
                        <th className="market_table_header text-xl font-serif">Trade</th>
                      </tr>
                    </thead>
                    <tbody className="text-center text-md font-serif overflow-auto">
                      {itemsToDisplay.map((item, index) => (
                        <tr key={index}>
                          <td><div className="flex text-center"><img className="w-7 mr-10" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-btc.svg"  alt={index}/><span className="">BTC</span></div></td>
                          <td>Bitcoin</td>
                          <td>{item.amount}</td>
                          <td className="text-emerald-300 animate__animated animate__flash animate__delay-0s animate__infinite	infinite">0.25%</td>
                          <td><img className="w-12"  src='/stok.svg' /></td>
                         
                          <td><button
                            className="text-white bg-gradient-to-br from-rose-500 to-green-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-white-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          >
                            Buy
                          </button></td>
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
      </div>
    </div>
  );
}
