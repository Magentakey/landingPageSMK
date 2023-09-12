let image;
let imageCount = 1;
setInterval(function () {
  image = document.querySelectorAll(".imageCar img");
  if (imageCount == image.length) {
    imageCount = 0;
    image[(image.length - 1)].style.opacity = "0";
    image[imageCount].style.opacity = "1";
    imageCount = 1;
  } else {
    image[imageCount - 1].style.opacity = "0";
    image[imageCount].style.opacity = "1";
    imageCount++;
  }

}, 5000)