import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../particles/particles.json";
import type { Engine, Container, ISourceOptions } from "tsparticles-engine";

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  // const particlesLoaded = useCallback(async (container: Container) => {
  //   await console.log(container);
  // }, []);

  return (
    <Particles
      className="h-full object-cover absolute w-full"
      canvasClassName="will-change-auto h-full"
      options={particlesConfig as any}
      init={particlesInit}
    />
  );
};

export default ParticlesBackground;
