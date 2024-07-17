import type { Config } from 'tailwindcss';

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                aqua: '#00C7B1',
                grey: '#B0B0B0',
                red: '#E2516B',
            },
        },
    },
    plugins: [],
} satisfies Config;
