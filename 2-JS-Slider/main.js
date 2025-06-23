console.log("slider");

const sliderImages = [
    {
        Image: "https://static.vecteezy.com/system/resources/previews/040/890/255/non_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg"
    },
    {
        Image: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-thatguycraig000-1563356.jpg&fm=jpg",
    },
    {
        Image: "https://t4.ftcdn.net/jpg/03/57/85/41/360_F_357854155_pZ7ueCQaQ8lBl1ePCaaQ5rRUfKctxr7d.jpg"
    }
];

let index = 1;
const slideCount = sliderImages.length;

function updateSlider() {
    document.querySelector('.sliderItem').setAttribute('src', sliderImages[index].Image);
}

function prev() {
    if (index === 0) {
        index = slideCount - 1;
    } else {
        index -= 1;
    }
    updateSlider();
}

function next() {
    if (index >= slideCount - 1) {
        index = 0;
    } else {
        index += 1;
    }
    updateSlider();
}

// İlk yüklemede göster
updateSlider();

// Butonlara event ekle
document.querySelector('.prev').addEventListener('click', prev);
document.querySelector('.next').addEventListener('click', next);
