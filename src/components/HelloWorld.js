
const React = require( 'react' )
const { Provider } = require( 'react-redux' )

module.exports = ( ) =>
    React.createElement( 'body', null,
        React.createElement( 'div', null, 'Hello world!' )
    )
