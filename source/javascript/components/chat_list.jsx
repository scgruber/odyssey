var React = require('react');

var ChatMessage = require('./chat_message.jsx');

var ChatList = React.createClass({
  propTypes: {
    messages: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.string,
    }))
  },

  render: function() {
    return (
      <div id="chat-list">
        { this.props.messages.map(function(msg) {
          return <ChatMessage key={ msg.id } message={ msg }/>
        }) }
      </div>
    );
  }
});

module.exports = ChatList;
