var React = require('react');

var ChatMessage = React.createClass({
  propTypes: {
    message: React.PropTypes.shape({
      sender: React.PropTypes.string.isRequired,
      content: React.PropTypes.string.isRequired
    }).isRequired
  },

  render: function() {
    return (
      <div className="chat-message">
        <div className="chat-message-sender">{ this.props.message.sender }</div>
        <div className="chat-message-content">{ this.props.message.content }</div>
      </div>
    );
  }
})

module.exports = ChatMessage;
