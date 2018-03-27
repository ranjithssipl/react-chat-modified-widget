import React, { PureComponent } from 'react';
import marked from 'marked';
import { PROP_TYPES } from 'constants';
import './styles.scss';
import left from 'assets/left_user_EVA_IMG.png';
import right from 'assets/right-img.png';

var rgx = new RegExp('^(|[\\s]+)$')

class Message extends PureComponent {
  render() {
    const sanitizedHTML = marked.parse(this.props.message.get('text'), { sanitize: true });

    return (
      // <div className={this.props.message.get('sender')}>
      //   <div className="message-text" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
      // </div>
      <div>
        {(this.props.message.get('sender') == 'client') ? (
          <div className={rgx.test(this.props.message.get('text'))?"message-hide":"message right appeared"}>
            <div className="avatar"><img alt ="" src={right}/></div>
            <div className="text_wrapper">
              <div className="text" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
            </div>
          </div>
        ) : (
            <div className={(this.props.message.get('text')=="")?"message-hide":"message left appeared"}>
              <div className="avatar"><img alt=""src={left} /></div>
              <div className="text_wrapper">
                <div className="text" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
              </div>
            </div>
          )}
      </div>
    );
  }
}

Message.propTypes = {
  message: PROP_TYPES.MESSAGE
};

export default Message;
