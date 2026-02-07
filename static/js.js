gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".gsap",
    start: "top 15%",
    end: "top 25%",
    scrub: 0.6,
    markers: true
  }
});

tl.to(".gsap", {
  opacity: 0,
  y: 60,
  ease: "power2.out"
});
