import Particles from "react-particles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { useMemo, useState } from "react";

export default function Home() {
  const [test, setTest] = useState();

  const particleOptions = {
    preset: "stars",
  };

  const customInit = async (engine) => {
    const test = await loadStarsPreset(engine);
    return test;
  };

  return <Particles options={particleOptions} init={customInit} />;
}
