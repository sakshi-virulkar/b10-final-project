

var tl = gsap.timeline();

tl.from('nav > img' , {
    duration : .5,
    y : -20,
    opacity : 0,
    delay : 1,
    expo : 'expo.easeInOut'
})

.from('nav #links a' , {
    stagger : .2,
    y : -20,
    opacity : 0,
    expo : 'expo.easeInOut'
})

.from('nav>a' , {
    duration : .2,
    y : -20,
    opacity : 0,
    expo : 'expo.easeInOut'
})

.from('#des h1' , {
    duration : .3,
    y : 20,
    opacity : 0,
    expo : 'expo.easeInOut'
})

.from('#des h3' , {
    duration : .3,
    y : 20,
    opacity : 0,
    expo : 'expo.easeInOut'
})

.from('#des i' , {
    duration : .3,
    opacity : 0,
    scale : 1.05,
    expo : 'expo.easeInOut'
})

.from('#des>a' , {
    duration : .3,
    opacity : 0,
    scale : 1.05,
    expo : 'expo.easeInOut'
})

.from('#bigimg img' , {
    duration : .3,
    y : 20,
    opacity : 0,
    scale : 1.2,
    expo : 'expo.easeInOut'
})

gsap.from('#entcrs .entrelem' , {
    scrollTrigger : {
        trigger:'#entcrs',
        toggleActions: "play pause resume reverse",
        start : "top bottom"   
    },
    stagger : .3,
    y : 20,
    duration : .3,
    opacity : 0,
    expo : 'expo.easeInOut'
})

gsap.from('#crsbanner .crselem' , {
    scrollTrigger : {
        trigger:'#crsbanner',
        toggleActions: "play pause resume reverse",
        start : "top 70%"
    },
    stagger : .4,
    y : 20,
    duration : 1,
    opacity : 0,
    scale : 1.2,
    expo : 'expo.easeInOut'
})

gsap.from('#allbrands .brandselem' , {
    scrollTrigger : {
        trigger:'#allbrands',
        toggleActions: "play pause resume reverse",
        start : "top 85%"
    },
    stagger : .1,
    y : 20,
    opacity : 0,
    scale : 1.2,
    expo : 'expo.easeInOut'
})
gsap.from('#greenapp .greenelem' , {
    scrollTrigger : {
        trigger:'#greenapp',
        toggleActions: "play pause resume reverse",
        start : "top 85%"
    },
    duration : 1,
    x : 50,
    opacity : 0,    
    expo : 'expo.easeInOut'
})



var tl2 = gsap.timeline({
    scrollTrigger : {
        trigger:'#statsdet',
        toggleActions: "play pause reverse resume restart"
    }
});

tl2.from('#statsdet .detselem' , {
    stagger : .2,
    y : 30,
    opacity : 0,    
    expo : 'expo.easeInOut'
})
.from('#stats .cards' , {
    stagger : .2,
    y : 30,
    opacity : 0,    
    expo : 'expo.easeInOut'
})
.from('#stats .cards img' , {
    stagger : .2,
    y : 30,
    opacity : 0,    
    expo : 'expo.easeInOut'
})

var tl3 = gsap.timeline({
    scrollTrigger : {
        trigger : '#footer',
        toggleActions : "play ause resume reverse",
         start : "top bottom"
}
});

tl3.from('#footer .ftrelem' ,{
    stagger : .2,
    y : 30,
    opacity : 0,    
    expo : 'expo.easeInOut'
})