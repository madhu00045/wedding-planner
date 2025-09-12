// Get references to DOM elements
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeButton = document.querySelector('.close-button');

// Function to toggle the mobile menu
function toggleMenu() {
    mobileMenu.classList.toggle('show');
}

// Function to open the image modal
function openModal(event) {
    const imageSrc = event.target.getAttribute('data-full-src');
    
    // Set the modal image source
    modalImage.src = imageSrc;
    modal.style.display = 'flex';
}

// Function to close the image modal
function closeModal() {
    modal.style.display = 'none';
}

// Add event listeners

menuButton.addEventListener('click', toggleMenu);
galleryItems.forEach(item => {
    item.addEventListener('click', openModal);
});

closeButton.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});