var React = require('react');
var Firebase = require('firebase');
var ReactFire = require('reactfire');

var ChatList = require('../components/chat_list.jsx');

var Chat = React.createClass({
  mixins: [ ReactFire ],

  componentWillMount: function() {
    this.bindAsArray(new Firebase('https://resplendent-inferno-2374.firebaseio.com/messages/'), 'messages');
  },

  getInitialState: function() {
    return {
      messages: []
    };
  },

  render: function() {
    return (
      <section id="chat">
        <ChatList messages={ this.state.messages }/>
      </section>
    );
  }
});

module.exports = Chat;
