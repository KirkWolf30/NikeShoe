var timeline1 = gsap.timeline({defaults:{
    duration:2
}});

timeline1.from(".navbar" , {
    opacity:0,
    y:-70
})
.from(".img" , {
    y:-900,
    ease: "bounce.out"
    
})
.from(".nav-link" , {
    delay:.5,
    stagger:0.3,
    opacity:0
})

.from(".name" , {
    stagger:0.3,
    opacity:0,
    ease: "power1.out"
    
})



