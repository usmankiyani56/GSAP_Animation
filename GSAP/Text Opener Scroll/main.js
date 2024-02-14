var tl= gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        markers:true,
        start: "50% 50%",
        end: "100% 50%",
        scrub:2,
        pin:true
    }
});
tl
.to("#top",{
    top: "-50%"
},'a') //you have to give the both same name "a"
.to("#bottom",{
    bottom: "-50%"
}, 'a')
.to("#top-h",{
    top: "80%"
}, 'a')
.to("#bottom-h",{
    bottom: "-105%"
}, 'a')
.to("#content",{
    marginTop: "0%"
}, 'a')