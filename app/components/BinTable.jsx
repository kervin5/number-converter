var React = require('react');

var BinTable = React.createClass({

    getInitialState: function () {
        return {
            numFormat: this.props.numFormat,
            Number: this.props.Number.toString(),
            binaryValue: this.props.binNumber.toString(),
        }
    },


    componentWillReceiveProps(nextProps) {
        this.setState({ Number: nextProps.Number });
        this.setState({ binaryValue: nextProps.binNumber });
    },

    chunkBinary: function (num, numFormat) {
        let splitDictionary = {hexadecimal:4,octal:3};
        var grouping = splitDictionary[numFormat];
        var reversedBinary = num.toString().split('').reverse().join('');

        var formatedBin = reversedBinary.match(RegExp('.{1,'+grouping+'}','g')).reverse().map(function(digits) {
            digits += (new Array(grouping - digits.length + 1).join('0'));
            return (digits.split('').reverse().join(' '));
        });

        return formatedBin;
    },

    render: function () {
        var { Number, binaryValue, numFormat} = this.state;
        var binaryColumns;

        var digitsColumns = Number.split('').map(function(digit) {
            return (
                <td>
                    {digit}
                </td>
            );
        });

        if(binaryValue) {
            binaryColumns = this.chunkBinary(binaryValue,numFormat).map(function(digits) {
                return (
                    <td>
                        {digits}
                    </td>
                );
            });
        }

        return(
            <table className="table table-bordered">
                <tbody>
                <tr>
                    <td><strong>Digits</strong></td>
                    {digitsColumns}
                </tr>
                <tr>
                    <td><strong>Binary</strong></td>
                    {binaryColumns}
                </tr>
                </tbody>

            </table>
        )
    }
});

module.exports = BinTable;