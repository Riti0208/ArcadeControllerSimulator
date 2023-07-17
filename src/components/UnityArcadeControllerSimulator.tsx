import { Unity, useUnityContext } from "react-unity-webgl";

const UnityArcadeControllerSimulator = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "ArcadeController/Build/ArcadeController.loader.js",
    dataUrl: "ArcadeController/Build/ArcadeController.data.unityweb",
    frameworkUrl:
      "ArcadeController/Build/ArcadeController.framework.js.unityweb",
    codeUrl: "ArcadeController/Build/ArcadeController.wasm.unityweb",
  });

  return (
    <Unity
      unityProvider={unityProvider}
      style={{ width: "100vw", height: "100vh" }}
    />
  );
};

export default UnityArcadeControllerSimulator;
