const upBtn=document.querySelector('.up-button')
const downBtn=document.querySelector('.down-button')
const sidebar=document.querySelector('.sidebar')
const container=document.querySelector('.container')
const mainSlide=document.querySelector('.main-slide')
const slidesCount=mainSlide.querySelectorAll('div').length;

let activeSlideIndex=0

sidebar.style.top=`-${(slidesCount-1)*100}vh`;

upBtn.addEventListener('click',()=>{
    changeSlide('up');
})
downBtn.addEventListener('click',()=>{
    changeSlide('down');
})

document.addEventListener('keydown',
event=>{
console.log(event.key);
if(event.key ==='ArrowUp'){
    changeSlide('up');
}else if(event.key === 'ArrowDown'){
    changeSlide('down');
}
})

function changeSlide(direction){
    //усли направление по котором вы кликнули равно up
if(direction==='up'){
    //добавляем единицу к активному слайду
    activeSlideIndex++
    //slidesCount -это количество
    if(activeSlideIndex===slidesCount){
        activeSlideIndex=0
    }
}else if(direction==='down'){
    activeSlideIndex--;
    if(activeSlideIndex<0){
        activeSlideIndex=slidesCount-1;
    }
}

const height=container.clientHeight;

mainSlide.style.transform=`translateY(-${activeSlideIndex*height}px)`
sidebar.style.transform=`translateY(${activeSlideIndex*height}px)`;
}