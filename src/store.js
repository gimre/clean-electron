
const { ipcMain } = require( 'electron' )
const { combineReducers, createStore } = require( 'redux' )
const { INCREMENT_COUNT } = require( './constants' )

const count = ( state = 0, action ) => {
    switch( action.type ) {
        case INCREMENT_COUNT:
            return state + 1
        default:
            return state
    }
}

const store = createStore( combineReducers( {
    count
} ) )

module.exports = store

ipcMain.on( 'store', ( event, payload, ... args ) => {
    switch( payload ) {
        case 'dispatch': {
            const [ action ] = args
            store.dispatch( action )
        }
        case 'getState':
            return event.returnValue = store.getState( )
        default:
            return
    }
} )

