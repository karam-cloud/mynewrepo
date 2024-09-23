
var lightBox = document.querySelector('.light-box') //one Element
// i will replace to array by array.from()

var items = Array.from( document.querySelectorAll('.item img') );// nodelist
var smallBox = document.querySelector('.small-box');//one Element
// console.log(smallBox);
var nextBtn = document.querySelector('#next');//one Element
var prevBtn = document.querySelector('#prev');//one Element
var exitBtn = document.querySelector('#exit');//one Element

var currentIndex;
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function(e){
        lightBox.classList.replace('d-none', 'd-flex');
        var imgSrc = e.target.getAttribute('src');
        currentIndex = items.indexOf(e.target);
        // console.log(e.target);
        // console.log(currentIndex);
        smallBox.style.backgroundImage = `url(${imgSrc})`;
    })
}
function nextImage() {
        currentIndex++; // 1
        if (currentIndex == items.length) {
            currentIndex = 0 ;}
        var imgSrc = items[currentIndex].getAttribute('src');
        // console.log(imgSrc);
        smallBox.style.backgroundImage = `url(${imgSrc})`;
    }
function prevImage() {
    currentIndex--; // 0
    if (currentIndex < 0) {
        currentIndex = items.length-1 ;
    }
    var imgSrc = items[currentIndex].getAttribute('src');
    smallBox.style.backgroundImage = `url(${imgSrc})`;
}
function exit() {
    lightBox.classList.replace('d-flex' , 'd-none');
}
document.addEventListener("keydown" , function (e) {
    if (e.key == 'ArrowRight' || e.key == 'ArrowUp') {
        nextImage();
    }else if (e.key == 'ArrowLeft' || e.key == 'ArrowDown') {
        prevImage();
    }else if (e.key == ' ') {
        exit();
    } 
});
nextBtn.addEventListener('click' , nextImage);
prevBtn.addEventListener('click' , prevImage);
exitBtn.addEventListener('click' , exit );
//  الكود دة عشان لما اضغط برة البوكس الصغير يقفل  البوكس الصغير زي ما اكون ضغطت علي الاكس بالظبط
lightBox.addEventListener('click' , function(e){
    exit();
    // e.stopPropagation(); // no need to stop propagation here
})
// stop propagation to prevent bubbling up to lightBox
smallBox.addEventListener('click' , function(e){
    e.stopPropagation();
})