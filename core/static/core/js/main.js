document.addEventListener('DOMContentLoaded', () => {
    const btnLight = document.getElementById('btn-light');
    const btnDark = document.getElementById('btn-dark');

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    } else {
        // Default to dark mode if user prefers it at OS level, otherwise light
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }

    // Toggle to Light Mode
    btnLight.addEventListener('click', () => {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    });

    // Toggle to Dark Mode
    btnDark.addEventListener('click', () => {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    });
});
