import gsap from "gsap";

gsap.to(".first", { rotationZ: 360, duration: 50, repeat: -1, ease: "none" });
gsap.to(".two", { rotationZ: 360, duration: 200, repeat: -1, ease: "none" });
gsap.to(".three", { rotationZ: -360, duration: 100, repeat: -1, ease: "none" });
