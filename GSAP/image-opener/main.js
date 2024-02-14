var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "30% 50%",
    end: "70% 50%",
    scrub: true,
    markers: true,
  },
});

tl.to("#imgTwo", {
  rotationX: 0,
  //duration: 1,  Adjust the duration as needed (1 is just an example)
});

tl.to("#imgThree", {
  rotationX: 0,
  //duration: 4, // Adjust the duration as needed
});

tl.to(".images", {
  marginTop: "100vh",
  // scale: 0.8,
  // transformOrigin: "50% 50%",
  scale: 0.8,
}, 'a');

tl.to(".text", {
  marginTop: "-100vh",
 // duration: 1, // Adjust the duration as needed
}, 'a');

tl.to(".overlay", {
  opacity: 1,
  //duration: 1, // Adjust the duration as needed
}, 'a');
