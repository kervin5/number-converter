var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value ; //pulls the location from input field

    if(location.length >0 ) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
            <div><input type="text" ref="location" placeholder="Enter the desired location"/></div>
            <div> <button> Get Weather </button></div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;