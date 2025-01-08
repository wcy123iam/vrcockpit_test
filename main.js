const panoramaImage = new PANOLENS.ImagePanorama("image/cockpit.JPEG");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.6,

});

viewer.add(panoramaImage);
