
const { Provider } = require( 'react-redux' )
const { $ } = require( '../utils/vdom' )
const store = require( '../remote-store' )
const Button = require( './Button' )
const Counter = require( './Counter' )

module.exports = ( ) =>
    $( Provider, { store },
        $( 'body', null,
            $( 'div', null, [
                $( Counter ),
                $( Button )
            ] )
        )
    )
