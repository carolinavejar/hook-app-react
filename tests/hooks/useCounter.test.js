const { renderHook, act } = require("@testing-library/react")
import { useCounter } from '../../src/hooks/useCounter';
describe('Pruebas en el useCounter', ()=>  {
    test('debe retornar los valores por defecto', () => { 
        const { result } = renderHook(() => useCounter ());
        const { counter, decrement, reset, increment} = result.current;

        expect (counter).toBe(100);
        expect (increment).toEqual(expect.any(Function));
        expect (decrement).toEqual(expect.any(Function));
        expect (reset).toEqual(expect.any(Function));
    });

    test('debe generar el counter con valor 10', () => { 
        const { result } = renderHook(() => useCounter (10));
        const { counter } = result.current;

        expect (counter).toBe(10);
    });

    test('debe incrementar el contador', () => { 
        const { result } = renderHook(() => useCounter ());
        const { increment } = result.current;

        act(()=> { 
            increment();
            increment(5);
        });
        expect (result.current.counter ).toBe(106);
    });

    test('debe decrementar el contador', () => { 
        const { result } = renderHook(() => useCounter ());
        const { decrement } = result.current;

        act(()=> { 
            decrement();
            decrement(5);
        });
        expect (result.current.counter ).toBe(94);
    });

    test('debe hacer reset al contador', () => { 
        const { result } = renderHook(() => useCounter ());
        const { reset } = result.current;

        act(()=> { 
            reset();
        });
        expect (result.current.counter ).toBe(100);
    });

});