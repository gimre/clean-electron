
const { app, BrowserWindow, protocol } = require( 'electron' )
const path = require( 'path' )

const ReactWindow = require( './el/utils/react-window' )

protocol.registerStandardSchemes( [ 'react' ] )

app
.on('window-all-closed', ( ) => app.quit() )
.on('ready', ( ) => {
    protocol.registerFileProtocol( 'react', ( req, cb ) => {
        const [ , componentName = '404' ] =
            req.url.match( /react:\/\/([^\/]+)\/?/ ) || [ ]
        cb( path.join( __dirname, '/ui/components', `${ componentName }.js` ) )
    } )
    new ReactWindow( 'HelloWorld' )
} )

