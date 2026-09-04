import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { BuySellUnit, type OrderSide } from './BuySellUnit';

const meta: Meta<typeof BuySellUnit> = {
  title: 'Components/BuySellUnit',
  component: BuySellUnit,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/y1hJPuNFlUlkgYIYfVL2k5/Punch-Desktop-Design-System?node-id=2007-13863',
    },
    layout: 'centered',
  },
  argTypes: {
    activeSide: {
      control: 'select',
      options: ['buy', 'sell'],
      description: 'Which side is emphasized as the primary action',
    },
  },
  args: {
    activeSide: 'buy',
    onSideChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof BuySellUnit>;

export const BuyActive: Story = {
  args: {
    activeSide: 'buy',
  },
};

export const SellActive: Story = {
  args: {
    activeSide: 'sell',
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [side, setSide] = useState<OrderSide>(args.activeSide);
    return <BuySellUnit activeSide={side} onSideChange={setSide} />;
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
      <div style={{ textAlign: 'left' }}>
        <div style={{ fontSize: 10, color: '#777c99', marginBottom: 8 }}>Buy active</div>
        <BuySellUnit activeSide="buy" onSideChange={() => {}} />
      </div>
      <div style={{ textAlign: 'left' }}>
        <div style={{ fontSize: 10, color: '#777c99', marginBottom: 8 }}>Sell active</div>
        <BuySellUnit activeSide="sell" onSideChange={() => {}} />
      </div>
    </div>
  ),
};
