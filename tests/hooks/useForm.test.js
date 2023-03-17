import { renderHook, act } from "@testing-library/react"
import { useForm } from '../../src/hooks/useForm';

describe('pruebas en el use form', () => { 
    const initialForm = {
        name: 'carito',
        mail: 'caro.vejarc@gmail.com'
    };

    test('debe regresar valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect (result.current).toEqual({
            name: 'carito',
            mail: 'caro.vejarc@gmail.com',
            formState: initialForm,
            onInputChange: expect.any (Function),
            onResetForm: expect.any (Function),
        })
    })

    test('debe cambiar nombre del formulario', () => {
        const newValue = 'Carolina Paola';
        const { result } = renderHook(() => useForm(initialForm));

        act(()=> { 
            result.current.onInputChange({ target: { name: 'name', value: newValue}});
        });
        expect (result.current.name).toEqual( newValue );
        expect (result.current.formState.name).toEqual( newValue );
    })

    test('debe hacer reset', () => {
        const newValue = 'Carolina Paola';
        const { result } = renderHook(() => useForm(initialForm));

        act(()=> { 
            result.current.onInputChange({ target: { name: 'name', value: newValue}});
            result.current.onResetForm();
        });
        expect (result.current.name).toEqual( initialForm.name );
        expect (result.current.formState.name).toEqual( initialForm.name );
    })
 })