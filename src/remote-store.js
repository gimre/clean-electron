
const { ipcRenderer } = require( 'electron' )

const subscribers = [ ]

ipcRenderer.on( 'store', ( event, payload ) => {
    switch( payload ) {
        case 'subscribe':
            for( const s of subscribers ) {
                s( )
            }
            return
        default:
            return
    }
} )

module.exports = {
    dispatch( action ) {
        return ipcRenderer.send( 'store', 'dispatch', action )
    },
    getState( ) {
        return ipcRenderer.sendSync( 'store', 'getState' )
    },
    subscribe( cb ) {
        subscribers.push( cb )
    }
}