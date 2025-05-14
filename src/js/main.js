import gsap from "gsap";
gsap.to(".first", { rotationZ: 360, duration: 50, repeat: -1 });
gsap.to(".two", { rotationZ: 360, duration: 200, repeat: -1 });
gsap.to(".three", { rotationZ: -360, duration: 300, repeat: -1 });
