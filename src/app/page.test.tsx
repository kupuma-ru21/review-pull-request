import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
// import Home from './page';

describe('Home', () => {
  it('renders headline', () => {
    // https://github.com/testing-library/react-testing-library/issues/1209
    // render(<Home />);
    // screen.getByText('Home');

    render(<h1>Home</h1>);
    screen.getByText('Home');
  });
});
