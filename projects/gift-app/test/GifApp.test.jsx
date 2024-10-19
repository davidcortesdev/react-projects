/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import { GifApp } from '../src/GifApp';
import '@testing-library/jest-dom';  // Asegúrate de importar jest-dom aquí

// Mock de los componentes hijos
jest.mock('../src/components/AddCategory', () => ({
    AddCategory: ({ onNewCategory }) => {
        return (
            <input
                placeholder="Add new category"
                onChange={(e) => onNewCategory(e.target.value)}
            />
        );
    },
}));

jest.mock('../src/components/GifGrid', () => ({
    GifGrid: ({ category }) => {
        return <div>{category}</div>;
    },
}));

describe('Pruebas en el componente <GifApp />', () => {

    test('debe renderizar correctamente con las categorías por defecto', () => {
        render(<GifApp />);
        expect(screen.getByText('Dragon Ball')).toBeInTheDocument();
        expect(screen.getByText('Naruto')).toBeInTheDocument();
        
        // Usamos una función personalizada para manejar el texto fragmentado "GiftApp"
        expect(screen.getByText((content, element) => {
            const hasText = (node) => node.textContent === 'GiftApp';
            const elementHasText = hasText(element);
            const childrenDontHaveText = Array.from(element?.children || []).every(
                (child) => !hasText(child)
            );
            return elementHasText && childrenDontHaveText;
        })).toBeInTheDocument();
    });

    test('debe añadir una nueva categoría si no existe', () => {
        render(<GifApp />);

        // Simular el input para añadir una nueva categoría
        const inputElement = screen.getByPlaceholderText('Add new category');
        fireEvent.change(inputElement, { target: { value: 'One Piece' } });

        // Asegurarse que la nueva categoría se ha añadido
        expect(screen.getByText('One Piece')).toBeInTheDocument();
        expect(screen.getByText('Dragon Ball')).toBeInTheDocument();
        expect(screen.getByText('Naruto')).toBeInTheDocument();
    });

    test('no debe añadir una categoría que ya existe', () => {
        render(<GifApp />);

        // Simular el input para intentar añadir una categoría duplicada
        const inputElement = screen.getByPlaceholderText('Add new category');
        fireEvent.change(inputElement, { target: { value: 'Naruto' } });

        // Verificar que no hay duplicados
        const categories = screen.getAllByText('Naruto');
        expect(categories.length).toBe(1);  // Solo debe haber una instancia de "Naruto"
    });

    test('no debe añadir una categoría vacía', () => {
        render(<GifApp />);

        // Simular un input vacío
        const inputElement = screen.getByPlaceholderText('Add new category');
        fireEvent.change(inputElement, { target: { value: '' } });

        // Verificar que no se añadió una categoría vacía
        const categories = screen.getAllByText(/(Dragon Ball|Naruto)/);
        expect(categories.length).toBe(2);  // Solo deben estar las categorías por defecto
    });
});