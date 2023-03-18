import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCUstonHook } from '../../src/03-example/MultipleCustomHook'
import { useCounter } from "../../src/hooks";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en MultipleCustomHook', () => { 
    const mockIncrement = jest.fn() 
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement    
    })

    // beforeEach antes de cada prueba
    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('debe mostrar el componente por defecto', () => { 
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCUstonHook />)
        // screen.debug();
        expect (screen.getByText('Loading'));
        expect (screen.getByText('Breaking Bad Quotes'));

        const nextButton = screen.getByRole('button',
        {name: 'Next Quote'});
        expect (nextButton.disabled).toBeTruthy();
    });
    
    test('debe mostrar un quote', () => { 
        useFetch.mockReturnValue({
            data: [{ author: 'Carolina', quote: 'Hola MUndo'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCUstonHook />)

        expect (screen.getByText('Hola MUndo')).toBeTruthy();
        
        const nextButton = screen.getByRole('button',
        {name: 'Next Quote'});
        expect (nextButton.disabled).toBeFalsy();
     });

     test('debe llamar fn de incrementar', () => { 
        useFetch.mockReturnValue({
            data: [{ author: 'Carolina', quote: 'Hola MUndo'}],
            isLoading: false,
            hasError: null
        });
        
        render(<MultipleCUstonHook />)

        
        const nextButton = screen.getByRole('button',
        {name: 'Next Quote'});
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();
      })
 })