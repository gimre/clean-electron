
const React = require( 'react' )
const { Provider } = require( 'react-redux' )
const store = require( '../remote-store' )
const Button = require( './Button' )
const Counter = require( './Counter' )

module.exports = ( ) =>
    React.createElement( Provider, { store },
        React.createElement( 'body', null,
            React.createElement( 'div', null, [
                React.createElement( Counter ),
                React.createElement( Button )
            ] )
        )
    )
