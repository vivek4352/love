function updateBackgroundImages() {
  const startImgIndex = current * imagesPerSlide + 1;
  
  rotatingImages.forEach((img, index) => {
    const imgNumber = (startImgIndex + index - 1) % totalImages + 1;
    img.src = `slide ${imgNumber}.jpg`;  // <-- Updated line
    img.style.display = 'block';
    img.style.opacity = '0';
    
    // Fade in the new image
    setTimeout(() => {
      img.style.opacity = '0.7';
    }, 50);
  });
}
