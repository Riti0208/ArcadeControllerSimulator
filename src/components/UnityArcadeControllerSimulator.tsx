import { Unity, useUnityContext } from "react-unity-webgl";

const UnityArcadeControllerSimulator = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "ArcadeController/Build/ArcadeControllerSimulator.loader.js",
    dataUrl: "ArcadeController/Build/ArcadeControllerSimulator.data.unityweb",
    frameworkUrl:
      "ArcadeController/Build/ArcadeControllerSimulator.framework.js.unityweb",
    codeUrl: "ArcadeController/Build/ArcadeControllerSimulator.wasm.unityweb",
  });

  return <Unity unityProvider={unityProvider} />;
};

export default UnityArcadeControllerSimulator;
