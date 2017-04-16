var React = require('react');

var NumberForm = React.createClass({
    getInitialState: function () {
        return {
            numFormat: this.props.numFormat,
            Number: this.props.Number
        }
    },

    componentWillReceiveProps(nextProps) {
        this.setState({ Number: nextProps.Number });
    },

    handleNumberChange: function (e) {
        var that = this;
        console.log(e.target.value);
        that.props.onValueChange(e.target.value);//Issue
    },


    render: function () {
        var {numFormat, Number} = this.state;
        return(
            <h3>
                <input onInput={this.handleNumberChange} value={Number}/>
                {Number}
            </h3>
        )
    }
});

module.exports = NumberForm;