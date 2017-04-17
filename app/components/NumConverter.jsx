var React = require('react');
var NumberForm = require('NumberForm');
var BinTable = require('BinTable');

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
              <div className="block-1 container">
                <NumberForm  numFormat='decimal' Number={decValue} onValueChange={this.handleNumChange} />
              </div>
              <div className="block-2 container">
                <NumberForm className="bg-color-2" numFormat='binary' Number={binValue} onValueChange={this.handleNumChange} />
              </div>
              <div className="block-3 container">
                <NumberForm className="bg-color-3" numFormat='hexadecimal' Number={hexValue} onValueChange={this.handleNumChange} />
                <BinTable numFormat='hexadecimal' Number={hexValue} binNumber={binValue} />
              </div>
              <div className="block-4 container">
                <NumberForm className="bg-color-4" numFormat='octal' Number={octValue} onValueChange={this.handleNumChange} />
                <BinTable numFormat='octal' Number={octValue} binNumber={binValue} />
              </div>
            </div>
        )
    }
});

module.exports = NumConverter;