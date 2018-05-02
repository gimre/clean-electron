
const { app, protocol } = require( 'electron' )
const path = require( 'path' )
const windowService = require( './services/window')
const store = require( './store' )

protocol.registerStandardSchemes( [ 'react' ], { secure: true } )

app
.on('window-all-closed', ( ) => app.quit() )
.on('ready', ( ) => {
    protocol.registerFileProtocol( 'react', ( req, cb ) => {
        const [ , componentName = '404' ] =
            req.url.match( /react:\/\/([^\/]+)\/?/ ) || [ ]
        cb( path.join( __dirname, '/templates/react.html' ) )
    } )
    windowService.openReactWindow( 'dashboard' )
} )

store.subscribe( ( ) => {
    windowService.broadcast( 'store', 'subscribe' )
} )
