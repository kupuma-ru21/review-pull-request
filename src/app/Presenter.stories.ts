import type { Meta, StoryObj } from '@storybook/react';

import Presenter from './components/presenter';
import { perspectives } from './components/container';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Presenter',
  component: Presenter,
} satisfies Meta<typeof Presenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { perspectives } };
