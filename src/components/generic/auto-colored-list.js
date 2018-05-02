
const { $ } = require( '../../utils/vdom' )
const ColoredList = require( './colored-list' )

const defaultGetRandomColor = pool =>
    pool[ Math.random( ) * pool.length | 0 ]

module.exports = ( {
    colors = [ ],
    getRandomColor = defaultGetRandomColor,
    items
} ) => {
    return $( ColoredList, { items,
        colors: Array.from( items )
            .map( ( ) => getRandomColor( colors ) )
    } )
}
