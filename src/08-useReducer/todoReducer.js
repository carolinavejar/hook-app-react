export const todoReducer = (initialState = [], action)=> {
    switch ( action.type ) {
        case 'ADD TODO':
            // console.log("ADD TODO");
            return [...initialState, action.payload];

        case 'DELETE TODO':
            // console.log("DELETE TODO");
            return initialState.filter( todo =>  todo.id !== action.payload );
    
        default:
            // console.log("DEFAULT");
            initialState;
    }
}