const images = document.querySelectorAll('.zoom-image');
let currentImageIndex = 0;
let zoomLevel = 1;
let isDragging = false;
let startX, startY, initialLeft, initialTop;

window.addEventListener('wheel', (event) => {
  const zoomSpeed = 0.5;
  const maxZoom = 7;
  const minZoom = 1;


  if (event.deltaY < 0) {
    zoomLevel -= zoomSpeed;
  } else {
    zoomLevel += zoomSpeed;
  }


  if (zoomLevel > maxZoom) {
    zoomLevel = minZoom;
    switchToNextImage();
  } else if (zoomLevel < minZoom) {
    zoomLevel = minZoom;
  }


  images[currentImageIndex].style.transform = `scale(${zoomLevel})`;
});


function switchToNextImage() {
  images[currentImageIndex].style.opacity = 0;
  images[currentImageIndex].style.left = '0';
  images[currentImageIndex].style.top = '0';
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = 1;
  images[currentImageIndex].style.transform = `scale(1)`;
  zoomLevel = 1;
}
