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



    handleNumChange: function (e) {
        var that = this;
        that.setState({
            decValue: e,
            binValue: that.convertDecToBase(e, 2),
            hexValue: that.convertDecToBase(e, 16),
            octValue: that.convertDecToBase(e, 8),
        });
    },


    render: function() {
        var {decValue, binValue, hexValue, octValue} = this.state;
        return(
            <div>
              <h3>Ingrese el numero en cualquiera de las cajas</h3>
              <NumberForm numFormat='decimal' Number={decValue} onValueChange={this.handleNumChange} />
              <NumberForm numFormat='binary' Number={binValue} onValueChange={this.handleNumChange} />
              <NumberForm numFormat='hexadecimal' Number={hexValue} onValueChange={this.handleNumChange} />
              <NumberForm numFormat='octal' Number={octValue} onValueChange={this.handleNumChange} />
            </div>
        )
    }
});

module.exports = NumConverter;