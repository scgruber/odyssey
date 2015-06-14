var React = require('react');

var ChatMessage = require('./chat_message.jsx');
var MetaMessage = require('../lib/meta_message.js');

var ChatList = React.createClass({
  propTypes: {
    messages: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.string,
    }))
  },

  render: function() {
    var messages = MetaMessage.collapse(this.props.messages);
    return (
      <div id="chat-list">
        { messages.map(function(msg, idx) {
          // Ok to use idx here because Firebase guarantees consistent ordering
          return <ChatMessage key={ idx } message={ msg }/>
        }) }
      </div>
    );
  }
});

module.exports = ChatList;
