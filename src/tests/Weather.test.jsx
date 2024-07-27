import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Weather from '../components/Weather'; // Adjust the path as necessary
import fetchMock from 'jest-fetch-mock';
import { beforeEach, test, expect } from '@jest/globals'

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

test('renders correctly and matches snapshot', () => {
  const { asFragment } = render(<Weather />);
  expect(asFragment()).toMatchSnapshot();
});

/* test('updates location state on input change', () => {
  render(<Weather />);
  const input = screen.getByPlaceholderText('Enter a city');
  fireEvent.change(input, { target: { value: 'New York' } });
  expect(input.value).toBe('New York');
});

test('fetches and displays weather data on Enter key press', async () => {
  const mockData = {
    current: { temp_c: 25, condition: { text: 'Sunny', icon: '//cdn.weatherapi.com/weather/64x64/day/113.png' } },
    location: { name: 'New York', region: 'New York', country: 'USA' },
    forecast: { forecastday: [] }
  };

  fetchMock.mockResponseOnce(JSON.stringify(mockData));

  render(<Weather />);
  const input = screen.getByPlaceholderText('Enter a city');
  fireEvent.change(input, { target: { value: 'New York' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
  await waitFor(() => expect(screen.getByText('New York')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Sunny')).toBeInTheDocument());
});

test('renders weather container correctly based on currentData state', async () => {
  render(<Weather />);
  const initialContainer = screen.getByText('Weather Forecast');
  expect(initialContainer).toBeInTheDocument();

  const mockData = {
    current: { temp_c: 25, condition: { text: 'Sunny', icon: '//cdn.weatherapi.com/weather/64x64/day/113.png' } },
    location: { name: 'New York', region: 'New York', country: 'USA' },
    forecast: { forecastday: [] }
  };

  fetchMock.mockResponseOnce(JSON.stringify(mockData));

  const input = screen.getByPlaceholderText('Enter a city');
  fireEvent.change(input, { target: { value: 'New York' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  await waitFor(() => expect(screen.queryByText('Weather Forecast')).not.toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('New York')).toBeInTheDocument());
}); */
