var React = require('react');
var Firebase = require('firebase');
var ReactFire = require('reactfire');

var CharactersList = require('../components/characters_list.jsx');

var Characters = React.createClass({
  mixins: [ ReactFire ],

  componentWillMount: function() {
    this.bindAsArray(new Firebase('https://resplendent-inferno-2374.firebaseio.com/characters/'), 'characters');
  },

  getInitialState: function() {
    return {
      characters: []
    };
  },

  render: function() {
    return (
      <section id="characters">
        <header>Characters</header>
        <CharactersList characters={ this.state.characters }/>
      </section>
    );
  }
});

module.exports = Characters;
