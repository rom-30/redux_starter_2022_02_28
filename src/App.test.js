import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import axios from 'axios';

describe('App', () => {
  test('it renders a clickable heading to refresh content', () => {
    renderWithReduxProvider(<App />)
    const heading = screen.getByRole('heading', { name: 'refresh' })
    userEvent.click(heading)
    expect(axios.get).toHaveBeenCalled()
  })
})
