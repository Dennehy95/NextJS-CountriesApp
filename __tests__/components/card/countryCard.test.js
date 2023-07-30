import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// import CountryCard from 'src/app/components/card/countryCard';
import CountryCard from './../../../src/app/components/card/countryCard';

describe('CountryCard', () => {
  const defaultProps = {
    capital: 'Capital City',
    currency: 'Euro',
    flagImage: '/example.jpg',
    flagImageAltText: 'Flag Image Alt Text',
    handleMoreDetailsClick: jest.fn(),
    languages: ['English, French'],
    name: 'Country Name',
    population: 10000,
  };

  it('renders correctly with prop values display', () => {
    render(<CountryCard {...defaultProps} />);

    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
    expect(screen.getByText(`Capital:`)).toBeInTheDocument();
    expect(screen.getByText(`${defaultProps.capital}`)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
    expect(screen.getByText(`Population:`)).toBeInTheDocument();
    expect(screen.getByText(`${defaultProps.population}`)).toBeInTheDocument();

    expect(screen.getByText(`Capital:`)).toBeInTheDocument();
    expect(screen.getByText(`${defaultProps.capital}`)).toBeInTheDocument();

    expect(screen.getByText(`${defaultProps.currency}`)).toBeInTheDocument();

    expect(screen.getByText(`${defaultProps.languages.join(', ')}`)).toBeInTheDocument();
  });

  it('renders the "More Details" button when handleMoreDetailsClick is provided', () => {
    render(<CountryCard {...defaultProps} />);

    expect(screen.getByRole('button', { name: 'More Details' })).toBeInTheDocument();
  });

  it('does not render the "More Details" button when handleMoreDetailsClick is not provided', () => {
    const propsWithoutButtonClick = { ...defaultProps, handleMoreDetailsClick: undefined };

    render(<CountryCard {...propsWithoutButtonClick} />);
    expect(screen.queryByRole('button', { name: 'More Details' })).not.toBeInTheDocument();
  });

  it('calls handleMoreDetailsClick when "More Details" button is clicked', () => {
    render(<CountryCard {...defaultProps} />);
    const button = screen.getByRole('button', { name: 'More Details' });
    fireEvent.click(button);

    expect(defaultProps.handleMoreDetailsClick).toHaveBeenCalled();
  });
});
