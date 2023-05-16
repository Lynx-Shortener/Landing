const slider = document.getElementById("image-slider-main");
const handle = slider.querySelector(".slider-handle")
const images = slider.querySelector(".images")
console.log(handle)

const 

handle.addEventListener("mousedown", (e) => {
    handle.classList.add("active");
    var dragWidth = handle.offsetWidth;
    var xPosition = handle.offsetLeft + dragWidth - e.pageX;
    images.addEventListener("mousemove", (e) => {
        var offsetWidth = e.pageX + xPosition - dragWidth
        // var percentageSlid = (offsetWidth / images.clientWidth) * 100;
        if (offsetWidth > ((handle.clientWidth / 2) * -1) && offsetWidth < (images.clientWidth - (handle.clientWidth / 2))) {
            handle.style.left = offsetWidth + "px"
        }

    })
})

handle.addEventListener("mouseup", (e) => {
    image
})