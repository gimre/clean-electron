
const { $ } = require( '../../utils/vdom' )
const List = require( './list' )

module.exports = ( {
    colors = [ ],
    items
} ) => (
    $( List, {
        items: items.map( ( item, index ) => (
            $( 'div', {
                style: {
                    backgroundColor: colors[ index ]
                }
            }, item )
        ) )
    } )
)
