import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import openLauncher from 'assets/launcher_button.svg';
import open_icon from "assets/left_user_EVA_IMG.png"
import close from 'assets/minimize01.png';
// import close from 'assets/close_icon.png';
import './style.scss';

const Launcher = ({ toggle, chatOpened, badge }) =>
    <button type="button" className={chatOpened ? 'launcher hide-sm' : 'launcher'} onClick={toggle}>
      {
        chatOpened ?
          <img src={close} className="close-launcher" alt="" /> :
          <img src={open_icon} className="open-launcher" alt="" />
      }
    </button>;

Launcher.propTypes = {
  toggle: PropTypes.func,
  chatOpened: PropTypes.bool,
};

export default connect(store => ({
  chatOpened: store.behavior.get('showChat')
}))(Launcher);