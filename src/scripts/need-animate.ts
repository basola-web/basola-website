if (typeof window !== "undefined" && typeof document !== "undefined") {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("js");

  const revealEls = Array.from(document.querySelectorAll<HTMLElement>("[data-need-reveal]"));
  revealEls.forEach((el, idx) => {
    el.style.transitionDelay = `${idx * 90}ms`;
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        el.classList.add("need-visible");
        const counter = el.querySelector<HTMLElement>("[data-counter]");
        if (counter) {
          const target = parseInt(counter.dataset.target || "0", 10);
          if (prefersReduced) {
            counter.textContent = String(randomValue(target));
          } else {
            animateCounter(counter, 0, target, 1000);
          }
        }
        if (el.dataset.line !== undefined && el instanceof SVGElement) {
          drawLine(el as SVGSVGElement);
        }
        io.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  if (!prefersReduced) {
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => {
      el.classList.add("need-visible");
      const counter = el.querySelector<HTMLElement>("[data-counter]");
      if (counter) {
        const target = parseInt(counter.dataset.target || "0", 10);
        counter.textContent = String(randomValue(target));
      }
      if (el.dataset.line !== undefined && el instanceof SVGElement) {
        const path = el.querySelector<SVGPathElement>("path");
        if (path) path.style.strokeDashoffset = "0";
      }
    });
  }

  const toggle = document.getElementById("need-sources-toggle");
  const dialog = document.getElementById("need-sources-dialog") as HTMLDialogElement | null;
  const closeBtn = document.getElementById("need-sources-close");
  let lastFocused: HTMLElement | null = null;

  if (toggle && dialog && closeBtn) {
    const selectors = 'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
    toggle.addEventListener("click", () => {
      lastFocused = document.activeElement as HTMLElement;
      dialog.showModal();
      const first = dialog.querySelector<HTMLElement>(selectors);
      first?.focus();
    });
    const trap = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dialog.close();
      } else if (e.key === "Tab") {
        const focusables = Array.from(dialog.querySelectorAll<HTMLElement>(selectors));
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    dialog.addEventListener("keydown", trap);
    closeBtn.addEventListener("click", () => {
      dialog.close();
      lastFocused?.focus();
    });
    dialog.addEventListener("close", () => {
      dialog.removeEventListener("keydown", trap);
    });
  }
}

function animateCounter(el: HTMLElement, from: number, to: number, duration: number) {
  const end = randomValue(to);
  let startTime: number | null = null;
  function frame(time: number) {
    if (startTime === null) startTime = time;
    const progress = Math.min((time - startTime) / duration, 1);
    const value = Math.floor(from + (end - from) * progress);
    el.textContent = String(value);
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function randomValue(max: number) {
  return Math.floor(max - Math.random() * 5);
}

function drawLine(svg: SVGSVGElement) {
  const path = svg.querySelector("path");
  if (!path) return;
  const length = path.getTotalLength();
  path.style.strokeDasharray = `${length}`;
  path.style.strokeDashoffset = `${length}`;
  requestAnimationFrame(() => {
    path.style.transition = "stroke-dashoffset 1.2s ease";
    path.style.strokeDashoffset = "0";
  });
}
