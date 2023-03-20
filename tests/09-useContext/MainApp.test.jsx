import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MainApp } from '../../src/09-useContext/MainApp'

describe('Pruebas en MainApp', () => { 
    test('Debe mostrar el HomePage', () => { 
        render(<MemoryRouter><MainApp /></MemoryRouter>)

        expect(screen.getByText('Home App'))
    })

    test('Debe mostrar el LOginPage', () => { 
        render(<MemoryRouter initialEntries={['/login']}><MainApp /></MemoryRouter>)

        expect(screen.getByText('Login App'))
    })

    test('Debe mostrar el AboutPage', () => { 
        render(<MemoryRouter initialEntries={['/about']}><MainApp /></MemoryRouter>)

        expect(screen.getByText('About App'))
    })
 })