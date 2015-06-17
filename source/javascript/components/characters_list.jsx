var React = require('react');

var CharactersList = React.createClass({
  render: function() {
    return (
      <ul>
        { this.props.characters.map(function(c) {
          return (
            <li>
              { c.name }
            </li>
          );
        }) }
      </ul>
    );
  }
});

module.exports = CharactersList;
