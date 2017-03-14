var React = require('react');

var WeatherForm = React.createClass({
  render: function() {
    return(
      <div>
          <h1>Get Weather</h1>
        <form >
           <div><input type="text" placeholder="Enter the desired location"/></div>
            <div> <button> Submit </button></div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;