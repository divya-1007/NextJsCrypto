/* eslint-disable @next/next/no-img-element */
// "use client";
import "./ost.css";
import "./customeStyle.css";
import "animate.css";
import Carousels from './carousel';
import Typewriter from 'typewriter-effect';
import $ from "jquery";

export default function LandingPage() {
  const lines = [
    'A trusted and secure cryptocurrency exchange',
    'A trusted and secure cryptocurrency exchange',
  ];
  const line = [
    'Your guide to the world of an open financial system. ',
    'Get started with the easiest and most secure platform ',
    'to buy and trade cryptocurrency.',
  ]


  return (
    <div id="landing_pages">
  

      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"  style={{backgroundColor:"#1e1f25"}}>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">ALPHA TRADING</span>
        </a>
        <div class="flex md:order-2">
            <button type="button" class="text-white bg-gradient-to-br from-orange-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Get started</button>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a href="/" class="text-white bg-gradient-to-br from-orange-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-800 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="text-white bg-gradient-to-br from-orange-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Exchange</a>
            </li>
            <li>
              <a href="#" class="text-white bg-gradient-to-br  from-orange-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Market</a>
            </li>
            <li>
              <a href="#" class="text-white bg-gradient-to-br from-orange-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Trade</a>
            </li>
            <li>
              <a href="#" class="text-white bg-gradient-to-br from-orange-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">More</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>


      <section className="hero hero-v2">
        <div className="hero__background hero__background--grid">
          <img
            className="hero__grid-bg"
            src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/landing-page-v2/landing-page-v2-hero-grid-bg.png"
            alt="Background Grid Hero"
          />
        </div>

        <div className="hero__background hero__background--pattern">
          <img
            className="hero__pattern-bg animate__animated animate__flash animate__delay-1s animate__infinite infinite"
            src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/landing-page-v2/landing-page-v2-hero-pattern.png"
            alt="Background Pattern Hero"
          />
        </div>
        <div className="container">
          <div className="hero__container">
            <div
              className="hero__content aos-init aos-animate"
              data-aos="fade-right"
            >
              <h1 className="text-rainbow-animation">A trusted and secure cryptocurrency exchange</h1>
              <div className="rainbow-animation">
                {/* A trusted and secure cryptocurrency exchange. */}
         
              <svg viewBox="">
              <symbol id="s-text">
              <text text-anchor="small" x="10%" y="40%">Alpha </text>
                {/* <text text-anchor="middle" x="50%" y="50%"> A trusted and</text> */}
              </symbol>

              <g class = "g-ants">
                <use xlinkHref="#s-text" class="text-copy"></use>
                <use xlinkHref="#s-text" class="text-copy"></use>
                <use xlinkHref="#s-text" class="text-copy"></use>
                <use xlinkHref="#s-text" class="text-copy"></use>
                <use xlinkHref="#s-text" class="text-copy"></use>
              </g>
            </svg>
            <div class="content_1">
            <h2>Trading </h2>
            <h2>Trading</h2>
          </div>
            </div>
           

                      
              {/* <Typewriter className="hero__subtitle"
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  // padding: '10%',
                  background: 'linear-gradient(to right, #8f0a32 -0.27%, #FFC107 98.59%, #1E68F6 -0.26%, #df1b0d)',
                  '-webkit-text-fill-color': 'transparent',
                  '-webkit-background-clip': 'text'
                }}
                options={{
                  strings: line,
                  autoStart: true,
                  loop: true,
                  pauseFor: 300,
                }}
              /> */}

              <a href="#" className="btn btn-primary btn-lg btn-pill hero__link">
                Get Started Now
              </a>
            </div>
            <div
              className="hero__illustration aos-init aos-animate animate__animated animate__pulse animate__infinite	infinite"
              data-aos="zoom-in-up"
              data-aos-delay="100"
            >
              <img
                src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/landing-page-v2/landing-page-v2-hero-illustration.png"
                alt="Hero Illustration"
              />
            </div>
          </div>
        </div>

        <div class="container crypto-graph aos-init aos-animate" data-aos="fade-up">
          <div class="crypto-graph-carousel slick-initialized slick-slider slick-dotted">
            <Carousels />
          </div>
        </div>
      </section>


      <section class="feature">
        <div class="feature__background feature__background--pattern">
          <img class="feature__pattern-bg hero__pattern-bg" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/landing-page-v2/landing-page-v2-mobile-apps-pattern.png" alt="Background Pattern Feature" />
        </div>
        <div class="container">
          <div class="feature__container">
            <div class="feature__group">
              <div class="feature__items feature__items--1 aos-init aos-animate" data-aos="zoom-in-up" data-aos-delay="100">
                <div class="feature-items__img animate__animated animate__pulse animate__delay-1s animate__infinite infinite">
                  <img src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/icon-portofolio-manager.svg" alt="Portofolio Manager" />
                </div>
                <h5 class="feature-items__title" style={{ background: 'linear-gradient(to right, #ffffff -0.27%, #ffffff -0.26%, #FF5722 98.59%, #eedd44)', '-webkit-text-fill-color': 'transparent', '-webkit-background-clip': 'text', }}>Portfolio Manager</h5>
                <p class="fb-regular feature-items__desc">Buy and sell popular digital currencies, keep track of them in the one place.</p>
              </div>
              <div class="feature__items feature__items--2 aos-init aos-animate" data-aos="zoom-in-up" data-aos-delay="200">
                <div class="feature-items__img animate__animated animate__pulse animate__delay-1s animate__infinite infinite">
                  <img src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/phone.svg" alt="Mobile Apps" />
                </div>
                <h5 class="feature-items__title" style={{ background: 'linear-gradient(to right, #ffffff -0.27%, #ffffff -0.26%, #ba46f4 98.59%, #c058f5)', '-webkit-text-fill-color': 'transparent', '-webkit-background-clip': 'text', }}>Mobile Apps</h5>
                <p class="fb-regular feature-items__desc">Stay on top of the markets with the Cryptolly app for Android or iOS.</p>
              </div>
              <div class="feature__items feature__items--3 aos-init aos-animate" data-aos="zoom-in-up" data-aos-delay="300">
                <div class="feature-items__img animate__animated animate__pulse animate__delay-1s animate__infinite infinite">
                  <img src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/lock.svg" alt="Vault protection" />
                </div>
                <h5 class="feature-items__title" style={{ background: 'linear-gradient(to right, #ffffff -0.27%, #ffffff -0.26%, #1aa29f 98.59%, #1ba09d)', '-webkit-text-fill-color': 'transparent', '-webkit-background-clip': 'text', }}>Vault protection</h5>
                <p class="fb-regular feature-items__desc">For added security, store your funds in a vault with time delayed withdrawals.</p>
              </div>
            </div>
            <div class="feature__content aos-init aos-animate" id="landing_section_2" data-aos="fade-up" data-aos-duration="500">
              <h2 class="feature__title text-rainbow-animation " >The most trusted cryptocurrency platform.</h2>
              <p class="fb-regular feature__subtitle">Cryptolly has a variety of features that make it the best place to start trading</p>
              <a href="#" class="btn btn-primary btn-lg btn-pill hero__link feature__button" style={{ marginLeft: '12rem' }}>Let’s Trade Now</a>
            </div>
          </div>
        </div>
      </section>

      <section class="exchange">
        <div class="exchange__background exchange__background--pattern">
          <img class="exchange__pattern-bg" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/landing-page-v2/landing-page-v2-exchange-pattern.png" alt="Background Pattern Exchange" />
        </div>
        <div class="container">
          <div class="exchange__container">
            <div class="exchange__content">
              <h2 class="exchange__title aos-init aos-animate animate-charcter " data-aos="fade-up">One click, instant payout with credit or debit card.</h2>
              <p class="fb-regular exchange__subtitle aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">Become a crypto owner in minutes using your debit or credit card and quickly purchase top cryptocurrencies.</p>
              <div class="exchange__groups">
                <div class="exchange__items exchange__items--1 aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">
                  <div class="exchange-items__icons animate__animated animate__pulse animate__delay-1s animate__infinite infinite">
                    <img src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/add-user.svg" alt="Add User" />
                  </div>
                  <div class="exchange-items__detail">
                    <h5 class="exchange-title">Create an account</h5>
                  </div>
                </div>
                <div class="exchange__items exchange__items--2 aos-init aos-animate" data-aos="fade-right" data-aos-delay="400">
                  <div class="exchange-items__icons animate__animated animate__pulse animate__delay-1s animate__infinite infinite">
                    <img src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/bank.svg" alt="Bank" />
                  </div>
                  <div class="exchange-items__detail">
                    <h5 class="exchange-title_1">Link your bank account</h5>
                  </div>
                </div>
                <div class="exchange__items exchange__items--3 aos-init aos-animate" data-aos="fade-right" data-aos-delay="500">
                  <div class="exchange-items__icons animate__animated animate__pulse animate__delay-1s animate__infinite infinite">
                    <img src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/wallet.svg" alt="Wallet" />
                  </div>
                  <div class="exchange-items__detail">
                    <h5 class="exchange-title_2">Start buying &amp; selling</h5>
                  </div>
                </div>
              </div>
            </div>
          <div >
            <div class="buy-sell-cards buy-sell-cards--v2 aos-init aos-animate" data-aos="zoom-in-up" data-aos-delay="600" >
              <div class="buy-sell-cards__container animate__animated animate__delay-1s animate__infinite infinite">
                <div class="buy-sell-cards__header nav nav-tabs" id="buySellTab" role="tablist">
                  <div class="nav-item" role="presentation">
                    <button class="nav-link fb-lg--bold buy-sell-cards__link active" id="buy-tab" data-bs-toggle="tab" data-bs-target="#buy-tab-pane" type="button" role="tab" aria-controls="buy-tab-pane" aria-selected="true">Buy</button>
                  </div>
                  <div class="separator"></div>
                  <div class="nav-item" role="presentation">
                    <button class="nav-link fb-lg--bold buy-sell-cards__link" id="sell-tab" data-bs-toggle="tab" data-bs-target="#sell-tab-pane" type="button" role="tab" aria-controls="sell-tab-pane" aria-selected="false" tabindex="-1">Sell</button>
                  </div>
                </div>


                <div class="tab-content" id="buySellTabContent">

                  <div class="tab-pane fade active show" id="buy-tab-pane" role="tabpanel" aria-labelledby="buy-tab" tabindex="0">
                    <div class="buy-sell-cards__detail">
                      <div class="buy-sell-cards__detail--prices">
                        <p class="fb-regular notes">1 BTC is roughly</p>
                        <p class="fd-md fd-md--bold value">53,260.20<span class="fb-lg currency">USD</span></p>
                      </div>
                      <div class="buy-sell-cards__detail--rewards">
                        <p class="fb-regular rewards">Claim <span class="fb-regular fb-regular--bold">$10</span> in Rewards</p>
                      </div>
                    </div>
                    <div class="buy-sell-cards__forms">
                      <div class="d-block forms-purchase__box">
                        <div class="forms-purchase">
                          <div class="forms-group forms-group--value">
                            <input type="text" min="0" value="4000" class="form-control forms-purchase__value" />
                          </div>
                          <div class="forms-purchase__line"></div>

                          {/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option class="forms-group__items selected" selected value="usd">USD </option>
                            <option value="usd">USD</option>
                            <option value="btc">BTC</option>
                            <option value="eth">ETH</option>
                            <option value="bnb">BNB</option>
                          </select>


                          {/* <div class="forms-group forms-group--purchase js-forms-group--purchase"id="custom-select1">
                            <div class="forms-group__items selected" data-selected="usd">
                              <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/usd.svg" alt="" />
                              <p class="fg-items__value">USD</p>
                            </div>
                            <img class="forms-currency__icon-arrow-down" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/arrow-down.svg" alt="" />
                            <div class="forms-group__dropdown js-forms-group__dropdown">
                              <div class="forms-group__items active" data-selected="usd">
                                <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/usd.svg" alt="" />
                                <p class="fg-items__value">USD</p>
                              </div>
                              <div class="forms-group__items" data-selected="btc">
                                <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-btc.svg" alt="" />
                                <p class="fg-items__value">BTC</p>
                              </div>
                              <div class="forms-group__items" data-selected="eth">
                                <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-eth.svg" alt="" />
                                <p class="fg-items__value">ETH</p>
                              </div>
                              <div class="forms-group__items" data-selected="bnb">
                                <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-bnb.svg" alt="" />
                                <p class="fg-items__value">BNB</p>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                      <div class="d-block forms-purchase__box">
                        <div class="forms-purchase">
                          <div class="forms-group forms-group--value">
                            <input type="text" min="0" value="0.074153" class="form-control forms-purchase__value" />
                          </div>
                          <div class="forms-purchase__line"></div>
                          <select id="custom-select2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option class="forms-group__items selected" selected value="btc">BTC </option>
                            <option value="btc">BTC</option>
                            <option value="usd">USD</option>
                            <option value="eth">ETH</option>
                            <option value="bnb">BNB</option>
                          </select>
                          {/* <div class="forms-group forms-group--purchase js-forms-group--purchase" id="custom-select2">
                            <div class="forms-group__items selected" data-selected="btc">
                              <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-btc.svg" alt="" />
                              <p class="fg-items__value">BTC</p>
                            </div>
                            <img class="forms-currency__icon-arrow-down" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/arrow-down.svg" alt="" />
                            <div class="forms-group__dropdown js-forms-group__dropdown">
                              <div class="forms-group__items active" data-selected="btc">
                                <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-btc.svg" alt="" />
                                <p class="fg-items__value">BTC</p>
                              </div>
                              <div class="forms-group__items" data-selected="usd">
                                <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/usd.svg" alt="" />
                                <p class="fg-items__value">USD</p>
                              </div>
                              <div class="forms-group__items" data-selected="eth">
                                <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-eth.svg" alt="" />
                                <p class="fg-items__value">ETH</p>
                              </div>
                              <div class="forms-group__items" data-selected="bnb">
                                <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-bnb.svg" alt="" />
                                <p class="fg-items__value">BNB</p>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                      <button class="btn btn-primary btn-lg btn-pill">Buy Now</button>
                    </div>
                  </div>
                  {/* <div class="tab-pane fade" id="sell-tab-pane" role="tabpanel" aria-labelledby="sell-tab" tabIndex="0">
                    <div class="buy-sell-cards__detail">
                      <div class="buy-sell-cards__detail--prices">
                        <p class="fb-regular notes">1 BTC is roughly</p>
                        <p class="fd-md fd-md--bold value">53,260.20<span class="fb-lg currency">USD</span></p>
                      </div>
                      <div class="buy-sell-cards__detail--rewards">
                        <p class="fb-regular rewards">Claim <span class="fb-regular fb-regular--bold">$10</span> in Rewards</p>
                      </div>
                    </div>
                    <div class="buy-sell-cards__forms">
                      <div class="d-block forms-purchase__box">
                        <div class="forms-purchase">
                          <div class="forms-group forms-group--value">
                            <input type="number" min="0" value="4000" class="form-control forms-purchase__value" />
                          </div>
                          <div class="forms-purchase__line"></div>
                          <div class="forms-group forms-group--purchase js-forms-group--purchase" id="custom-select3">
                            <div class="forms-group__items selected" data-selected="usd">
                              <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/usd.svg" alt="" />
                              <p class="fg-items__value">USD</p>
                            </div>
                            <img class="forms-currency__icon-arrow-down" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/arrow-down.svg" alt="" />
                            <div class="forms-group__dropdown js-forms-group__dropdown">
                              <div class="forms-group__items active" data-selected="usd">
                                <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/usd.svg" alt="" />
                                <p class="fg-items__value">USD</p>
                              </div>
                              <div class="forms-group__items" data-selected="btc">
                                <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-btc.svg" alt="" />
                                <p class="fg-items__value">BTC</p>
                              </div>
                              <div class="forms-group__items" data-selected="eth">
                                <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-eth.svg" alt="" />
                                <p class="fg-items__value">ETH</p>
                              </div>
                              <div class="forms-group__items" data-selected="bnb">
                                <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-bnb.svg" alt="" />
                                <p class="fg-items__value">BNB</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-block forms-purchase__box">
                        <div class="forms-purchase">
                          <div class="forms-group forms-group--value">
                            <input type="number" min="0" value="0.074153" class="form-control forms-purchase__value" />
                          </div>
                          <div class="forms-purchase__line"></div>
                          <div class="forms-group forms-group--purchase js-forms-group--purchase" id="custom-select4" />
                          <div class="forms-group__items selected" data-selected="btc">
                            <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-btc.svg" alt="" />
                            <p class="fg-items__value">BTC</p>
                          </div>
                          <img class="forms-currency__icon-arrow-down" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/arrow-down.svg" alt="" />
                          <div class="forms-group__dropdown js-forms-group__dropdown">
                            <div class="forms-group__items active" data-selected="btc">
                              <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-btc.svg" alt="" />
                              <p class="fg-items__value">BTC</p>
                            </div>
                            <div class="forms-group__items" data-selected="usd">
                              <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/usd.svg" alt="" />
                              <p class="fg-items__value">USD</p>
                            </div>
                            <div class="forms-group__items" data-selected="eth">
                              <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-eth.svg" alt="" />
                              <p class="fg-items__value">ETH</p>
                            </div>
                            <div class="forms-group__items" data-selected="bnb">
                              <img class="fg-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/logo-bnb.svg" alt="" />
                              <p class="fg-items__value">BNB</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-primary btn-lg btn-pill">Buy Now</button>
                  </div> */}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section class="why-choose-us why-choose-us--v2">
        <div class="why-choose-us__background why-choose-us__background--pattern animate__animated animate__flash animate__infinite infinite">
          <img class="why-choose-us__pattern-bg" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/landing-page-v2/landing-page-v2-why-choose-us-pattern.png" alt="Background Pattern why-choose-us" />
        </div>
        <div class="container">
          <div class="why-choose-us__container">
            <img class="why-choose-us__illustration aos-init aos-animate animate__animated animate__pulse animate__infinite infinite" data-aos="zoom-in-up" data-aos-delay="300" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/landing-page-v2/landing-page-v2-why-choose-us-illustration.svg" alt="" />
            <div class="why-choose-us__content" style={{marginLeft:'22%'}}>
              <h2 class="why-choose-us__title aos-init aos-animate text-rainbow-animation_1" data-aos="fade-up">We are the most trusted cryptocurrency platform.</h2>
              <p class="fb-regular why-choose-us__subtitle aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">We believe Cryptolly is here to stay — and that a future worth building is one which opens its doors and invites everyone in.</p>
              <div class="why-choose-us__groups">
                <div class="why-choose-us__items aos-init aos-animate " data-aos="fade-right" data-aos-delay="400">
                  <div class="why-choose-us-items__header animate__animated animate__pulse animate__infinite infinite">
                    <img class="why-choose-us-items__icon " src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/eyes.svg" alt="Clarity" />
                  </div>
                  <div class="why-choose-us-items__content">
                    <h5 class="why-choose-us-item__title" style={{ background: 'linear-gradient(to right, #ffffff -0.27%, #ffffff -0.26%, #FF5722 98.59%, #eedd44)', '-webkit-text-fill-color': 'transparent', '-webkit-background-clip': 'text', width: 'fit-content', }}>Clarity</h5>
                    <p class="fb-regular why-choose-us-item__desc">
                      We help you make sense of the coins, the terms, the dense charts and market changes.
                    </p>
                  </div>
                </div>
                <div class="why-choose-us__items aos-init aos-animate " data-aos="fade-right" data-aos-delay="500">
                  <div class="why-choose-us-items__header animate__animated animate__pulse animate__infinite infinite">
                    <img class="why-choose-us-items__icon " src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/shield-done.svg" alt="Confidence" />
                  </div>
                  <div class="why-choose-us-items__content">
                    <h5 class="why-choose-us-item__title" style={{ background: 'linear-gradient(to right, #ffffff -0.27%, #ffffff -0.26%, #06d1c8 98.59%, #eedd44)', '-webkit-text-fill-color': 'transparent', '-webkit-background-clip': 'text', width: 'fit-content', }}>Confidence</h5>
                    <p class="fb-regular why-choose-us-item__desc">
                      Our markets are always up to date, sparking curiosity with <br />real-world relevance.
                    </p>
                  </div>
                </div>
                <div class="why-choose-us__items aos-init aos-animate " data-aos="fade-right" data-aos-delay="600">
                  <div class="why-choose-us-items__header animate__animated animate__pulse animate__infinite infinite">
                    <img class="why-choose-us-items__icon" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/icons/community.svg" alt="Community" />
                  </div>
                  <div class="why-choose-us-items__content" >
                    <h5 class="why-choose-us-item__title" style={{ background: 'linear-gradient(to right, #ffffff -0.27%, #ffffff -0.26%, #b846f5 98.59%, #eedd44)', '-webkit-text-fill-color': 'transparent', '-webkit-background-clip': 'text', width: 'fit-content', }}>Community</h5>
                    <p class="fb-regular why-choose-us-item__desc">
                      We supports the crypto community, putting data in the hands which need it most.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mobile-platform mobile-platform--v2">
        <div class="mobile-platform__background mobile-platform__background--grid">
          <img class="mobile-platform__grid-bg" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/landing-page-v2/landing-page-v2-hero-grid-bg.png" alt="Background Grid Mobile Platform" />
        </div>
        <div class="mobile-platform__background mobile-platform__background--pattern ">
          <img class="mobile-platform__pattern-bg" src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/landing-page-v2/landing-page-v2-mobile-apps-pattern.png" alt="Background Pattern Mobile Platform" />
        </div>

        <div class="container">
          <div class="grid grid-cols-2 gap-2">
            <div>
              <div class="mobile-platform__content">
                <h2 class="mobile-platform__title aos-init aos-animate animate-charcter_1" data-aos="fade-up">Build your crypto portfolio anywhere.</h2>
                <p class="fb-regular mobile-platform__subtitle aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">A powerful cryptocurrency exchange in your pocket. Buy, sell and trade crypto on the go.</p>
              </div>
              <div class="mobile-platform__download">
          <p class="fb-regular fb-regular--bold aos-init aos-animate" data-aos="fade-up">Get the Cryptolly Wallet Mobile App Now!</p>
          <div class="mobile-platform__download-button">
          <div class="grid grid-cols-2 gap-2">
            <div>
            <a href="#" class="btn btn-download-app btn-playstore aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1166_375)">
                  <path d="M23.8517 21.3902C27.9092 19.3087 30.9851 17.7226 31.2502 17.5993C32.0984 17.1779 32.9742 16.0626 31.2502 15.1962C30.6936 14.9238 27.6967 13.3871 23.8517 11.4053L18.5215 16.4348L23.8517 21.3901V21.3902Z" fill="#FFD900"></path>
                  <path d="M18.521 16.4346L1.54883 32.4162C1.9472 32.4655 2.39695 32.3668 2.9272 32.0945C4.04045 31.5251 15.842 25.5037 23.8512 21.3912L18.521 16.4346Z" fill="#F43249"></path>
                  <path d="M18.5219 16.4351L23.8522 11.4303C23.8522 11.4303 4.12194 1.37006 2.92819 0.776189C2.47844 0.527313 1.97444 0.453386 1.52344 0.527313L18.5219 16.4351Z" fill="#00EE76"></path>
                  <path d="M18.5214 16.437L1.52287 0.529297C0.833 0.678319 0.25 1.24778 0.25 2.41239V30.5356C0.25 31.6015 0.701125 32.3693 1.54925 32.4433L18.5214 16.437Z" fill="#00D3FF"></path>
                </g>
                <defs>
                  <clipPath id="clip0_1166_375">
                    <rect width="32" height="32" fill="white" transform="translate(0.25 0.5)"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div class="btn-download-app__content">
                <p class="btn-download-app__subtitle">GET IT ON</p>
                <p class="btn-download-app__title">Google Play</p>
              </div>
            </a>
            </div>
            <div>
            <a href="#" class="btn btn-download-app btn-appstore aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1166_319)">
                  <path d="M7.758 0.5H25.742C29.6125 0.5 32.75 3.6375 32.75 7.508V25.492C32.75 29.3625 29.6125 32.5 25.742 32.5H7.758C3.8875 32.5 0.75 29.3625 0.75 25.492V7.508C0.75 3.6375 3.8875 0.5 7.758 0.5Z" fill="url(#paint0_linear_1166_319)"></path>
                  <path d="M11.0045 23.7266L11.0075 23.7276L9.91333 25.6226C9.51395 26.3143 8.62945 26.5513 7.9377 26.152C7.24608 25.7526 7.00895 24.8681 7.40833 24.1763L8.21433 22.7803L8.2917 22.6463C8.42983 22.4478 8.7707 22.1051 9.45258 22.1696C9.45258 22.1696 11.0572 22.3437 11.1733 23.1777C11.1733 23.1777 11.1891 23.4521 11.0045 23.7266ZM26.5223 18.8866H23.1106C22.8782 18.871 22.7768 18.788 22.7368 18.7397L22.7343 18.7353L19.0822 12.4096L19.0775 12.4127L18.8585 12.0987C18.4995 11.5497 17.9295 12.9537 17.9295 12.9537C17.2488 14.5182 18.0261 16.2968 18.297 16.8345L23.3697 25.6207C23.769 26.3123 24.6535 26.5495 25.3453 26.15C26.037 25.7506 26.2741 24.8661 25.8746 24.1743L24.6062 21.9773C24.5816 21.9241 24.5388 21.7796 24.799 21.779H26.5223C27.3211 21.779 27.9686 21.1315 27.9686 20.3327C27.9686 19.534 27.3211 18.8865 26.5223 18.8865V18.8866ZM19.8956 20.8526C19.8956 20.8526 20.0777 21.779 19.3731 21.779H6.7607C5.96195 21.779 5.31445 21.1315 5.31445 20.3327C5.31445 19.534 5.96195 18.8865 6.7607 18.8865H10.0032C10.5267 18.8562 10.6507 18.554 10.6507 18.554L10.6537 18.5555L14.8862 11.2245L14.885 11.2242C14.9621 11.0826 14.8978 10.9487 14.8867 10.9276L13.4888 8.50645C13.0895 7.81483 13.3265 6.9302 14.0182 6.53095C14.71 6.13158 15.5945 6.36845 15.9938 7.0602L16.6421 8.18308L17.2892 7.0622C17.6886 6.37058 18.5731 6.13345 19.2648 6.53295C19.9566 6.93233 20.1936 7.8167 19.7942 8.50845L13.9045 18.7097C13.8787 18.7718 13.8708 18.8693 14.0625 18.8865H17.583L17.5837 18.9208C17.5837 18.9208 19.6185 18.9525 19.8956 20.8526Z" fill="white"></path>
                </g>
                <defs>
                  <linearGradient id="paint0_linear_1166_319" x1="16.75" y1="0.5" x2="16.75" y2="32.5" gradientUnits="userSpaceOnUse">
                    <stop offset="1" stop-color="#17C9FB"></stop>
                    <stop offset="1" stop-color="#1A74E8"></stop>
                  </linearGradient>
                  <clipPath id="clip0_1166_319">
                    <rect width="32" height="32" fill="white" transform="translate(0.75 0.5)"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div class="btn-download-app__content">
                <p class="btn-download-app__subtitle">Download on the</p>
                <p class="btn-download-app__title">App Store</p>
              </div>
            </a>
            </div>
          </div>
           
           
          </div>
              </div>
            </div>
            <div class="mobile-platform__illustration aos-init aos-animate animate__animated animate__pulse animate__delay-0s animate__infinite	infinite" data-aos="zoom-in-up" data-aos-delay="200">
              <img src="https://dhuhacreative.illustraly.com/cryptolly/assets/media/images/landing-page-v2/landing-page-v2-mobile-apps-illustration.svg" alt="Illustration" style={{ marginLeft: '14%' }} />
            </div>
          </div>
        </div>
      </section>
      <section class="cta aos-init aos-animate" data-aos="zoom-in-up" style={{margin: '3% 1%'}}>
      <div class="container">
        <div class="cta__container">
          <p class="fd-sm cta__subtitle">Ready to start trading cryptocurrency?</p>
          <h3 class="cta__title text-rainbow-animation">New users can earn up to $80 in crypto rewards.</h3>
          <form class="mini-form">
            <input type="text" class="form-control mini-form__input" placeholder="Enter you email address" autocomplete="off" />
            <input type="submit" class="btn btn-primary mini-form__submit" value="Get Started" />
          </form>
        </div>
      </div>
    </section>
      <footer class="footer">
        <div class="footer__foot aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
          <p class="fb-md footer-foot__copyright">Cryptolly ©. All rights reserved.</p>
          <div class="footer-foot__tos-privacy">
            <a href="#" class="fb-md footer-foot__link">Term of Service</a>
            <span class="separator"></span>
            <a href="#" class="fb-md footer-foot__link">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
