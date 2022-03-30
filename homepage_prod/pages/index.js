import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import MainMenu from '../components/MainMenu';

function Home() {
  return (
    <div className="Home">
      <Head>
        <title>CrypoWolf</title>
        <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
        <meta name="application-name" content="CrypoWolf" />
        <meta name="apple-mobile-web-app-title" content="CrypoWolf" />
        <meta name="description" content="Cryptowolf is a browser game, so you can play on any device, be it desktop or mobile phone where you can connect any WEB3 wallet, such as Metamask. Cryptowolf Finance is an NFT game in which it will allow you to get involved in a virtual world where you are the head of a pack of wolves. It will allow you to breed them, exchange them, send them to hunt different animals and face other packs of wolves from other users." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className="header">
        <MainMenu />
      </header>
      <main>
        <div className="feast-wrapper">
          <div className="main-feast-banner-wrapper not-logged halloween-2021 wolf-banner">
            <div className="main-feast-banner feast-banner halloween-2021">
              <div className="main-feast-banner__left-block">
                <button
                  className="button button-how-it-works"
                  style={{ background: 'rgb(127 192 40 / 30%)' }}
                >
                  <i className="icon icon-info" />
                  How it works?
                </button>
                <p className="main-feast-banner__festival-name-text halloween-2021">
                  CrypoWolf
                </p>
                <div className="main-feast-banner__event-timer-block">
                  <p
                    className="main-feast-banner__event-end-text halloween-2021"
                    style={{ color: '#5c49d0' }}
                  >
                    Event ends in
                  </p>

                  <div className="feast-timer large" data-remain="79089">
                    <div className="days time_col" style={{ color: '#5c49d0' }}>
                      <span style={{ color: '#00ff14' }}>00</span>days
                    </div>
                    <div
                      className="hours time_col"
                      style={{ color: '#5c49d0' }}
                    >
                      <span style={{ color: '#00ff14' }}>21</span>hours
                    </div>
                    <div className="mins time_col" style={{ color: '#5c49d0' }}>
                      <span style={{ color: '#00ff14' }}>56</span>mins
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-feast-banner__right-block">
                <div className="main-feast-banner__img-mobile halloween-2021" />
                <div className="main-feast-banner__top-players-button-block top-players-block">
                  <div className="top-players-block__left" />
                  <div className="top-players-block__right">
                    <p style={{ color: '#b522b7' }}>Top players</p>
                    <button className="button button-primary button-top-players halloween-2021">
                      Watch
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="progress-slider-wrapper not-logged">
            <div className="progress-slider-user-guest-overlay">
              <p>
                <span>Connect</span> your wallet to access your rewards
              </p>
              <button
                className="button button-primary button-log-in"
                data-origin-source="feast-page-progress-slider"
              >
                <i className="icon icon-wallet" />
                Connect
              </button>
            </div>
            <div className="progress-slider-wrapper-for-nav" />
          </div>
          <div className="secondary-banner halloween-2021">
            <div className="banner-container">
              <div className="title-block">
                <h3>Top Rarities</h3>
              </div>
              <div className="cases-grid">
                {/* 1 */}
                <div className="case-item limited event-case">
                  <a href="#">
                    <button className="add-case-to-favourite favourite-heart" />
                    <div className="image-wrapper">
                      <img
                        alt="CryptoWolf #4523"
                        className="lazy-img case-img entered error"
                        src="/images/wolves/black.png"
                      />
                    </div>
                    <span className="title">
                      {/* <span>CryptoWolf #4523</span> */}
                      <span className="event-points">
                        CryptoWolf #4523
                        <img
                          src="/images/miscellaneous/coin.png"
                          alt="Halloween"
                        />
                      </span>
                    </span>
                    <span className="item-price">
                      <span className="price">5 CWOLF</span>
                    </span>
                    <span className="limited-block">
                      <b className="limits-info">
                        Left
                        <span className="limited-timer"> 21h 28m 26s</span>
                      </b>
                    </span>
                    <span className="action-wrapper">
                      <span className="button button-regular button-regular">
                        Buy
                      </span>
                    </span>
                  </a>
                </div>
                {/* -1 */}
                {/* 1 */}
                <div className="case-item limited event-case">
                  <a href="#">
                    <button className="add-case-to-favourite favourite-heart" />
                    <div className="image-wrapper">
                      <img
                        alt="CryptoWolf #3552"
                        className="lazy-img case-img entered error"
                        src="/images/wolves/black.png"
                      />
                    </div>
                    <span className="title">
                      <span className="event-points">
                        CryptoWolf #3552
                        <img
                          src="/images/miscellaneous/coin.png"
                          alt="Halloween"
                        />
                      </span>
                    </span>
                    <span className="item-price">
                      <span className="price">6 CWOLF</span>
                    </span>
                    <span className="limited-block">
                      <b className="limits-info">
                        Left
                        <span className="limited-timer"> 21h 28m 26s</span>
                      </b>
                    </span>
                    <span className="action-wrapper">
                      <span className="button button-regular button-regular">
                        Buy
                      </span>
                    </span>
                  </a>
                </div>
                {/* -1 */}
                {/* 1 */}
                <div className="case-item limited event-case">
                  <a href="#">
                    <button className="add-case-to-favourite favourite-heart" />
                    <div className="image-wrapper">
                      <img
                        alt="CryptoWolf #5587"
                        className="lazy-img case-img entered error"
                        src="/images/wolves/orange.png"
                      />
                    </div>
                    <span className="title">
                      <span className="event-points">
                        CryptoWolf #5587
                        <img
                          src="/images/miscellaneous/coin.png"
                          alt="Halloween"
                        />
                      </span>
                    </span>
                    <span className="item-price">
                      <span className="price">10 CWOLF</span>
                    </span>
                    <span className="limited-block">
                      <b className="limits-info">
                        Left
                        <span className="limited-timer"> 21h 28m 26s</span>
                      </b>
                    </span>
                    <span className="action-wrapper">
                      <span className="button button-regular button-regular">
                        Buy
                      </span>
                    </span>
                  </a>
                </div>
                {/* -1 */}
                {/* 1 */}
                <div className="case-item limited event-case">
                  <a href="#">
                    <button className="add-case-to-favourite favourite-heart" />
                    <div className="image-wrapper">
                      <img
                        alt="CryptoWolf #2684"
                        className="lazy-img case-img entered error"
                        src="/images/wolves/black.png"
                      />
                    </div>
                    <span className="title">
                      <span className="event-points">
                        CryptoWolf #2684
                        <img
                          src="/images/miscellaneous/coin.png"
                          alt="Halloween"
                        />
                      </span>
                    </span>
                    <span className="item-price">
                      <span className="price">11 CWOLF</span>
                    </span>
                    <span className="limited-block">
                      <b className="limits-info">
                        Left
                        <span className="limited-timer"> 21h 28m 26s</span>
                      </b>
                    </span>
                    <span className="action-wrapper">
                      <span className="button button-regular button-regular">
                        Buy
                      </span>
                    </span>
                  </a>
                </div>
                {/* -1 */}
              </div>
            </div>
          </div>
          {/*  */}
          <div className="giveaway-list">
            <h2 className="giveaway-list__title">Caves</h2>
            <div className="giveaway-list__level-nav-wrap">
              <div className="giveaway-list__level owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: 'translate3d(0px, 0px, 0px)',
                      transition: 'all 0.25s ease 0s',
                      width: '1584px'
                    }}
                  >
                    <div
                      className="owl-item active"
                      style={{ width: '316.667px' }}
                    >
                      <div className="giveaway-list-item locked">
                        <a href="#">
                          <div className="top-block">
                            <div className="hexagon-bg">
                              <img
                                src="/images/giveaway-money-type.png"
                                className="money"
                                alt="money"
                              />
                              <div className="lock-icon" />
                              {/* <p className="level-text">Level 1 </p> */}
                            </div>
                            <p className="title">CAVE A</p>
                          </div>
                          <div className="event-points">
                            5 CWOLF
                            <img
                              src="/images/miscellaneous/coin.png"
                              alt="Halloween"
                            />
                          </div>
                          <span className="item-price">
                            <span className="price">$3.00</span>
                          </span>
                          <div className="limited-block">
                            <b className="limits-info">
                              Left
                              <span className="limited-timer">
                                {' '}
                                21h 28m 26s
                              </span>
                            </b>
                          </div>
                          <span className="action-wrapper">
                            <span className="button outer-button ">Buy</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: '316.667px' }}
                    >
                      <div className="giveaway-list-item locked">
                        <a href="#">
                          <div className="top-block">
                            <div className="hexagon-bg">
                              <img
                                src="/images/giveaway-skins_money-type.png"
                                className="skins_money"
                                alt="skins_money"
                              />
                              <div className="lock-icon" />
                              {/* <p className="level-text">Level 5 </p> */}
                            </div>
                            <p className="title">CAVE B </p>
                          </div>
                          <div className="event-points">
                            5 CWOLF
                            <img
                              src="/images/miscellaneous/coin.png"
                              alt="Halloween"
                            />
                          </div>
                          <span className="item-price">
                            <span className="price">$3.00</span>
                          </span>
                          <div className="limited-block">
                            <b className="limits-info">
                              Left
                              <span className="limited-timer">
                                {' '}
                                21h 28m 26s
                              </span>
                            </b>
                          </div>
                          <span className="action-wrapper">
                            <span className="button outer-button ">Buy</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: '316.667px' }}
                    >
                      <div className="giveaway-list-item locked">
                        <a href="#">
                          <div className="top-block">
                            <div className="hexagon-bg">
                              <img
                                src="/images/giveaway-money-type.png"
                                className="money"
                                alt="money"
                              />
                              <div className="lock-icon" />
                              {/* <p className="level-text">Level 9 </p> */}
                            </div>
                            <p className="title">CAVE C </p>
                          </div>
                          <div className="event-points">
                            5 CWOLF
                            <img
                              src="/images/miscellaneous/coin.png"
                              alt="Halloween"
                            />
                          </div>
                          <span className="item-price">
                            <span className="price">$3.00</span>
                          </span>
                          <div className="limited-block">
                            <b className="limits-info">
                              Left
                              <span className="limited-timer">
                                {' '}
                                21h 28m 26s
                              </span>
                            </b>
                          </div>
                          <span className="action-wrapper">
                            <span className="button outer-button ">Buy</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: '316.667px' }}
                    >
                      <div className="giveaway-list-item locked">
                        <a href="#">
                          <div className="top-block">
                            <div className="hexagon-bg">
                              <img
                                src="/images/giveaway-skins-type.png"
                                className="skins"
                                alt="skins"
                              />
                              <div className="lock-icon" />
                              {/* <p className="level-text">Level 13 </p> */}
                            </div>
                            <p className="title">CAVE D </p>
                          </div>
                          <div className="event-points">
                            5 CWOLF
                            <img
                              src="/images/miscellaneous/coin.png"
                              alt="Halloween"
                            />
                          </div>
                          <span className="item-price">
                            <span className="price">$3.00</span>
                          </span>
                          <div className="limited-block">
                            <b className="limits-info">
                              Left
                              <span className="limited-timer">
                                {' '}
                                21h 28m 26s
                              </span>
                            </b>
                          </div>
                          <span className="action-wrapper">
                            <span className="button outer-button ">Buy</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <i className="icon icon-arrow-filled" />
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <i className="icon icon-arrow-filled" />
                  </button>
                </div>
                <div className="owl-dots">
                  <button role="button" className="owl-dot active">
                    <span />
                  </button>
                  <button role="button" className="owl-dot">
                    <span />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div>
            <div
              id="bestsellers"
              className="main-title-block bestsellers-cases-title"
            >
              <div className="title-wrapper">
                <h2>Reward Cases</h2>
              </div>
            </div>
            <div className="cases-block">
              <div className="grid-wrapper">
                <div className="cases-grid">
                  {/* 1 */}
                  <div className="case-item limited event-case">
                    <a href="#">
                      <button className="add-case-to-favourite favourite-heart">
                        <div className="heart-animation-1" />
                        <div className="heart-animation-2" />
                      </button>
                      <div className="image-wrapper">
                        <img
                          src="/images/cases/black_case.png"
                          alt="case1"
                          className="lazy-img case-img entered error"
                        />
                      </div>
                      <span className="title">
                        {/* <span>Wood</span> */}
                        <span className="event-points">
                          Wood
                          <img
                            src="/images/miscellaneous/coin.png"
                            alt="Halloween"
                          />
                        </span>
                      </span>
                      <span className="item-price">
                        <span className="price">99 CWOLF</span>
                      </span>
                      <span className="action-wrapper">
                        <span className="button button-regular button-regular">
                          Buy
                        </span>
                      </span>
                    </a>
                  </div>
                  {/* -1 */}
                  {/* 1 */}
                  <div className="case-item limited event-case">
                    <a href="#">
                      <button className="add-case-to-favourite favourite-heart">
                        <div className="heart-animation-1" />
                        <div className="heart-animation-2" />
                      </button>
                      <div className="image-wrapper">
                        <img
                          src="/images/cases/case2.png"
                          alt="case2"
                          className="lazy-img case-img entered error"
                        />
                      </div>
                      <span className="title">
                        <span className="event-points">
                          Bronze
                          <img
                            src="/images/miscellaneous/coin.png"
                            alt="Halloween"
                          />
                        </span>
                      </span>
                      <span className="item-price">
                        <span className="price">105 CWOLF</span>
                      </span>
                      <span className="action-wrapper">
                        <span className="button button-regular button-regular">
                          Buy
                        </span>
                      </span>
                    </a>
                  </div>
                  {/* -1 */}
                  {/* 1 */}
                  <div className="case-item limited event-case">
                    <a href="#">
                      <button className="add-case-to-favourite favourite-heart">
                        <div className="heart-animation-1" />
                        <div className="heart-animation-2" />
                      </button>
                      <div className="image-wrapper">
                        <img
                          src="/images/cases/case1.png"
                          alt="case3"
                          className="lazy-img case-img entered error"
                        />
                      </div>
                      <span className="title">
                        <span className="event-points">
                          Silver
                          <img
                            src="/images/miscellaneous/coin.png"
                            alt="Halloween"
                          />
                        </span>
                      </span>
                      <span className="item-price">
                        <span className="price">112 CWOLF</span>
                      </span>
                      <span className="action-wrapper">
                        <span className="button button-regular button-regular">
                          Buy
                        </span>
                      </span>
                    </a>
                  </div>
                  {/* -1 */}
                  {/* 1 */}
                  <div className="case-item limited event-case">
                    <a href="#">
                      <button className="add-case-to-favourite favourite-heart">
                        <div className="heart-animation-1" />
                        <div className="heart-animation-2" />
                      </button>
                      <div className="image-wrapper">
                        <img
                          src="/images/cases/case4.png"
                          alt="case4"
                          className="lazy-img case-img entered error"
                        />
                      </div>
                      <span className="title">
                        <span className="event-points">
                          Gold
                          <img
                            src="/images/miscellaneous/coin.png"
                            alt="Halloween"
                          />
                        </span>
                      </span>
                      <span className="item-price">
                        <span className="price">123 CWOLF</span>
                      </span>
                      <span className="action-wrapper">
                        <span className="button button-regular button-regular">
                          Buy
                        </span>
                      </span>
                    </a>
                  </div>
                  {/* -1 */}
                  {/* 1 */}
                  <div className="case-item limited event-case">
                    <a href="#">
                      <button className="add-case-to-favourite favourite-heart">
                        <div className="heart-animation-1" />
                        <div className="heart-animation-2" />
                      </button>
                      <div className="image-wrapper">
                        <img
                          src="/images/cases/case5.png"
                          alt="case5"
                          className="lazy-img case-img entered error"
                        />
                      </div>
                      <span className="title">
                        <span className="event-points">
                          Diamond
                          <img
                            src="/images/miscellaneous/coin.png"
                            alt="Halloween"
                          />
                        </span>
                      </span>
                      <span className="item-price">
                        <span className="price">143 CWOLF</span>
                      </span>
                      <span className="action-wrapper">
                        <span className="button button-regular button-regular">
                          Buy
                        </span>
                      </span>
                    </a>
                  </div>
                  {/* -1 */}
                  {/* 1 */}
                  <div className="case-item limited event-case">
                    <a href="#">
                      <button className="add-case-to-favourite favourite-heart">
                        <div className="heart-animation-1" />
                        <div className="heart-animation-2" />
                      </button>
                      <div className="image-wrapper">
                        <img
                          src="/images/cases/case6.png"
                          alt="case6"
                          className="lazy-img case-img entered error"
                        />
                      </div>
                      <span className="title">
                        <span className="event-points">
                          Platium
                          <img
                            src="/images/miscellaneous/coin.png"
                            alt="Halloween"
                          />
                        </span>
                      </span>
                      <span className="item-price">
                        <span className="price">166 CWOLF</span>
                      </span>
                      <span className="action-wrapper">
                        <span className="button button-regular button-regular">
                          Buy
                        </span>
                      </span>
                    </a>
                  </div>
                  {/* -1 */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer-banner */}
        <div className="footer-banner-wrapper">
          <div className="footer-banner">
            <div className="footer-banner__left-block" />
            <div className="footer-banner__right-block">
              <div className="footer-banner__text">
                <p>
                  IT IS TIME <br /> TO BUY CASES
                </p>
                <p>
                  Just connect your wallet <br /> and start to buy top cases
                </p>
              </div>
              <div className="footer-banner__link-wrapper">
                <button
                  className="button button-footer button-primary-variant button-log-in"
                  data-origin-source="footer"
                >
                  <i className="icon icon-wallet" />
                  Wallet Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer id="footer">
        <div className="footer">
          <div className="footer__left-block">
            <div className="footer__logo">
              <img
                src="/images/footer/icon_g.png"
                alt="CrypoWolf"
                width="65"
                height="62"
              />
            </div>
            <div className="footer__text-wrapper">
              <p>CrypoWolf © 2021 </p>
              <p>
                Cryptowolf is a browser game, so you can play on any device, be
                it desktop or mobile phone where you can connect any WEB3
                wallet, such as Metamask.
              </p>
              <p>CrypoWolf Limited A Building 1st Floor123, xxx Street</p>
            </div>
          </div>
          <div className="footer__right-block">
            <div className="footer__links">
              <div className="footer__payment-methods" test-id="payment-method">
                <div className="top-images">
                  <img
                    className="visa"
                    src="/images/payment-icons/visa.svg"
                    title="Visa payment"
                    alt="Visa payment"
                    width="40"
                  />
                  <img
                    className="mastercard"
                    src="/images/payment-icons/mastercard.svg"
                    title="Mastercard payment"
                    alt="Mastercard payment"
                    width="38"
                  />
                  <img
                    className="trustly"
                    src="/images/payment-icons/trustly_icon.png"
                    title="Trustly payment"
                    alt="Trustly payment"
                    width="80"
                  />
                </div>
                <div className="bottom-images">
                  <img
                    className="visa-secure"
                    src="/images/payment-icons/visa-secure.png"
                    width="40"
                    title="Visa secure"
                    alt="Visa secure"
                  />
                  <img
                    className="maestro"
                    src="/images/payment-icons/maestro.svg"
                    title="Maestro payment"
                    alt="Maestro payment"
                    width="33"
                  />
                  <img
                    className="mastercard-id-check"
                    src="/images/payment-icons/mastercard-id-check.png"
                    width="110"
                    title="Mastercard id check"
                    alt="Mastercard id check"
                  />
                </div>
              </div>
              <div className="footer__help-link">
                <a href="#" className="footer-support">
                  <i className="icon icon-mail" />
                  help@CrypoWolf
                </a>
                <a href="#" className="footer-faq">
                  <i className="icon icon-sitemap" />
                  Sitemap
                </a>
              </div>
            </div>
            <div className="footer__nav">
              <a href="#" test-id="link-partners">
                Partners
              </a>
              <a href="#" test-id="link-faq">
                F.A.Q.
              </a>
              <a href="#" test-id="link-tos">
                Terms of Service
              </a>
              <a href="#" test-id="link-privacy-policy">
                Privacy Policy
              </a>
              <a href="#" test-id="link-cookie-policy">
                Cookie Policy
              </a>
              <a href="#" test-id="link-contacts">
                Contacts
              </a>
              <a href="#" test-id="link-cardholders-agreement">
                Cardholder’s Agreement
              </a>
            </div>
          </div>
          <div className="footer-text">
            <div className="container" test-id="about-Cryptowolf-text">
              <h2>About CrypoWolf </h2>
              <p>
                Cryptowolf Finance is an NFT game in which it will allow you to
                get involved in a virtual world where you are the head of a pack
                of wolves.
              </p>
              <p>
                It will allow you to breed them, exchange them, send them to
                hunt different animals and face other packs of wolves from other
                users.
              </p>
              {/* <ul>
                Getting csgo skins has never been easier:
                <li>Sign in through Steam</li>
                <li>Refill your balance with money or csgo skins</li>
                <li>Start opening CS GO Cases! </li>
              </ul>
              <p>
                Cryptowolf Finance offers a variety of payment systems: G2A pay, credit
                cards or even cs go skins! There are also special promocodes
                with free balance, which are available on Cryptowolf Finance social
                media.
              </p>
              <p>
                You are free to choose any CS GO case for your opening, if you
                have enough money. After case opening you will get a CS GO skin
                and decide what to do with it. CSGO skins may be withdrawn to
                your Steam inventory, sold back to the website or sent to
                Upgrade.
              </p>
              <p>
                Upgrade is a unique feature on Cryptowolf which allows you to
                update cheap skin from case on the more expensive one. Not all
                case opening sites have this feature, so make sure to try it
                out!
              </p>
              <ul>
                How it works:
                <li>Choose one or more skins from your inventory</li>
                <li>Choose a skin you would like to get from Upgrade</li>
                <li>Click the Upgrade button </li>
              </ul>
              <p>
                The less difference between the price of your skins and the
                price of the desired skin, the more probability of upgrade
                success.
              </p>
              <p>
                To withdraw CS GO skins from cases you may choose the desired
                items in your profile and click the Withdraw button. Make sure
                to wait till your Trade Offer is ready and click the Get button
                to send the skin to your inventory.
              </p>
              <p>
                Cryptowolf Finance doesn’t offer money withdrawal options, however you
                may get any skin you got from a case and be sure it has the
                lowest price available. Withdrawals usually don’t take more than
                30 seconds since all trades work automatically using Steam bots.
              </p>
              <h3>Provably Fair </h3>
              <p>
                Provably Fair or PF is an algorithm used by Cryptowolf Finance to prove
                that all results and chances on our case opening site are
                equally random. You can be sure that there are no ways to cheat
                the systems and all users have the same chances of getting an
                expensive skin from a csgo case.
              </p>
              <p>
                With PF you won’t be able to predict your future outcomes of the
                games, however, you will be able to check previous wins, thus,
                seeing that all the winnings and losses were absolutely fair.
                Cryptowolf Finance offers one of the most transparent and honest PF
                systems on the market.
              </p>
              <ul>
                <li>
                  Only on Cryptowolf you can check the history of chances and case
                  prices. It makes it impossible to customize the odds for
                  particular users.
                </li>
                <li>
                  Only on Cryptowolf you can check other users' drops, so it means
                  that other players' winnings couldn't have been falsified.
                </li>
                <li>
                  Only on Cryptowolf you can check the history of client and
                  server seeds. Data can be verified anytime by anyone.
                </li>
              </ul> */}
            </div>
            <button
              className="button button-load-more"
              test-id="button-read-more"
            >
              Read More
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
