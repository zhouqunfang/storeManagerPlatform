import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'

const commonRules = {
  indent: ['warn', 2, { SwitchCase: 1 }],
  quotes: ['warn', 'single', { avoidEscape: true }],
  semi: ['warn', 'never'],
  'comma-dangle': ['warn', 'never'],
  'no-console': 'off',
  'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
  'prettier/prettier': 'warn'
}

export default [
  {
    ignores: ['dist/**', 'node_modules/**', '.idea/**', '.vscode/**', '.trae/**']
  },
  js.configs.recommended,
  ...eslintPluginVue.configs['flat/essential'],
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: commonRules
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: 'espree',
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      ...commonRules,
      'vue/multi-word-component-names': 'off',
      'vue/html-indent': ['warn', 2],
      'vue/max-attributes-per-line': [
        'warn',
        {
          singleline: 1,
          multiline: 1
        }
      ],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off'
    }
  },
  eslintConfigPrettier
]
