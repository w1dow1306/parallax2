const wor2 = document.getElementById("work")
const btn = document.getElementById("btn")
const work = document.getElementById("portfolio")
const blogs = document.getElementById("blogs")
const blgs = document.getElementById("bgl")
const nm = document.getElementsByClassName("name")
const home = document.getElementById("Home")
const hm = document.getElementById("home")
const post = document.getElementsByClassName("blog-post")
const ct = document.getElementById("cntc")
const blogsh = document.getElementById("blogsh")
const cnt = document.getElementById("contact")

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

///text animation
gsap.fromTo(nm, {
    x: -750,
    ease: "power1.inOut",
    scrub: 1,
}, {
    duration: 1.5,
    x: 0,
    scrub: 1,
    stagger: 0.16,
});
gsap.fromTo(blogsh, {
    x: -750,
    ease: "power1.inOut",
    scrub: 1,
}, {
    duration: 1.5,
    x: 0,
    scrub: 1,
    stagger: 0.16,
});
///Work page animation
gsap.fromTo(".gallery-item", {
    x: 1000,
    scrub: 1,
}, {
    scrollTrigger: {
        trigger: "#wrk",
        start: "top center",
        scrub: 1,
        end: "bottom center"
    },
    x: 0,
    yoyo: true,
    stagger: 0.16,
    scrub: 1,
});
gsap.fromTo(post, {
    x: -1000,
    delay: 0.5,
}, {
    scrollTrigger: {
        trigger: "#blogs",
        start: "top center",
        scrub: 1,
        end: "left center"
    },
    duration: 1.5,
    x: 0,
    stagger: 0.16,
});

// scroll animations
btn.addEventListener('click', () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: { y: work, },
    });
})
wor2.addEventListener('click', () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: { y: work, },
    });
})
hm.addEventListener('click', () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: { y: home, },
    });
})
blgs.addEventListener('click', () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: { y: blogs, },
    });
})
ct.addEventListener('click', () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: { y: contact, },
    });
})
//////
// var main = document.getElementById("main")
let i = 1;
let n = 1;
setInterval(() => {
    if (i > 7) {
        n = 1;
    } else {
        n = i
        i=n;    
    }
    home.style.backgroundImage = `url("./static/${n}.jpg")`;
    i = i + 1;
}, 20000);