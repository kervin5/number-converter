var React = require('react');
var NumberForm = require('NumberForm');

var NumConverter = React.createClass({
    getInitialState: function () {
        return {
            decValue: 0,
            binValue: 0,
            hexValue: 0,
            octValue: 0
        }
    },

    convertDecToBase: function (num, base) {
        var result = [];
        var i = num;
        let hex_dictionary = {10 : "A", 11 : "B", 12 : "C", 13 : "D", 14 : "E", 15 : "F"};

        while(i >= 1) {
          var digit = i % base;

          if (base == 16 && digit > 9) {
            digit = hex_dictionary[digit];
          }

          result.unshift(digit);
          i = Math.floor(i / base);
        }
        return result.join('');
    },

    convertToDec: function (num, base) {
        var result = 0;
        var digits = num.split('').reverse();
        let hex_dictionary = {10 : "A", 11 : "B", 12 : "C", 13 : "D", 14 : "E", 15 : "F"};

        digits.forEach(function(number, index){
          result += number * Math.pow(base,index);
        });
        return result;
    },

    handleDecChange: function (e) {
        var that = this;
        that.setState({
            decValue: e,
            binValue: that.convertDecToBase(e, 2),
            hexValue: that.convertDecToBase(e, 16),
            octValue: that.convertDecToBase(e, 8),
        });
    },

    handleBinChange: function (e) {
        var that = this;
        that.setState({
            decValue: that.convertToDec(e,2),
            binValue: e,
            hexValue: e,
            octValue: e,
        });
    },

    handleHexChange: function (e) {
        var that = this;
        that.setState({
            decValue: e,
            binValue: that.convertDecToBase(e, 2),
            hexValue: e,
            octValue: e,
        });
    },

    handleOctChange: function (e) {
        var that = this;
        that.setState({
            decValue: e,
            binValue: that.convertDecToBase(e, 2),
            hexValue: e,
            octValue: e,
        });
    },

    render: function() {
        var {decValue, binValue, hexValue, octValue} = this.state;
        return(
            <div>
              <h3>Ingrese el numero en cualquiera de las cajas</h3>
              <NumberForm numFormat='Decimal' Number={decValue} onValueChange={this.handleDecChange} />
              <NumberForm numFormat='Binary' Number={binValue} onValueChange={this.handleBinChange} />
              <NumberForm numFormat='Hexadecimal' Number={hexValue} onValueChange={this.handleHexChange} />
              <NumberForm numFormat='Octal' Number={octValue} onValueChange={this.handleOctChange} />
            </div>
        )
    }
});

module.exports = NumConverter;