import pluginJs from '@eslint/js';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
  { languageOptions: { globals: globals.browser } },
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', 'postcss.config.js'],
  },

  ...vueTsEslintConfig(),
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  pluginPrettier,
  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      'vue/multi-word-component-names': 'off',
      'vue/valid-v-slot': 0,
      'no-warning-comments': 'warn',
      'no-console': ['error', { allow: ['error', 'warn', 'debug'] }],
    },
  },
];
