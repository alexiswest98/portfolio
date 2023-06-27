import { Html, useProgress } from "@react-three/drei";


const Loader = () => {
  const {progress} = useProgress();

  return (
    <Html center>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw"
        }}
      >
        <p
          style={{
            fontSize: 20,
            color: "#f1f1f1",
            fontWeight: 800,
          }}
        >
          3D Image {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  )
}

export default Loader;
