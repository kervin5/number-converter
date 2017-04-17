var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return(
      <div>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Convertidor</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      </div>
    );
  }
});

module.exports = Nav;