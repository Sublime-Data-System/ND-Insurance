import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import react from 'eslint-plugin-react'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  ...compat.extends(
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended",
    "plugin:prettier/recommended" 
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      react,
      'unused-imports': unusedImports
    },
    rules: {
      '@next/next/no-img-element': 'off',
      '@next/next/no-html-link-for-pages': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',

      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: false,
          shorthandLast: true,
          multiline: 'first',
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: ['key', 'ref'],
          locale: 'auto'
        }
      ],

      'import/no-unresolved': 'off',
      'import/named': 'warn',
      'import/namespace': 'warn',
      'import/no-named-as-default': 'off',
      'import/export': 'warn',

      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',

          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],

      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      semi: ['error', 'never'],
      'no-var': 'error',
      'constructor-super': 'error',
      'no-class-assign': 'error',
      'for-direction': 'error',
      'getter-return': 'error',
      'no-async-promise-executor': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-constant-condition': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty-character-class': 'error',
      'no-ex-assign': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-semi': 'error',
      'no-func-assign': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-misleading-character-class': 'error',
      'no-obj-calls': 'error',
      'no-regex-spaces': 'error',
      'no-sparse-arrays': 'error',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'require-atomic-updates': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error',
      'no-empty-pattern': 'error',
      'no-fallthrough': 'error',
      'no-global-assign': 'error',
      'no-octal': 'error',
      'no-redeclare': 'error',
      'no-self-assign': 'error',
      'no-unused-labels': 'error',
      'no-useless-catch': 'error',
      'no-with': 'error',
      'no-delete-var': 'error',
      'no-shadow-restricted-names': 'error',
      'no-undef': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-const-assign': 'error',
      'no-dupe-class-members': 'error',
      'no-new-symbol': 'error',
      'no-this-before-super': 'error',
      'require-yield': 'error',
      'symbol-description': 'error',
      'space-infix-ops': 'error',
      'space-before-blocks': 'error',
      'no-trailing-spaces': 'error',
      'no-new-object': 'error',
      'no-multi-assign': 'error',
      'no-array-constructor': 'error',
      'func-call-spacing': 'error',
      'eol-last': 'error',
      'no-script-url': 'error',
      'no-return-assign': 'error',
      'no-useless-return': 'error',
      'no-proto': 'error',
      'no-new-wrappers': 'error',
      eqeqeq: 'error',
      'no-eval': 'error',
      'no-extra-label': 'error',
      'no-implied-eval': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'arrow-spacing': 'error',
      '@typescript-eslint/no-explicit-any': 'error'
    }
  },
];

export default eslintConfig;
