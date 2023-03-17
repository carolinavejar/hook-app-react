const { renderHook } = require("@testing-library/react")
import { useCounter } from '../../src/hooks/useCounter';
describe('Pruebas en el useCounter', ()=>  {
    test('debe retornar los valores por defecto', () => { 
        const { result } = renderHook(() => useCounter ());
        const { counter, decrement, reset, increment} = result.current;

        expect (counter).toBe(1);
        expect (increment).toEqual(expect.any(Function));
        expect (decrement).toEqual(expect.any(Function));
        expect (reset).toEqual(expect.any(Function));
    });

    test('debe generar el counter con valor 100', () => { 
        const { result } = renderHook(() => useCounter (100));
        const { counter } = result.current;
        
        expect (counter).toBe(100);

    })
})