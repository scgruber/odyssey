var React = require('react');

var Character = React.createClass({
  render: function() {
    return (
      <article className="character">
        <header className="character-name">{ this.props.character.name }</header>
        <div className="character-desc">{ this.props.character.desc }</div>
        <section className="character-aspects">
          <header>Aspects</header>
          <ul>
            { this.props.character.aspects.map(function(aspect) {
              return (
                <li key={ aspect }>{ aspect }</li>
              );
            }) }
          </ul>
        </section>
        <section className="character-skills">
          <header>Skills</header>
        </section>
      </article>
    );
  }
});

module.exports = Character;
