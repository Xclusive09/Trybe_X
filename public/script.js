// script.js

document.addEventListener('DOMContentLoaded', () => {
    const openOverlayBtn = document.getElementById('openOverlayBtn');
    const overlay = document.getElementById('overlay');
    const closeOverlayBtn = document.getElementById('closeOverlayBtn');

    openOverlayBtn.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    closeOverlayBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});
