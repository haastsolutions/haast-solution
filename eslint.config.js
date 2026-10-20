import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // These two are React-Compiler "purity" advisories (v7 of the hooks plugin). The project does not use
      // the React Compiler, and the flagged code is the common "latest value in a ref" / "reset state in an
      // effect" pattern inside the self-contained canvas widgets. They are not correctness bugs, so they are
      // surfaced as warnings instead of failing the lint run.
      'react-hooks/refs': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
  {
    // Self-contained UI widgets that export helpers/constants next to the component.
    // This only affects dev-time Fast Refresh (not production), so it is switched off for these files.
    files: [
      'src/components/ui/open-slot-booking.tsx',
      'src/components/ui/glass-folder-cards.tsx',
      'src/components/ui/lanyard-badge.tsx',
    ],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
])
