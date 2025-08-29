import { animate, inView } from "motion";

// Schritt-für-Schritt Animation
inView(".process-step", ({ target }) => {
  animate(target,
    { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0)"] },
    {
      duration: 0.6,
      delay: [...target.parentElement.children].indexOf(target) * 0.15,
      easing: "ease-out"
    });
});

// Linie aufziehen
inView(".process-line", ({ target, stop }) => {
  animate(target,
    { scaleX: [0, 1] },
    {
      duration: 1,
      easing: "ease-in-out",
      transformOrigin: "left"
    });
  stop();
});
