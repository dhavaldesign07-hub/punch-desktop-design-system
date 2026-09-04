import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/y1hJPuNFlUlkgYIYfVL2k5/Punch-Desktop-Design-System?node-id=2212-5062',
    },
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  argTypes: {
    hasDropdown: {
      control: 'boolean',
      description: 'Show a dropdown chevron icon',
    },
    children: {
      control: 'text',
      description: 'Tag label text',
    },
  },
  args: {
    children: 'BSE',
    hasDropdown: false,
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {};

export const WithDropdown: Story = {
  args: {
    children: 'NSE',
    hasDropdown: true,
    onClick: fn(),
  },
};

export const DateTag: Story = {
  args: {
    children: '28 Aug',
  },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Tag hasDropdown onClick={() => {}}>BSE</Tag>
      <Tag hasDropdown onClick={() => {}}>NSE</Tag>
      <Tag>NSE</Tag>
      <Tag>BSE</Tag>
      <Tag>28 Aug</Tag>
    </div>
  ),
};
