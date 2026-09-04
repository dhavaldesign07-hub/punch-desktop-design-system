import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { PositionType } from './PositionType';

const meta: Meta<typeof PositionType> = {
  title: 'Components/PositionType',
  component: PositionType,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/y1hJPuNFlUlkgYIYfVL2k5/Punch-Desktop-Design-System?node-id=817-1365',
    },
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'select',
      options: ['Overnight', 'MIS', 'CNC'],
      description: 'Position type value',
    },
    hasDropdown: {
      control: 'boolean',
      description: 'Show the dropdown chevron',
    },
  },
  args: {
    value: 'Overnight',
    hasDropdown: true,
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof PositionType>;

export const Overnight: Story = {
  args: {
    value: 'Overnight',
  },
};

export const MIS: Story = {
  args: {
    value: 'MIS',
  },
};

export const CNC: Story = {
  args: {
    value: 'CNC',
  },
};

export const ReadOnly: Story = {
  args: {
    value: 'Overnight',
    hasDropdown: false,
    onClick: undefined,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <PositionType value="Overnight" hasDropdown onClick={() => {}} />
      <PositionType value="MIS" hasDropdown onClick={() => {}} />
      <PositionType value="CNC" hasDropdown onClick={() => {}} />
      <PositionType value="Overnight" hasDropdown={false} />
    </div>
  ),
};
