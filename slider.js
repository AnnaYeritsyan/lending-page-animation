let sliderWrap = document.querySelectorAll(".slider-wrap")
let slider = document.querySelector(".slider");
let sl = document.querySelector(".sl")
let clonesWidth;
let sliderWidth;
let clones = [];
let disableScroll = false;
let scrollPos;
let items= [...document.querySelectorAll(".slider-item")]
console.log(items);
let images = [...document.querySelectorAll(".img-div")];
images.forEach((image, idx)=>{
    image.style.backgroundImage = `url(img/${idx+1}.jpg)`
    // console.log(image);
})
items.forEach(item=>{
    // console.log(item);
    let clone = item.cloneNode(true);
    clone.classList.add('clone');
    slider.appendChild(clone)
    clones.push(clone);
})
function getClonesWidth(){
    let width = 0;
   
    clones.forEach(clone=>{
        width +=clone.offsetWidth; 
    })
    console.log(width);
    return width;
}
function getScrollPos() {
    // 
   return sl.scrollY;
    // 
}

  function scrollUpdate(){
    if(sl.innerWidth >=760){

        // sliderWrap.style.overflow="hidden"
//   console.log("sl.scrollY");
    scrollPos = getScrollPos();
    if(clonesWidth+scrollPos >= sliderWidth){
      sl.scrollTo({top:1});

    }else if(scrollPos <=0){
       sl.scrollTo({top: sliderWidth-clonesWidth-1})
    //    console.log(sl.scrollTo({top: sliderWidth-clonesWidth-1}));
    }
    slider.style.transform = `translateY(${-sl.scrollY}px)`
    requestAnimationFrame(scrollUpdate)
  }
else{
    // sliderWrap.style.overflow = "scroll"
}
}
function onLoad(){
    calaculateDimensions()
   sl.style.width= `${sliderWidth}px`
// console.log(sl.style.he);
   sl.scrollTo({top:1})
    scrollUpdate();
}
function calaculateDimensions(){
    sliderWidth = slider.getBoundingClientRect().width;
    clonesWidth = getClonesWidth();

}

onLoad()
