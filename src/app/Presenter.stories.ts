import type { Meta, StoryObj } from '@storybook/react';

import Presenter from './components/presenter';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Presenter',
  component: Presenter,
} satisfies Meta<typeof Presenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { todos: [{ id: '1' }, { id: '2' }, { id: '3' }] },
};
