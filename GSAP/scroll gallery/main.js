var tl0 = gsap.timeline({
    delay:.5,
    duration:1
});
tl0
.from(".text p",{
    opacity: 0
})
.from(".text a",{
    opacity: 0
})
.from(".text h2",{
    opacity: 0
})
var tl = gsap.timeline({scrollTrigger:{
    trigger: "#main",
    markers: true,
    start: "50% 50%",
    end: "150% 50%",
    scrub: 1.5,
    pin:true,
}})
tl
.to("#lineone",{
    marginTop: "-120vh",
},'a')
.to("#linetwo",{
    marginTop: "20vh",
},'a')

//$('text h1').textillate({initialDelay: 200, in: {effect: 'fadeInUp' ,delayScale:1, delay:40}});
$('.text h1').textillate({ in: { effect: 'rollIn' } });