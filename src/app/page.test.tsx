import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Wip', () => {
  it('renders headline', () => {
    render(<div>Wip</div>);
    screen.getByText('Wip');
  });
});
