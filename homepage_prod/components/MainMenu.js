import * as React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import SubMenu from './SubMenu';

function MainMenu() {
  const [isOpenMenu, setOpenMenu] = React.useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!isOpenMenu);
  }
  const handleCloseMenu = () => {
    setOpenMenu(!isOpenMenu);
  }
  return (
    <div>
      <div className={"mobile-menu-wrapper " + (isOpenMenu? "menu-opened": "")}>
        <div className="mobile-menu-overlay" onClick={handleCloseMenu} />
        <div className="sound-lang-wrapper">
          <div className="header-language">
            <div className="current-language">
              <img
                src="/images/languages-flag-sprite.svg#en-lang"
                alt="en language"
                width="18"
                height="18"
              />
              <p>en</p>
            </div>
            <div className="language-dropdown">
              <a href="en.html" className="current_lng">
                <img
                  src="/images/languages-flag-sprite.svg#en-lang"
                  alt="en language"
                  width="18"
                  height="18"
                />{' '}
                <span>en</span>
              </a>
              <a href="es.html">
                <img
                  src="/images/languages-flag-sprite.svg#es-lang"
                  alt="es language"
                  width="18"
                  height="18"
                />{' '}
                <span>es</span>
              </a>
            </div>
          </div>
        </div>
        <div className="social-header mobile-social">
          <a
          href="https://www.youtube.com/#"
          target="_blank"
          rel="nofollow noreferrer"
          className="social-header__link social-header__youtube"
          title="youtube"
          text-id="social-youtube"
        >
          <i className="icon icon-youtube" />
        </a>
        <a
          href="https://discord.gg/#"
          target="_blank"
          rel="nofollow noreferrer"
          className="social-header__link social-header__discord"
          title="discord"
          test-id="social-discort"
        >
          <i className="icon icon-discord" />
        </a>
        <a
          href="https://www.instagram.com/#"
          target="_blank"
          rel="nofollow noreferrer"
          className="social-header__link social-header__instagram"
          title="instagram"
          test-id="social-instagram"
        >
          <i className="icon icon-instagram" />
        </a>
        <a
          href="https://www.facebook.com/#"
          target="_blank"
          rel="nofollow noreferrer"
          className="social-header__link social-header__fb"
          title="facebook"
          test-id="social-fb"
        >
          <i className="icon icon-facebook" />
        </a>
        <a
          href="https://twitter.com/#"
          target="_blank"
          rel="nofollow noreferrer"
          className="social-header__link social-header__twitter"
          title="twitter"
          test-id="social-twitter"
        >
          <i className="icon icon-twitter" />
        </a>
        </div>

        <div className="menu-wrapper guest">
          <div className="close-mobile-menu" onClick={handleCloseMenu} />
          <div className="left-block-wrap halloween-2021">
            <a href="#" test-id="logo" className="header-logo halloween-2021">
              <img
                className="header-logo__icon halloween-event-logo"
                src="/images/favicon.png"
                alt="Halloween"
                width="80"
                layout="fill"
              />
              {/* <img
            className="header-logo__text"
            src={logoText}
            alt="SkinClub"
            width="135"
            height="59"
          /> */}
              <span className="header-logo-text_span">CRYPOWOLF</span>
            </a>
            <nav className="main-menu">
              <ul>
                <li>
                  <a href="#" title="Provably Fair">
                    <i className="icon icon-shield" />
                    <span>Provably fair </span>
                  </a>
                </li>{' '}
                <li>
                  <a href="#" title="Top drops">
                    <i className="icon icon-star" />
                    <span>Top drops </span>
                  </a>
                </li>
                {/* {' '}
            <li>
              <a href="#" title="Halloween">
                <i className="icon icon-giveaway" />
                <span>Halloween </span>
              </a>
              <div className="label label__new">New</div>
            </li> */}
              </ul>
            </nav>
          </div>
          <div className="right-block-wrap">
            <div className="sound-lang-wrapper">
              <div className="header-language" test-id="languages">
                <div className="current-language">
                  <img
                    src="/images/languages-flag-sprite.svg#en-lang"
                    alt="en language"
                    width="18"
                    height="18"
                  />
                  <p>en</p>
                </div>
                <div className="language-dropdown">
                  <a href="#" className="current_lng">
                    <img
                      src="/images/languages-flag-sprite.svg#en-lang"
                      alt="en language"
                      width="18"
                      height="18"
                    />
                    <span>en</span>
                  </a>
                  <a href="#">
                    <img
                      src="/images/languages-flag-sprite.svg#es-lang"
                      alt="es language"
                      width="18"
                      height="18"
                    />
                    <span>es</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="header-profile-wrapper">
              <div className="header-profile">
                <button
                  className="header-profile-sign-in button-log-in"
                  data-origin-source="header-menu"
                >
                  Connect <br />
                  <span>Wallet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <SubMenu />
      </div>
      <div className="header-profile-wrapper mobile-header-profile-wrapper">
        <div className="header-profile">
          <button
            className="header-profile-sign-in button-log-in"
            data-origin-source="header-menu"
          >
            Connect <br />
            <span>Wallet</span>
          </button>
        </div>

        <div className="sound-lang-wrapper">
          <div className="header-language" test-id="languages">
            <div className="current-language">
              <img
                src="/images/languages-flag-sprite.svg#en-lang"
                alt="en language"
                width="18"
                height="18"
              />
              <p>en</p>
            </div>
            <div className="language-dropdown">
              <a href="en.html" className="current_lng">
                <img
                  src="/images/languages-flag-sprite.svg#en-lang"
                  alt="en language"
                  width="18"
                  height="18"
                />{' '}
                <span>en</span>
              </a>
              <a href="es.html">
                <img
                  src="/images/languages-flag-sprite.svg#es-lang"
                  alt="es language"
                  width="18"
                  height="18"
                />{' '}
                <span>es</span>
              </a>
            </div>
          </div>
        </div>

        <div className="menu-btn" onClick={handleOpenMenu}>
          <span className="menu-btn__line" />
          <span className="menu-btn__line" />
          <span className="menu-btn__line" />
        </div>
      </div>
    </div>
  );
}
MainMenu.defaultProps = {
  callback: () => {}
};
MainMenu.propTypes = {
  callback: PropTypes.func
};
export default MainMenu;
