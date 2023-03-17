import LoadingBar from "@/components/LoadingBar";

export default function Page() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoadingBar loadingPercentage={50}></LoadingBar>
    </div>
  );
}
