
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smoothMobile: true,
    mobile: {
      smooth: true,
      inertia: 0.8,
      getDirection: true,
      breakpoint:0,
    },
});

// PAGE1 CURSOR ANIMATION
var p1=document.getElementById("page1");
var cur=document.getElementById("cursor")

p1.addEventListener("mousemove",function(dets){
   gsap.to(cursor,{
    x:dets.x,
    y:dets.y
   })
})

p1.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
      scale:1,
      opacity:1
    })
  })
  
  p1.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
      scale:0,
      opacity:0
    })
  })


document.getElementById("al").addEventListener("click",function(){
  alert("Sorry !! Its Just A Demo Text")
})

document.getElementById("but7").addEventListener("click",function(){
  alert("Sorry !! Its Just A Demo Button")
})

// LOADER Animation

let tl=gsap.timeline()

tl.from("#loader h3",{
  x:30,
  opacity:0,
  delay:0.7,
  duration:2,
  stagger:0.7,
})
tl.to("#loader h3",{
  x:-40,
  opacity:0,
  duration:1,
  stagger:0.1
})
tl.to("#loader",{
  opacity:0,
})
tl.to("#loader",{
  opacity:0,
  display:"none"
})
