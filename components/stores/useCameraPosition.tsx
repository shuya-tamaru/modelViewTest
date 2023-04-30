import { create } from "zustand";
import * as THREE from "three";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

interface ICameraPosition {
  // perspectiveCamera: OrbitControlsImpl | null;
  // setPerspectiveCamera: (state: OrbitControlsImpl) => void;
  initialPerspectiveCameraPosition: THREE.Vector3;
  setInitialPerspectiveCameraPosition: (state: THREE.Vector3) => void;
  initialPerspectiveLookAtPosition: THREE.Vector3;
  setInitialPerspectiveLookAtPosition: (state: THREE.Vector3) => void;
}

export default create<ICameraPosition>((set) => ({
  // perspectiveCamera: null,
  // setPerspectiveCamera: (state: OrbitControlsImpl) => {
  //   set(() => {
  //     return { perspectiveCamera: state };
  //   });
  // },
  initialPerspectiveCameraPosition: new THREE.Vector3(0, 0, 0),
  setInitialPerspectiveCameraPosition: (state: THREE.Vector3) => {
    set(() => {
      return { initialPerspectiveCameraPosition: state };
    });
  },
  initialPerspectiveLookAtPosition: new THREE.Vector3(0, 0, 0),
  setInitialPerspectiveLookAtPosition: (state: THREE.Vector3) => {
    set(() => {
      return { initialPerspectiveLookAtPosition: state };
    });
  },
}));
