import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ChevronRightIcon } from '../../assets/icons/ChevronRightIcon';
import { Button, type ButtonProps } from './Button';

/**
 * `leftIcon` / `rightIcon` take any ReactNode, which Storybook can only expose as a
 * JSON editor. These two booleans stand in for them in the controls panel so the
 * icon slots can be toggled on and off like `disabled`.
 */
type ButtonStoryArgs = Omit<ButtonProps, 'leftIcon' | 'rightIcon'> & {
  leftIcon?: boolean;
  rightIcon?: boolean;
};

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/y1hJPuNFlUlkgYIYfVL2k5/Punch-Desktop-Design-System?node-id=23-654',
    },
    docs: {
      description: {
        component:
          'Primary CTA button, sourced from the Punch Desktop Design System Figma file (node `12764:14524`). ' +
          'Fixed 328×40px pill. Variant controls background/hover/focus color; `disabled` overrides to the muted state regardless of variant.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning', 'secondary'],
    },
    disabled: { control: 'boolean' },
    leftIcon: {
      control: 'boolean',
      description: 'Show the chevron icon before the label',
      table: { type: { summary: 'ReactNode' } },
    },
    rightIcon: {
      control: 'boolean',
      description: 'Show the chevron icon after the label',
      table: { type: { summary: 'ReactNode' } },
    },
  },
  args: {
    onClick: fn(),
    children: 'CTA',
    leftIcon: false,
    rightIcon: false,
  },
  render: ({ leftIcon, rightIcon, ...args }) => (
    <Button
      {...args}
      leftIcon={leftIcon ? <ChevronRightIcon /> : undefined}
      rightIcon={rightIcon ? <ChevronRightIcon /> : undefined}
    />
  ),
} satisfies Meta<ButtonStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: { variant: 'success' },
};

export const Error: Story = {
  args: { variant: 'error' },
};

export const Warning: Story = {
  args: { variant: 'warning' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Disabled: Story = {
  args: { variant: 'success', disabled: true },
};

export const WithLeftIcon: Story = {
  args: { variant: 'success', leftIcon: true },
};

export const WithRightIcon: Story = {
  args: { variant: 'success', rightIcon: true },
};

export const WithBothIcons: Story = {
  args: { variant: 'success', leftIcon: true, rightIcon: true },
};

export const AllVariants: Story = {
  render: ({ leftIcon, rightIcon, ...args }) => {
    const icons = {
      leftIcon: leftIcon ? <ChevronRightIcon /> : undefined,
      rightIcon: rightIcon ? <ChevronRightIcon /> : undefined,
    };
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Button {...args} {...icons} variant="success">CTA</Button>
        <Button {...args} {...icons} variant="error">CTA</Button>
        <Button {...args} {...icons} variant="warning">CTA</Button>
        <Button {...args} {...icons} variant="secondary">CTA</Button>
        <Button {...args} {...icons} variant="success" disabled>CTA</Button>
      </div>
    );
  },
};
