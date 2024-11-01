document.addEventListener('DOMContentLoaded', () => {
    const nodes = document.querySelectorAll('.node');
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const span = document.getElementsByClassName('close')[0];

    nodes.forEach(node => {
        node.addEventListener('click', () => {
            const description = node.getAttribute('data-description');
            modalContent.innerHTML = `<span class="close">&times;</span>${description}`;
            modal.style.display = 'block';
        });
    });

    span.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
