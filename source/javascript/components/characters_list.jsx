var React = require('react');

var CharactersList = React.createClass({
  onSelectFactory: function(id) {
    var selectHandler = this.props.onSelect
    return function(e) {
      e.preventDefault();
      selectHandler(id);
    }
  },

  render: function() {
    var selectHandler = this.onSelectFactory;
    return (
      <ul>
        { this.props.characters.map(function(c) {
          return (
            <li key={c.id} onClick={ selectHandler(c.id) }>
              { c.name }
            </li>
          );
        }) }
      </ul>
    );
  }
});

module.exports = CharactersList;
