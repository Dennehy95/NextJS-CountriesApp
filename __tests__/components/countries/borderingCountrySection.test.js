import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { constants } from '../../../__mocks__/testConstants'

import BorderingCountrySection from './../../../src/app/components/countries/BorderingCountrySection';

describe('BorderingCountrySection', () => {
  it('renders correctly with borderingCountries data', () => {
    render(<BorderingCountrySection borderingCountries={constants.BORDERING_COUNTRIES_MOCK_DATA} />);

    const country1Name = screen.getByText('Country 1');
    const country1Population = screen.getByText('Population: 100000');
    const country1Flag = screen.getByAltText('Flag of Country 1');

    const country2Name = screen.getByText('Country 2');
    const country2Population = screen.getByText('Population: 50000');
    const country2Flag = screen.getByAltText('Flag of Country 2');

    expect(country1Name).toBeInTheDocument();
    expect(country1Population).toBeInTheDocument();
    expect(country1Flag).toBeInTheDocument();

    expect(country2Name).toBeInTheDocument();
    expect(country2Population).toBeInTheDocument();
    expect(country2Flag).toBeInTheDocument();
  });

  it('renders correctly with empty borderingCountries data', () => {
    const borderingCountries = [];
    render(<BorderingCountrySection borderingCountries={borderingCountries} />);

    const emptyMessage = screen.getByText('No bordering countries.');
    expect(emptyMessage).toBeInTheDocument();
  });
});
