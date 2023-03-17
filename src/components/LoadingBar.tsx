export default function LoadingBar({
  loadingPercentage,
}: {
  loadingPercentage: number;
}) {
  return (
    <div
      className=""
      style={{
        width: "80%",
        height: "50px",
        backgroundColor: "transparent",
        border: "1px solid lightblue",
        padding: "10px",
        margin: "auto",
      }}
    >
      <div
        style={{
          width: `${loadingPercentage}%`,
          height: "100%",
          backgroundColor: "blue",
        }}
      ></div>
    </div>
  );
}
