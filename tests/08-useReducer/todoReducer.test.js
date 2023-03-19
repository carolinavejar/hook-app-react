import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en el todo Reducer', () => { 
    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }]
    test('debe regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState)
    })

    test('debe agregar un todo', () => { 
        const action = {
            type: 'ADD TODO',
            payload: {
                id: 2,
                description: ' Todo #2',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);
        expect ( newState.length).toBe( 2 );
        expect ( newState ).toContain(action.payload) 
    })

    test('debe eliminar un TODO', () => { 
        const action = {
            type: 'DELETE TODO',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect ( newState.length).toBe( 0 );

    });

    test('debe realizar toggle de un TODO', () => { 
        const action = {
            type: 'TOGGLE TODO',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true)
    })
 })