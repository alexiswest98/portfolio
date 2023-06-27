import React, { Suspense, useEffect, useState } from "react";
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
extend({ OrbitControls })

const Computers = ({isMobile}) => {
  const computer = useGLTF('./Desk/desktop.gltf');

  return (  
    <mesh>   
      <hemisphereLight intensity={0.5}
        groundColor='white' />
      <pointLight intensity={0.5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.3}
        castShadow
        shadow-mapSize={1024}
        />
      <primitive
        object={computer.scene} 
        scale={isMobile ? 0.8 : 1.6}
        position={isMobile ? [0, -1.5, -0.4] : [0, -2, -1.2]}
        rotation={[0.188, 0.44, -0.167]}
        /> 
    </mesh> 
  )
}

//error handling

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to display fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return <div>Error occurred. Please try again.</div>;
    }

    // Render the component tree as normal
    return this.props.children;
  }
}

//canvas

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  return (
    <ErrorBoundary>
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
    </ErrorBoundary>
  )
}

export default ComputersCanvas;
