const toggleSwitch = document.getElementById('theme-toggle');
const body = document.body;

toggleSwitch.addEventListener('change', () => {
    body.classList.toggle('light-theme');
});
