import { Unity, useUnityContext } from "react-unity-webgl";

const UnityArcadeControllerSimulator = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "ArcadeController/Build/Dist.loader.js",
    dataUrl: "ArcadeController/Build/Dist.data",
    frameworkUrl: "ArcadeController/Build/Dist.framework.js",
    codeUrl: "ArcadeController/Build/Dist.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
};

export default UnityArcadeControllerSimulator;
