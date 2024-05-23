const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.question');
    const answer = item.querySelector('.answer');
    const toggle = item.querySelector('.toggle');

    question.addEventListener('click', () => {
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        toggle.textContent = toggle.textContent === '+' ? '-' : '+';
    });
});