import { Unity, useUnityContext } from "react-unity-webgl";

const UnityArcadeControllerSimulator = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl:
      "ArcadeController/Build/ArcadeControllerSimulator.data.loader.js",
    dataUrl: "ArcadeController/Build/ArcadeControllerSimulator.data.data",
    frameworkUrl:
      "ArcadeController/Build/ArcadeControllerSimulator.data.framework.js",
    codeUrl: "ArcadeController/Build/ArcadeControllerSimulator.data.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
};

export default UnityArcadeControllerSimulator;
