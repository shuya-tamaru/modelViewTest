import { Environment } from "@react-three/drei";

const EnvironmentSetting = () => {
  return (
    <Environment
      files={[
        "/environmentMap/px.jpg",
        "/environmentMap/nx.jpg",
        "/environmentMap/py.jpg",
        "/environmentMap/ny.jpg",
        "/environmentMap/pz.jpg",
        "/environmentMap/nz.jpg",
      ]}
    />
  );
};

export default EnvironmentSetting;
