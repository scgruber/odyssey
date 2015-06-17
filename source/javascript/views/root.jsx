var React = require('react');

var Chat = require('./chat.jsx');
var Characters = require('./characters.jsx');

var Root = React.createClass({
  render: function() {
    return (
      <div id="root">
        <div id="left-column">
          <Chat/>
        </div>
        <div id="right-column">
          <Characters/>
        </div>
      </div>
    );
  }
});

module.exports = Root;
