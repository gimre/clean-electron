
const { BrowserWindow } = require( 'electron' )

module.exports = class ReactWindow extends BrowserWindow {
    constructor( Component, options ) {
        super( { ... options } )
        this.loadURL( `react://${ Component }` )
        this.webContents.openDevTools( )
    }
}
