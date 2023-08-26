import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders headline', () => {
    render(<Home />);
    screen.getByText('Home');
  });
});