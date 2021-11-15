import { IOptions, RecursivePartial } from "react-tsparticles";

const particlesConfigg: RecursivePartial<IOptions> = {
  background: {
    color: {
      value: "#ffffff",
    },
  },
  fpsLimit: 80,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 100,
        links: {
          color: "#E5E7EB",
          opacity: 0.5,
          blink: false,
          consent: false,
        },
      },
    },
  },
  particles: {
    color: {
      value: "#E5E7EB",
    },
    links: {
      color: "#E5E7EB",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "out",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 1280,
      },
      value: 60,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: {
        min: 0.5,
        max: 2.5,
      },
    },
  },
  detectRetina: false,
};

export default particlesConfigg;
