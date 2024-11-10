import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Button from "../Button";
import HackerRoom from "../../ModelComponent/HackerRoom";
import CanvasLoader from "../../ModelComponent/CanvasLoader";
import { Leva, useControls } from "leva";
import { calculateSizes } from "../../constant/admin";
import { useMediaQuery } from "react-responsive";
import ReactLogo from "../../ModelComponent/ReactLogo";
import Cube from "../../ModelComponent/Cube";
import Rings from "../../ModelComponent/Ring";
import HeroCamera from "../../ModelComponent/HeroCamera";

const Hero = () => {

  // const controls = useControls('Room Control', {
  //   positionX:{
  //     value: 2,
  //     min: -10,
  //     max: 10
  //   },
  //   positionY:{
  //     value: -7,
  //     min: -10,
  //     max: 10
  //   },
  //   positionZ:{
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationX:{
  //     value: 0,
  //     min: -180,
  //     max: 180
  //   },
  //   rotationY:{
  //     value: -90,
  //     min: -180,
  //     max: 180
  //   },
  //   rotationZ:{
  //     value: 0,
  //     min: -180,
  //     max: 180
  //   },
  //   scale:{
  //     value: 0.08,
  //     min: 0.01,
  //     max: 1
  //   }
  // })
    // Use media queries to determine screen size
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Parth <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">A Full Stack Developer</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera >
            <group>
              <ReactLogo position={sizes.reactLogoPosition} scale={0.4} />
              <Cube position={sizes.cubePosition} scale={0.8} />
              <Rings position={sizes.ringPosition} scale={0.8} />
            </group>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 5]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
