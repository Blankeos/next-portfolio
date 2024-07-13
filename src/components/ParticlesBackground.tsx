// ===========================================================================
// Reference: https://www.npmjs.com/package/@tsparticles/react
// ===========================================================================

import { IOptions, RecursivePartial } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';

import { loadSlim } from '@tsparticles/slim';

import { useEffect, useMemo, useState } from 'react';

const ParticlesBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      // await loadAll(engine) // @tsparticles/all
      // await loadFull(engine) // @tsparticles/full
      await loadSlim(engine); // @tsparticles/slim
      // await loadBasic(engine) // @tsparticles/basic
    }).then(() => {
      setInit(true);
    });
  }, []);
  const options = useMemo<RecursivePartial<IOptions>>(
    () => ({
      fpsLimit: 120,
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 1280,
          },
        },
        color: {
          value: '#6B7280',
        },
        links: {
          color: '#6B7280',
          distance: 100,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: false,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return;

  return (
    <Particles
      id="particles"
      className="fixed h-full w-full object-cover"
      options={options as any}
    />
  );
};

export default ParticlesBackground;
