const { render, screen } = require("@testing-library/react");
import { ToDoItem } from '../../src/08-useReducer/ToDoItem'

describe('pruebas en componente Todo Item', () => { 
    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks())

    test('debe mostrar el todo pendiente de completar', () => { 
        render(<ToDoItem 
            id = { todo.id }  
            description = { todo.description } 
            done = { todo.done }
            onDeleteTodo = { onDeleteTodoMock }
            onToggleTodo = { onToggleTodoMock }
        />);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
    
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center')
    })
 })