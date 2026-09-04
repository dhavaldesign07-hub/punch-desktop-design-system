import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { OrderType } from './OrderType';

const meta: Meta<typeof OrderType> = {
  title: 'Components/OrderType',
  component: OrderType,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/y1hJPuNFlUlkgYIYfVL2k5/Punch-Desktop-Design-System?node-id=817-1369',
    },
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'select',
      options: ['Market', 'Limit', 'Trigger'],
      description: 'Order type value',
    },
    hasDropdown: {
      control: 'boolean',
      description: 'Show the dropdown chevron',
    },
  },
  args: {
    value: 'Market',
    hasDropdown: true,
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof OrderType>;

export const Market: Story = {
  args: {
    value: 'Market',
  },
};

export const Limit: Story = {
  args: {
    value: 'Limit',
  },
};

export const Trigger: Story = {
  args: {
    value: 'Trigger',
  },
};

export const ReadOnly: Story = {
  args: {
    value: 'Market',
    hasDropdown: false,
    onClick: undefined,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <OrderType value="Market" hasDropdown={false} />
      <OrderType value="Market" hasDropdown onClick={() => {}} />
      <OrderType value="Limit" hasDropdown onClick={() => {}} />
      <OrderType value="Trigger" hasDropdown onClick={() => {}} />
    </div>
  ),
};
