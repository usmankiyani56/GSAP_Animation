var tl = gsap.timeline({scrollTrigger:{
trigger: ".part-1",
start: "50% 50%",
end: "150% 50%",
//markers:true,
pin:true,
scrub:5,

}});
tl.to(".top-content",{
    rotateX: "110deg",
    opacity: 0,
    duration: 2,
   
},'a')
tl.to(".btm-content",{
    rotateX: "-110deg",
    opacity: 0,
    duration: 2,
   
},'a')
tl.to(".img",{
   width: "100%",
   height:"100%",
   duration: 4,
},'a')