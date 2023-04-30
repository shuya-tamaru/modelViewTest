import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import * as THREE from "three";

import Experience from "./Experience";
import Interfaces from "./interfaces/Interfaces";
import { Box } from "@chakra-ui/react";

const WebGL = () => {
  return (
    <Box w="100%" h="100%" position={"relative"}>
      <Canvas
        style={{ width: "100%", height: "100%", background: "#333" }}
        camera={{
          fov: 75,
          near: 0.1,
          far: 200,
          position: [0, 0, 0],
        }}
        id="viewer"
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
      >
        <Suspense fallback={<></>}>
          <Experience />
        </Suspense>
      </Canvas>
      <Interfaces />
    </Box>
  );
};

export default WebGL;
