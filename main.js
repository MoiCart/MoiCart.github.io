//PARTICLES ORANGE//
particlesJS("bgParticles",
{
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#5eff00"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.32460945425035526,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 8.011985930952697,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 80.11985930952699,
      "color": "#ffffff",
      "opacity": 0.20029964827381747,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 2643.9553572143905,
        "rotateY": 961.4383117143238
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 119.88011988011988,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 109.5556908094949,
        "size": 0,
        "duration": 0.9738283627510659,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 154.18949076891874,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
})
