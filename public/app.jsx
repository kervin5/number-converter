var GreeterMessage = React.createClass({
  render: function (){
    var name = this.props.name;
    var message = this.props.message;
    return(
      <div>
        <h1>Helo {name}!!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

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

// Greeter container component
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

var firstName = "Kervin";

ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
  );