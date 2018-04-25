
const React = require( 'react' )
const { connect } = require( 'react-redux' )
const { incrementCount } = require( '../actions' )

const Button = ( { onClick } ) =>
    React.createElement( 'button', { onClick }, '+' )

const mapDispatchToProps = ( dispatch ) => ( {
    onClick: ( ) => dispatch( incrementCount( ) )
} )

module.exports = connect( null, mapDispatchToProps )( Button )
