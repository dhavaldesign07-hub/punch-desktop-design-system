import type { Preview } from '@storybook/react-vite'

import '../src/styles/tokens.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },

  decorators: [
    (Story) => (
      <div style={{ background: '#101529', padding: 32, display: 'inline-block', boxSizing: 'border-box' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;