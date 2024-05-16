const PreviewImg = document.getElementById("largeImg");

const images = document.getElementsByClassName("images");

var selectedImage = "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

console.log(selectedImage);

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", function () {
    PreviewImg.src = this.src;
    this.style.border = "4px solid Black";
  });

  images[i].addEventListener("mouseout", function () {
    PreviewImg.src = selectedImage;
    this.style.border = "4px solid transparent";
  });

  images[i].addEventListener("click", function () {
    selectedImage = this.src
    PreviewImg.src = selectedImage;
    this.style.border = "4px solid Black";
  });
}