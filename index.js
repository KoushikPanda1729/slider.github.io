const sildes = document.querySelectorAll(".slide");
let counter = 0;


sildes.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const previous = document.querySelector("#button1");
previous.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        slideImg();
        console.log(counter);
    }
})

const next = document.querySelector("#button2");

next.addEventListener("click", () => {
    if (counter < sildes.length - 1) {
        counter++;
        slideImg();
        console.log(counter);
    }
})


const slideImg = () => {
    sildes.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}
