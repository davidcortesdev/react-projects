export const todoReducer = ( initialState = [], action) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]
        
        case '[TODO] Delete Todo':
            return [...initialState, action.payload]
    
        default:
            return initialState;
    }

}