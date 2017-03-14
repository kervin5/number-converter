var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    return(
      <div>
          <p>This is the message that displays the weather</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;