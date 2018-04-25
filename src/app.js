
const { app, protocol } = require( 'electron' )
const path = require( 'path' )
const ReactWindow = require( './utils/react-window' )
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

    new ReactWindow( 'HelloWorld' )
    new ReactWindow( 'HelloWorld' )
    new ReactWindow( 'HelloWorld' )
} )

store.subscribe( ( ) => {
    for( const w of ReactWindow.getAllWindows( ) ) {
        w.webContents.send( 'store', 'subscribe' )
    }
} )
