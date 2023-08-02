// Replace the image URLs in the array with your desired image URLs
const imageUrls = [
    'https://i.pinimg.com/originals/12/29/07/1229073b869356517e0bad1b6b6fe64a.jpg',
    'https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/v1654157775/images2/program_content/APQaro7MlBZbE7J5VIdZBZByK5Q9tK6hFrn60ySR.jpg',
    'https://images.goabroad.com/image/upload/images2/program_content/zQTGNuuWu0zn3mAYGE5pn7FH5TpwgUGSjRE9x2ey.jpg',
    'https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/v1654157776/images2/program_content/Eg4c4Iqx0jgabjfS9ZYoVlpBCaOQNdRWLTu9vVTZ.jpg',
    // Add more image URLs if needed
];

let currentImage = 0;
const sliderImages = document.querySelectorAll('.slidery img');

function changeBackgroundImage() {
    sliderImages.forEach((img, index) => {
        img.style.opacity = index === currentImage ? 1 : 0;
    });
}

function startSlider() {
    setInterval(() => {
        currentImage = (currentImage + 1) % imageUrls.length;
        changeBackgroundImage();
    }, 5000); // Change the image every 5 seconds (adjust the duration as needed)
}

// Start the image slider when the page loads
window.onload = startSlider;
