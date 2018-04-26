
const ReactWindow = require( '../utils/react-window' )

let windows = [ ]

module.exports = {
    broadcast( ... args ) {
        for( const w of windows ) {
            w.webContents.send( ... args )
        }
    },
    openReactWindow( componentName ) {
        const win = new ReactWindow( componentName )
        win.on( 'close', ( ) => windows = windows.filter( w => w !== win ) )

        windows = windows.concat( win )
    }
}
