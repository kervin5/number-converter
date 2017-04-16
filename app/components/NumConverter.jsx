var React = require('react');

var NumConverter = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  render: function() {

    return(
      <div>
        <h1>Hola Mundo</h1>
      </div>
    )
  }
});

module.exports = NumConverter;