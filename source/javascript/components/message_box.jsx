var React = require('react');

var MessageBox = React.createClass({
  propTypes: {
    onSubmit: React.PropTypes.func.isRequired, // will be called as cb([string])
    submitText: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      submitText: 'Submit'
    };
  },

  getInitialState: function() {
    return {
      text: ''
    };
  },

  handleChange: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.text.trim().length !== 0) {
      this.props.onSubmit(this.state.text);
      this.setState({text: ''});
    }
  },

  render: function() {
    return (
      <form className="message-box" onSubmit={ this.handleSubmit }>
        <input onChange={ this.handleChange } value={ this.state.text } className="message-box-input"/>
        <button className="message-box-submit" type="submit">{ this.props.submitText }</button>
      </form>
    );
  }
});

module.exports = MessageBox;
