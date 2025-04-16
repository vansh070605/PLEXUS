 // Initialize AOS (Animation On Scroll) library
  AOS.init({ duration: 1000 });

  // Typewriter effect setup
  const phrases = [
    "Outsmart Outdated Security",
    "Safeguard What Matters",
    "Modernize Surveillance",
    "Let Tech Protect You"
  ];
  let i = 0;
  let j = 0;
  let currentPhrase = [];
  let isDeleting = false;
  let isEnd = false;

  function loop() {
    isEnd = false;
    document.getElementById('typewriter').innerHTML = currentPhrase.join('');
    if (i < phrases.length) {
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
      }

      if (isDeleting && j <= phrases[i].length) {
        currentPhrase.pop(phrases[i][j]);
        j--;
      }

      if (j === phrases[i].length) {
        isEnd = true;
        isDeleting = true;
      }

      if (isDeleting && j === 0) {
        currentPhrase = [];
        isDeleting = false;
        i++;
        if (i === phrases.length) {
          i = 0;
        }
      }
    }
    const speed = isEnd ? 2000 : isDeleting ? 50 : 100;
    setTimeout(loop, speed);
  }

  loop(); // Start the typewriter loop

  // Load particles.js configuration
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#00e0d1' // Particle color set here
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 5,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#00e0d1',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: true,
          mode: 'push'
        }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        grab: {
          distance: 150,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 10,
          duration: 1,
          opacity: 0.8,
          speed: 10
        }
      }
    },
    retina_detect: true
  });

  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  
  window.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
  
    cursorDot.style.top = `${y}px`;
    cursorDot.style.left = `${x}px`;
  
    cursorOutline.style.top = `${y}px`;
    cursorOutline.style.left = `${x}px`;
  });
  