var React = require('react');

var ChatMessage = React.createClass({
  propTypes: {
    message: React.PropTypes.shape({
      sender: React.PropTypes.string.isRequired,
      contents: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
    }).isRequired
  },

  render: function() {
    return (
      <div className="chat-message">
        <div className="chat-message-sender">{ this.props.message.sender }</div>
        <div className="chat-meta-message-contents">
          { this.props.message.contents.map(function(content, idx) {
            return (
              <div key={idx} className="chat-message-content">
                { content }
              </div>
            )
          }) }
        </div>
      </div>
    );
  }
})

module.exports = ChatMessage;
