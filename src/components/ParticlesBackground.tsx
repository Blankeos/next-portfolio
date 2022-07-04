// tsparticles
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine, ISourceOptions } from "tsparticles-engine";
import particlesConfig from "../particles/particles.json";

const particlesInit = async (engine: Engine) => {
  console.log(engine);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(engine);
};

const ParticlesBackground: React.FC = () => {
  return (
    <Particles
      className="h-full object-cover absolute w-full"
      canvasClassName="will-change-auto h-full"
      options={particlesConfig as ISourceOptions}
      init={particlesInit}
    />
  );
};

export default ParticlesBackground;

// Source for this code: yarn create react-app --template particles-typescript
//
// Implementation from the template project:
// const particlesInit = useCallback(async (engine: Engine) => {
//     await loadFull(engine);
// }, []);
// <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
