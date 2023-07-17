import useWindowSize from "@/libs/useWindowSize";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityArcadeControllerSimulator = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "ArcadeController/Build/ArcadeControllerSimulator.loader.js",
    dataUrl: "ArcadeController/Build/ArcadeControllerSimulator.data.unityweb",
    frameworkUrl:
      "ArcadeController/Build/ArcadeControllerSimulator.framework.js.unityweb",
    codeUrl: "ArcadeController/Build/ArcadeControllerSimulator.wasm.unityweb",
  });

  const [width, height] = useWindowSize();

  return (
    <Unity
      unityProvider={unityProvider}
      style={{ width: width, height: height, overflow: "hidden" }}
    />
  );
};

export default UnityArcadeControllerSimulator;
