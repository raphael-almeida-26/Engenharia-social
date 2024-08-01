document.addEventListener('DOMContentLoaded', function() {
    // Animação para os cards
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });
    });

    // Animação de acordão para Perguntas Frequentes
    const faqButtons = document.querySelectorAll('.btn-link');

    faqButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            faqButtons.forEach(btn => btn.classList.remove('active'));

            if (!button.classList.contains('collapsed')) {
                button.classList.add('active');
            }
        });
    });
});
