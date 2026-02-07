document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });

    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
        contactBtn.style.cursor = 'pointer';
        contactBtn.style.opacity = '1';
        contactBtn.addEventListener('click', () => {
            window.open("https://forms.gle/YOUR_GOOGLE_FORM_LINK", "_blank");
        });
    }
});
