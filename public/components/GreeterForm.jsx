var React = require('react');
// Greeter form
var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      // this.props.onNewName(name);
      updates.name = name;
    }

    if (message.length > 0){
      this.refs.message.value = '';
      // this.props.onNewMessage(message);
      updates.message = message;
    }

    this.props.onNewData(updates);
  },
  render: function () {
    return(
      <form onSubmit={this.onFormSubmit}>
          <div><input type="text" ref="name" placeholder="Enter some name"/></div>
          <div><textarea  ref="message" placeholder="Enter some message"/></div>
          <div> <button> Submit </button></div>
        </form>
    );
  }
});

module.exports = GreeterForm;