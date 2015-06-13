var React = require('react');

var ChatList = require('./components/chat_list.jsx');

React.render(
  <ChatList messages={ [ { sender: 'James K. Polk', content: 'This Internet thing sure is nifty.', id: 'asdf' } ] }/>,
  document.getElementById('react-entry-point')
);
