    // Mouse‑move shapes

  const toggleBtn = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('nav-mobile');

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });


      const shapes = document.querySelectorAll('.shape');
      window.addEventListener('mousemove', e => {
        shapes.forEach((el, i) => {
          const factor = 0.01 * (i + 1);
          gsap.to(el, {
            x: (e.clientX - window.innerWidth / 2) * factor,
            y: (e.clientY - window.innerHeight / 2) * factor,
            duration: 1,
            ease: 'power2.out'
          });
        });
      });

      // ScrollTrigger animations
      document.querySelectorAll('[data-gsap]').forEach(el => {
        const type = el.getAttribute('data-gsap');
        let vars = { opacity: 0, duration: 1, ease: 'power2.out', scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reset'
        }};
        if (type === 'fade-up')       { vars.y = 50; }
        else if (type === 'fade-right'){ vars.x = -50; }
        else if (type === 'fade-left') { vars.x = 50; }
        else if (type === 'zoom-in')   { vars.scale = 0.8; }
        gsap.from(el, vars);
      });

      // GSAP SplitText animation for Hero Title
      const splitTitle = new SplitText('#hero-title', { type: 'chars' });
      gsap.from(splitTitle.chars, {
        duration: 1.2,
        opacity: 0,
        scale: 0.2,
        rotation: 180,
        x: () => gsap.utils.random(-100, 100),
        y: () => gsap.utils.random(-100, 100),
        ease: 'back.out(1.7)',
        stagger: 0.05,
        delay: 0.5
      });
      gsap.to(splitTitle.chars, {
        y: '-=10',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        duration: 1.5,
        stagger: { each: 0.1, from: 'center' },
        delay: 2
      });

      // GSAP SplitText for About section
      const splitLine = new SplitText('.split-line', { type: 'lines' });
      gsap.from(splitLine.lines, {
        duration: 1,
        opacity: 0,
        x: -50,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.split-line', start: 'top 80%' }
      });
      const splitPara = new SplitText('.split-para', { type: 'lines' });
      gsap.from(splitPara.lines, {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.split-para', start: 'top 85%', toggleActions: 'play none none reset' }
      });
      // 1. pick your text elements
const selectors = 'h1, h2, h3, p, a, button';
const textEls = document.querySelectorAll(selectors);

// 2. split them all
textEls.forEach(el => {
  el._split = new SplitText(el, { type: 'chars' });
});

// 3. animate each on scroll
textEls.forEach(el => {
  gsap.from(el._split.chars, {
    scrollTrigger: {
      trigger: el,
      start: 'top 90%',
      toggleActions: 'play reverse play reverse'
    },
    duration: 0.6,
    opacity: 0,
    y: 20,
    stagger: 0.01,
    ease: 'power2.out'
  });
});

// Optional: re‑init on page revisit (back‑forward cache)
window.addEventListener('pageshow', () => {
  ScrollTrigger.getAll().forEach(st => st.refresh());
});
 