const { render, screen, fireEvent } = require("@testing-library/react");
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
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through')

    });

    test('debe mostrar el todo completado', () => { 
        render(<ToDoItem 
            id = { todo.id }  
            description = { todo.description } 
            done = { !todo.done }
            onDeleteTodo = { onDeleteTodoMock }
            onToggleTodo = { onToggleTodoMock }
        />);

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through')
    });

    test('span debe llamar al toggle todo cuando se hace click', () => { 
        render(<ToDoItem 
            id = { todo.id }  
            description = { todo.description } 
            done = { todo.done }
            onDeleteTodo = { onDeleteTodoMock }
            onToggleTodo = { onToggleTodoMock }
        />);


        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    });

    test('span debe llamar al delete todo cuando se hace click', () => { 
        render(<ToDoItem 
            id = { todo.id }  
            description = { todo.description } 
            done = { todo.done }
            onDeleteTodo = { onDeleteTodoMock }
            onToggleTodo = { onToggleTodoMock }
        />);


        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    });
})