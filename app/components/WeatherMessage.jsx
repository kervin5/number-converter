var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var {temp, location} = this.props;
    return(
      <div>
          <h2>It is {temp} degrees in {location}</h2>
      </div>
    );
  }
});

module.exports = WeatherMessage;