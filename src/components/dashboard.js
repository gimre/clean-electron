
const { Provider } = require( 'react-redux' )
const { $ } = require( '../utils/vdom' )
const store = require( '../remote-store' )

const List = require( './generic/auto-colored-list' )

const items = [ 1, 2, 3 ]
const colors = [ 'blue', 'red' ]

module.exports = ( ) =>
    $( Provider, { store },
        $( 'body', null,
            $( 'div', null, $( List, { colors, items } ) )
        )
    )
