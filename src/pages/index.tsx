import LoadingBar from "@/components/LoadingBar";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Page() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "train_ubusan/Build/webgl.loader.js",
    dataUrl: "train_ubusan/Build/webgl.data.unityweb",
    frameworkUrl: "train_ubusan/Build/webgl.framework.js.unityweb",
    codeUrl: "train_ubusan/Build/webgl.wasm.unityweb",
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div
      className="container"
      style={{
        maxWidth: "100vw",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div
          style={{
            aspectRatio: "9/16",
            height: "100vh",
            margin: "auto",
          }}
        >
          <LoadingBar loadingPercentage={loadingPercentage}></LoadingBar>
        </div>
      )}
      <Unity
        unityProvider={unityProvider}
        matchWebGLToCanvasSize={true}
        style={{
          aspectRatio: "9/16",
          height: "100vh",
        }}
      />
    </div>
  );
}
