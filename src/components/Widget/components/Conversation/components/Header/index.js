import React from 'react';
import PropTypes from 'prop-types';
import close from 'assets/clear-button.svg';
import Close from 'assets/close_icon.png';
import './style.scss';
import TITLE from 'assets/web_chat_logo.png'

const Header = ({ title, subtitle, toggleChat, showCloseButton, dropMessage }) =>
  <div>
    <button className="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown" onClick={dropMessage}>
      <img src={Close} />
    </button>
    <div className="top_menu">
      <div className="title"><img alt="" src={TITLE} /></div>
    </div>
  </div>

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
  dropMessage: PropTypes.func
};

export default Header;
