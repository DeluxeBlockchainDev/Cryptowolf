import * as React from 'react';
import PropTypes from 'prop-types';

function SubMenu() {
  return (
    <div className="count-social-wrapper">
      <div className="counter-header">
        <div className="counter-header__online" test-id="stat-online">
          <i className="icon icon-online-users" />
          <span id="online_users" className="counter-header__counter">
            ...
          </span>{' '}
          <span className="counter-header__text">Caves</span>
        </div>{' '}
        <div className="counter-header__users" test-id="stat-users">
          <i className="icon icon-user" />
          <span id="registered_users" className="counter-header__counter">
            ...
          </span>{' '}
          <span className="counter-header__text">Wolves</span>
        </div>{' '}
        <div className="counter-header__opened" test-id="stat-cases">
          <i className="icon icon-case-opened" />
          <span id="opened_cases" className="counter-header__counter">
            ...
          </span>{' '}
          <span className="counter-header__text">Hunts</span>
        </div>
      </div>

      <div className="social-header">
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
    </div>
  );
}
SubMenu.defaultProps = {
  callback: () => {}
};
SubMenu.propTypes = {
  callback: PropTypes.func
};
export default SubMenu;
