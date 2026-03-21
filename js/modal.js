const openModalButtons = document.querySelectorAll('.js-open-modal');
const closeModalButtons = document.querySelectorAll('.js-close-modal');

function openModal(modal) {
    modal.classList.add('modal--show');
    modal.classList.remove("modal--hide");
}

function closeModal(modal) {
    modal.classList.remove('modal--show');
    modal.classList.add("modal--hide");
}

openModalButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const modalId = button.getAttribute('data-modal');
        
        const targetModal = document.getElementById(modalId);
        
        if (targetModal) {
            openModal(targetModal);
        }
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const modal = button.closest('.modal');
        
        if (modal) {
            closeModal(modal);
        }
    });
});