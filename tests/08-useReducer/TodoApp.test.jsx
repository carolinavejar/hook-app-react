import { render , screen } from "@testing-library/react";
import { TodoApp } from '../../src/08-useReducer/TodoApp'
import { useTodo } from "../../src/hooks/useTodo";

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en el TodoApp', () => { 
    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'Todo #1', done: true },
            { id: 2, description: 'Todo #2', done: false }
        ],
        pendingTodosCount: 1,
        todosCount: 2,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    });
    
    test('debe mostrar el componente correctamente', () => { 
        render(<TodoApp/>);
        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
     })
 })