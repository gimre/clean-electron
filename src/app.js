
const { app, BrowserWindow, protocol } = require( 'electron' )
const path = require( 'path' )
const ReactWindow = require( './utils/react-window' )

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
} )

