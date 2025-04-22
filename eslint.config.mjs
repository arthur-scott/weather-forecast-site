import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';

export default defineConfig([
    {
        rules: {
            'no-unused-vars': 'warn',
            camelcase: 'warn',
            
        },
        files: ['**/*.{js,mjs,cjs}'],
        plugins: { js },
        extends: ['js/recommended'],
    },
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
    },
]);
