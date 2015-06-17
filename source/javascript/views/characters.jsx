var React = require('react');
var Firebase = require('firebase');
var ReactFire = require('reactfire');
var _ = require('lodash');

var CharactersList = require('../components/characters_list.jsx');
var Character = require('../components/character.jsx');

var Characters = React.createClass({
  mixins: [ ReactFire ],

  componentWillMount: function() {
    this.bindAsObject(new Firebase('https://resplendent-inferno-2374.firebaseio.com/characters/'), 'characters');
  },

  getInitialState: function() {
    return {
      characters: {},
      selected: null
    };
  },

  selectCharacter: function(id) {
    this.setState({ selected: id });
  },

  deselectHandler: function(e) {
    e.preventDefault();
    this.selectCharacter(null);
  },

  renderHeader: function() {
    if (this.state.selected) {
      return (
        <span>
          <a onClick={ this.deselectHandler }>Characters</a>
          { " > " + this.state.characters[this.state.selected].name }
        </span>
      );
    } else {
      return "Characters";
    }
  },

  renderContent: function() {
    if (this.state.selected) {
      return (
        <Character character={ this.state.characters[this.state.selected] }/>
      )
    } else {
      charactersArray = _.map(this.state.characters, function(val, key) {
        character = _.clone(val);
        character.id = key;
        return character;
      });
      return (
        <CharactersList characters={ charactersArray } onSelect={ this.selectCharacter }/>
      );
    }
  },

  render: function() {
    return (
      <section id="characters">
        <header>{ this.renderHeader() }</header>
        { this.renderContent() }
      </section>
    );
  }
});

module.exports = Characters;
