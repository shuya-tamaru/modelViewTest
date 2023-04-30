import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { BuildingModel } from "../types/BuildingModel";

const bbBox = new THREE.Box3();
const perspectiveLookAt = new THREE.Vector3();
const perspectivePosition = new THREE.Vector3();

const settingModelCenter = (model: BuildingModel) => {
  bbBox.setFromObject(model.scene);

  const perspectiveTargetX = (bbBox.max.x + bbBox.min.x) * 0.5;
  const perspectiveTargetZ = (bbBox.max.z + bbBox.min.z) * 0.5;
  perspectiveLookAt.set(perspectiveTargetX, 0, perspectiveTargetZ);

  const cameraOffsetDistance = 5;

  const cameraOffsetX = bbBox.min.x - cameraOffsetDistance;
  const cameraOffsetY = bbBox.max.y + cameraOffsetDistance;
  const cameraOffsetZ = bbBox.max.z + cameraOffsetDistance;
  perspectivePosition.set(cameraOffsetX, cameraOffsetY, cameraOffsetZ);

  return { bbBox, perspectiveLookAt, perspectivePosition };
};

export default settingModelCenter;
