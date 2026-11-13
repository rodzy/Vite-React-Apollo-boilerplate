// @ts-check
const react = require('@vitejs/plugin-react')

/**
 * Vite 6 config.
 *
 * Vite 1's `jsx: 'react'` option and `vite-plugin-react` are gone.
 * `@vitejs/plugin-react` compiles JSX. `jsxRuntime: 'classic'` keeps
 * `React.createElement`, because `@pika/react` is React 16 and has no
 * `react/jsx-runtime` entry.
 *
 * The alias restores what `vite-plugin-react` used to do: sources import
 * `react` / `react-dom`, while package.json depends on `@pika/react`.
 *
 * @param {{ command: 'build' | 'serve' }} env
 * @returns {import('vite').UserConfig}
 */
module.exports = ({ command }) => {
  const dev = command === 'serve'
  return {
    plugins: [
      react({ jsxRuntime: 'classic' }),
      // plugin-react always prebundles the automatic runtime. React 16 has
      // no jsx-runtime entry, so drop those ids or `vite` prints a resolve error.
      {
        name: 'omit-react-jsx-runtime-prebundle',
        enforce: 'post',
        configResolved(config) {
          const include = config.optimizeDeps && config.optimizeDeps.include
          if (!include) return
          config.optimizeDeps.include = include.filter(
            (id) => id !== 'react/jsx-runtime' && id !== 'react/jsx-dev-runtime'
          )
        },
      },
    ],
    resolve: {
      alias: [
        {
          find: /^react$/,
          replacement: require.resolve(
            dev ? '@pika/react/source.development.js' : '@pika/react'
          ),
        },
        {
          find: /^react-dom$/,
          replacement: require.resolve(
            dev
              ? '@pika/react-dom/source.development.js'
              : '@pika/react-dom'
          ),
        },
      ],
    },
  }
}
