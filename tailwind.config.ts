import type { Config } from 'tailwindcss';

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                aqua: '#00C7B1',
            },
        },
    },
    plugins: [],
} satisfies Config;
