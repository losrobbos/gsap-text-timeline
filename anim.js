


const tl = gsap.timeline({ paused: true })
// hide button once anim starts
.set("button", { opacity: 0})
// fade in, one by one
.from("h1 > span", {
  duration: 2, 
  y: 150,
  opacity: 0,
  stagger: { 
    each: 0.2, 
    // from: "end" 
  },
  ease: "back(6)"
  //   ease: Elastic.easeOut
})
// rotate "out"
.to("h1 > span", {
  duration: 1.5,
  opacity: 0,
  rotateY: 90,
})
// secretely set / rotate back and place invisible at top
.set("h1 > span", {
  rotateY: 0,
  y: -200,
  scale: 0.3
})
// slightly make visible again (at top)
.to("h1 > span", {
  opacity: 0.5
})
// move into center again
.to("h1 > span", {
  duration: 2,
  scale: 1,
  opacity: 1,
  y: 0,
  ease: Elastic.easeInOut
  // ease: Linear.easeInOut
})
// scale out (in random order)
.to("h1 > span", {
  duration: 2,
  scale: 50,
  opacity: 0,
  stagger: {
    each: 0.1,
    from: "random"
  },
  ease: Power4.easeInOut
})
// secretely scale down spans again
.set("h1 > span", {
  scale: 0
})
// reactivate button
.set("button", { opacity: 1})

document.querySelector("button").addEventListener("click", () => {
  tl.restart()
})