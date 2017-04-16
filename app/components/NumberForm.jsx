var React = require('react');

var NumberForm = React.createClass({
    validationRules: {
        binary: {type: "text", pattern: "[0-1]"},
        decimal: {type: "number", pattern: "[0-9]"},
        hexadecimal: {type: "text", pattern: "[0-9A-Z]"},
        octal: {type: "text", pattern: "[0-7]"},
    },

    getInitialState: function () {
        return {
            numFormat: this.props.numFormat,
            Number: this.props.Number,
            Validation: this.validationRules[this.props.numFormat]
        }
    },

    convertToDec: function (num, base) {
        var result = 0;
        var digits = num.split('').reverse();
        let hex_dictionary = {"A":10, "B":11, "C":12, "D":13, "E":14, "F":15};

        digits.forEach(function(digit, index){
            if(base == 16 && isNaN(digit)) {
                digit = hex_dictionary[digit.toUpperCase()];
            }
            result += digit * Math.pow(base,index);
        });
        console.log(result);
        return result;
    },

    componentWillReceiveProps(nextProps) {
        this.setState({ Number: nextProps.Number });
    },

    handleNumberChange: function (e) {
        var that = this;
        let base_dictionary = {'decimal':10, 'binary':2, 'hexadecimal':16, 'octal':8};
        var base = base_dictionary[that.state.numFormat];
        that.props.onValueChange(that.convertToDec(e.target.value, base));
    },


    render: function () {
        var {numFormat, Number,Validation} = this.state;
        return(
            <h3>
                <input type={Validation.type} pattern={Validation.pattern} onInput={this.handleNumberChange} value={Number}/>
                {numFormat}
            </h3>
        )
    }
});

module.exports = NumberForm;