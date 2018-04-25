
module.exports = [
    'INCREMENT_COUNT'
].reduce( ( actions, actionName ) => ( {
    ... actions,
    [ actionName ]: Symbol( actionName )
} ), { } )
