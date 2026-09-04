import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { OrderForm } from './OrderForm';
import type { OrderSide } from '../BuySellUnit/BuySellUnit';

const meta: Meta<typeof OrderForm> = {
  title: 'Components/OrderForm',
  component: OrderForm,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/y1hJPuNFlUlkgYIYfVL2k5/Punch-Desktop-Design-System?node-id=2019-34135',
    },
    layout: 'centered',
  },
  argTypes: {
    orderType: {
      control: 'select',
      options: ['Market', 'Limit', 'Trigger'],
    },
    positionType: {
      control: 'select',
      options: ['Overnight', 'MIS', 'CNC'],
    },
    activeSide: {
      control: 'select',
      options: ['buy', 'sell'],
    },
    changeDirection: {
      control: 'select',
      options: ['up', 'down'],
    },
  },
  args: {
    scripName: 'NIFTY 24850 Call',
    changeAbsolute: '102.25',
    changePercent: '12.65%',
    changeDirection: 'up',
    positionType: 'Overnight',
    orderType: 'Market',
    qty: 65,
    lotSize: 65,
    activeSide: 'buy',
    margin: '₹6,31,619.42',
    brokerage: '₹1',
    taxes: '₹1462.26',
    onQtyChange: fn(),
    onPriceChange: fn(),
    onSideChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof OrderForm>;

export const Market: Story = {
  args: {
    orderType: 'Market',
  },
};

export const Limit: Story = {
  args: {
    orderType: 'Limit',
    price: 103.27,
  },
};

export const Trigger: Story = {
  args: {
    orderType: 'Trigger',
    price: 103.27,
  },
};

export const SellActive: Story = {
  args: {
    activeSide: 'sell',
    changeDirection: 'down',
    changeAbsolute: '-42.10',
    changePercent: '-3.15%',
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [qty, setQty] = useState(args.qty);
    const [price, setPrice] = useState(args.price ?? 103.27);
    const [side, setSide] = useState<OrderSide>(args.activeSide);
    return (
      <OrderForm
        {...args}
        qty={qty}
        onQtyChange={setQty}
        price={price}
        onPriceChange={setPrice}
        activeSide={side}
        onSideChange={setSide}
      />
    );
  },
};
