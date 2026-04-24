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
  },
}

export default preview
