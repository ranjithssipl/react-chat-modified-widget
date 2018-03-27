import React from 'react';
import PropTypes from 'prop-types';

// import send from 'assets/send_button.svg';
import send from 'assets/chat_send_icon.png';
import './style.scss';

const Sender = ({ sendMessage, placeholder, disabledInput }) =>
  // <form className="sender" onSubmit={sendMessage}>
  //   <input type="text" className="new-message" name="message" placeholder={placeholder} disabled={disabledInput} autoFocus autoComplete="off" />
  //   <button type="submit" className="send">
  //     <img src={send} className="send-icon" alt="send" />
  //   </button>
  // </form>;
  <div className="bottom_wrapper clearfix">
    <form onSubmit={sendMessage}>
      <div className="message_input_wrapper">
        <input className="message_input" name="message" placeholder="Type your message here..." disabled={disabledInput} autoFocus autoComplete="off" />
      </div>
      <div className="send_message">
        <button type="submit" className="text">
          <img src={send} className="send-icon" alt="" />
        </button>
      </div>
    </form>
  </div>

Sender.propTypes = {
  sendMessage: PropTypes.func,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool
};

export default Sender;
