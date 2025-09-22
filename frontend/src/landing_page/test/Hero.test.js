import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the "toBeInTheDocument" matcher
import Hero from "../home/Hero";


// Test Suit (can give multiple test cases in once )
describe('Hero Component', () => {
    // Test Case
    test('renders Hero component correctly', () => {
        render(<Hero />);           
        const heroImage = screen.getByAltText('HomeImage');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'media/images/media/homeHero.png');

    });
});