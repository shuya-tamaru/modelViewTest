import React, { useRef } from "react";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { OrbitControls } from "@react-three/drei";

import Model from "./Model";
import EnvironmentSetting from "./EnvironmentSetting";

const Experience = () => {
  const cameraRef = useRef<OrbitControlsImpl>(null);

  return (
    <>
      <OrbitControls
        ref={cameraRef}
        // enableZoom={isPerspective ? true : false}
        // reverseOrbit={isPerspective ? false : true}
        makeDefault
      />
      <EnvironmentSetting />
      <Model cameraRef={cameraRef} />
    </>
  );
};

export default Experience;
