document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;

    const themes = {
        light: {
            '--background-color': '#f9f9f9',
            '--text-color': '#333333',
            '--header-bg': '#87CEEB',
            '--header-text': '#ffffff',
            '--footer-bg': '#87CEEB',
            '--footer-text': '#ffffff',
            '--card-bg': '#ffffff',
            '--card-border': '#dddddd',
            '--bg-gradient-light': 'linear-gradient(to bottom, #e0f7fa, #ffffff)'
        },
        dark: {
            '--background-color': '#121212',
            '--text-color': '#ffffff',
            '--header-bg': '#333333', 
            '--header-text': '#ffffff',
            '--footer-bg': '#333333',
            '--footer-text': '#ffffff',
            '--card-bg': '#1e1e1e',
            '--card-border': '#444444',
            '--bg-gradient-light': 'linear-gradient(to bottom, #001f3f, #000000)'
        }
    };

    let currentTheme = 'light';

    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        Object.keys(themes[currentTheme]).forEach(key => {
            root.style.setProperty(key, themes[currentTheme][key]);
        });

        themeToggle.textContent = currentTheme === 'light' ? 'Modo Escuro' : 'Modo Claro';
    });
});