// Define an array of image URLs
const imageUrls = [
    'image-url-1.jpg',
    'image-url-2.jpg',
    'image-url-3.jpg',
    // Add more image URLs as needed
];

// Get references to the elements
const carouselImage = document.getElementById('carouselImage');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
// Optionally, you can get a reference to the caption element if you want to add captions
// const imageCaption = document.getElementById('imageCaption');

// Initialize the carousel with the first image
let currentIndex = 0;
carouselImage.src = imageUrls[currentIndex];

// Function to display the next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    carouselImage.src = imageUrls[currentIndex];
    // Optionally, update the caption here if you have one
}

// Function to display the previous image
function showPreviousImage() {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    carouselImage.src = imageUrls[currentIndex];
    // Optionally, update the caption here if you have one
}

// Add event listeners to the previous and next buttons
previousButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);
