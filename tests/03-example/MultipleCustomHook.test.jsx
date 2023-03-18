import { render, screen } from "@testing-library/react"
import { MultipleCUstonHook } from '../../src/03-example/MultipleCustomHook'

describe('Pruebas en MultipleCustomHook', () => { 
    test('debe mostrar el componente por defecto', () => { 

        render(<MultipleCUstonHook />)
        // screen.debug();
        expect (screen.getByText('Loading'));
        expect (screen.getByText('Breaking Bad Quotes'));

        const nextButton = screen.getAllByRole('button',
        {name: 'Next Quote'});
        expect (nextButton.disabled).toBeTruthy();
    })
 })