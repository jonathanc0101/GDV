import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "../../Unificacion de tutorial/Build/Unificacion de tutorial.loader.js",
    dataUrl: "./../Unificacion de tutorial/Build/Unificacion de tutorial.data",
    frameworkUrl: "./../Unificacion de tutorial/Build/Unificacion de tutorial.framework.js",
    codeUrl: "./../Unificacion de tutorial/Build/Unificacion de tutorial.wasm",
  });
  return <Unity unityProvider={unityProvider} />;
}

export default Game;
