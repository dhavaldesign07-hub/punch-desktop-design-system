import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { NumberInput } from './NumberInput';

const meta: Meta<typeof NumberInput> = {
  title: 'Components/NumberInput',
  component: NumberInput,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/y1hJPuNFlUlkgYIYfVL2k5/Punch-Desktop-Design-System?node-id=1027-844',
    },
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['enabled', 'disabled', 'hover', 'withoutSteppers', 'scalperMini', 'static', 'protection'],
      description: 'Input field variant',
    },
    value: {
      control: { type: 'number', min: 0 },
      description: 'Current numeric value',
    },
    label: {
      control: 'text',
      description: 'Label text (shown in hover and protection variants)',
    },
    step: {
      control: { type: 'number', min: 1 },
      description: 'Increment/decrement step',
    },
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
  },
  args: {
    value: 1,
    variant: 'enabled',
    onChange: fn(),
    step: 1,
    min: 0,
  },
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Enabled: Story = {
  args: {
    value: 1,
    variant: 'enabled',
  },
};

export const Disabled: Story = {
  args: {
    value: 1,
    variant: 'disabled',
  },
};

export const Hover: Story = {
  args: {
    value: 1,
    variant: 'hover',
    label: 'Lot (Qty 75)',
  },
};

export const WithoutSteppers: Story = {
  args: {
    value: 1,
    variant: 'withoutSteppers',
  },
};

export const ScalperMini: Story = {
  args: {
    value: 1,
    variant: 'scalperMini',
  },
};

export const Static: Story = {
  args: {
    variant: 'static',
    label: 'Market',
  },
};

export const ProtectionInput: Story = {
  args: {
    value: 1,
    variant: 'protection',
    label: 'Risk ₹120',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#777c99', marginBottom: 8 }}>Enabled</div>
        <NumberInput value={1} onChange={() => {}} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#777c99', marginBottom: 8 }}>Disabled</div>
        <NumberInput value={1} variant="disabled" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#777c99', marginBottom: 8 }}>Hover</div>
        <NumberInput value={1} variant="hover" label="Lot (Qty 75)" onChange={() => {}} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#777c99', marginBottom: 8 }}>W/O Steppers</div>
        <NumberInput value={1} variant="withoutSteppers" onChange={() => {}} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#777c99', marginBottom: 8 }}>Scalper Mini</div>
        <NumberInput value={1} variant="scalperMini" onChange={() => {}} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#777c99', marginBottom: 8 }}>Static</div>
        <NumberInput value={0} variant="static" label="Market" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#777c99', marginBottom: 8 }}>Protection</div>
        <NumberInput value={1} variant="protection" label="Risk ₹120" onChange={() => {}} />
      </div>
    </div>
  ),
};
