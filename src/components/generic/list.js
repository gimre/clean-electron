
const { $ } = require( '../../utils/vdom' )
const { Orientations } = require( '../../utils/constants' )

module.exports = ( {
    items = [ ],
    orientation = Orientations.Vertical
} ) => (
    $( 'ul', null, items.map( ( item, key ) => (
        $( 'li', { key }, item )
    ) ) )
)
