export const todoReducer = (initialState = [], action)=> {

    switch ( action.type ) {
        case 'ADD TODO':
            return [...initialState, action.payload]
    
        default:
            initialState;
    }
}