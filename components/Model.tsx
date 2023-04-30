import React, { useEffect } from "react";
import { useGLTF as useGLT, useProgress } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

import useCameraPosition from "./stores/useCameraPosition";
import settingModelCenter from "../hooks/settingModelCenter";
import { BuildingModel } from "../types/BuildingModel";

interface Props {
  cameraRef: React.RefObject<OrbitControlsImpl>;
}

const Model = ({ cameraRef }: Props) => {
  const model = useGLT("/model/higa.glb") as unknown as BuildingModel;
  const { active, item } = useProgress();
  const { camera } = useThree();
  const {
    setInitialPerspectiveCameraPosition,
    setInitialPerspectiveLookAtPosition,
  } = useCameraPosition((state) => state);

  // model is loaded
  const isInitialSetupAfterModelLoading =
    active === false && item.indexOf("model") !== -1;
  useEffect(() => {
    if (isInitialSetupAfterModelLoading) {
      // get initial camera setUp
      const { perspectiveLookAt, perspectivePosition } =
        settingModelCenter(model);
      camera.position.set(
        perspectivePosition.x,
        perspectivePosition.y,
        perspectivePosition.z
      );
      if (cameraRef.current) {
        cameraRef.current.target = perspectiveLookAt;
      }
      setInitialPerspectiveCameraPosition(perspectivePosition);
      setInitialPerspectiveLookAtPosition(perspectiveLookAt);

      // material set up
    }
  }, [isInitialSetupAfterModelLoading]);

  return <primitive object={model.scene} />;
};

export default Model;
