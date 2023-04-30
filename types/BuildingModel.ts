import { ObjectMap } from "@react-three/fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export type BuildingModel = GLTF & ObjectMap;
