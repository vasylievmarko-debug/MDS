import type { Preview } from '@storybook/react'
import '../src/styles/tokens.css'
import '../src/styles/reset.css'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Введение', 'Токены', ['Цвета', 'Типографика'], 'Components'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
    backgrounds: { disable: true },
  },
  decorators: [
    (Story) => (
      <div style={{
        fontFamily: 'var(--mds-font-family)',
        color: 'var(--mds-text-primary)',
        background: 'var(--mds-bg-page-1)',
        minHeight: '100vh',
      }}>
        <Story />
      </div>
    ),
  ],
}

export default preview
