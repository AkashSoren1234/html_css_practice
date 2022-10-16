const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
// const nxtBtn = document.querySelector(".nxt-btn");
const preBtn = [...document.querySelectorAll('.pre-btn')];

console.log(productContainers)

productContainers.forEach((item, i) => {
    console.log(item)
    //console.log(i)
    console.log(item.scrollLeft);
    let containerDimensions = item.getBoundingClientRect();
    console.log(containerDimensions)
    let containerWidth = containerDimensions.width;
    console.log(containerWidth)

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        console.log(item.scrollLeft)
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})