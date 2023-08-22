const sildes = document.querySelectorAll(".slide");
let counter = 0;

sildes.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const previous = document.querySelector("#button1");
previous.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        if (counter == 0) {
            previous.style.display = `none`;
            next.style.display = "block";
        }
        slideImg();
    }
})

const next = document.querySelector("#button2");


next.addEventListener("click", () => {

    if (counter < sildes.length - 1) {
        counter++;
        if (counter == sildes.length - 1) {
            next.style.display = `none`;
            previous.style.display = "block";
        }
        slideImg();
    }
})


const slideImg = () => {
    sildes.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}