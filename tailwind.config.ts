import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'var(--font-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Terminal surfaces, darkest to lightest
        ink: '#08090A',
        panel: '#0D1012',
        raised: '#12171A',
        line: '#1D2529',
        edge: '#2C373C',
        // Text
        fg: '#DDE6E3',
        dim: '#8A9994',
        faint: '#4E5B5E',
        // Semantic accents, mapped onto git log colours
        phosphor: {
          DEFAULT: '#5CF29B',
          dim: '#2A9A63',
          deep: '#0E2E1E',
        },
        signal: {
          DEFAULT: '#F5B849',
          deep: '#312208',
        },
        wire: {
          DEFAULT: '#5BC8F5',
          deep: '#0B2733',
        },
        rose: '#F2789B',
      },
      maxWidth: {
        shell: '78rem',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'rise-in': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1.1s steps(1) infinite',
        'rise-in': 'rise-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.4s ease both',
      },
    },
  },
  plugins: [],
}
export default config
