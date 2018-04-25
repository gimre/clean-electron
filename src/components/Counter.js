
const React = require( 'react' )
const { connect } = require( 'react-redux' )

const Counter = ( { count } ) =>
    React.createElement( 'span', null, count )

const mapStateToProps = ( { count } ) => ( {
    count
} )

module.exports = connect( mapStateToProps )( Counter )