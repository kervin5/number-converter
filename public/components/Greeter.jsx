// Greeter container component
var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: "This is from the compponent default"
    };
  },
  
  getInitialState: function (){
    return {
      name: this.props.name,
      message: this.props.message
    };
  },

  handleNewData: function (updates) {
    this.setState(updates);
  },

  // handleNewMessage: function (message){
  //   this.setState({
  //     message: message
  //   });
  // }
  // ,

  render: function() {
    var name = this.state.name;
    var message = this.state.message;
    return(
      <div>
        <GreeterMessage name={name} message={message}/>
        
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports = Greeter;