import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import Button from "../Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const globRef = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText("chotaliyaparth.pc@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  useEffect(() => {
    const glob = globRef.current;
    glob.controls().autoRotate = true;
    glob.controls().autoRotateSpeed = 1;
    glob.controls().enableZoom = false;
    glob.controls().enablePan = false;
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Parth Chotaliya</p>
              <p className="grid-subtext">
                Hi, I’m Parth Chotaliya. With nearly 4 years of experience in
                full-stack development, I specialize in building responsive
                websites using React, Next.js, Node.js, and Java. I focus on
                performance, clean code, and delivering seamless user
                experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
              <ul className="space-y-2 grid-subtext mt-4">
                <li className="flex justify-between">
                  <strong className="w-1/3">Languages:</strong>
                  <span className="w-2/3">
                    JavaScript, TypeScript, Python, Java, C, C++, HTML, CSS
                  </span>
                </li>
                <li className="flex justify-between">
                  <strong className="w-1/3">Frameworks:</strong>
                  <span className="w-2/3">
                    NodeJS, ReactJS, NextJS, ExtJS, Angular, Spring, SpringBoot,
                    Pandas
                  </span>
                </li>
                <li className="flex justify-between">
                  <strong className="w-1/3">Databases:</strong>
                  <span className="w-2/3">
                    MySQL, Oracle, PL/SQL, MongoDB, Oracle Essbase, Firebase
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globRef}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="https://unpkg.com/three-globe@2.34.4/example/img/earth-night.jpg"
                bumpImageUrl="https://unpkg.com/three-globe@2.34.4/example/img/earth-topology.png"
                // labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 150 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Toronto, Canada and open to remote work
                worldwide.
              </p>
              <a href="#footer" className="w-fit">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
              <div className="flex mt-10">
                <div className="social-icon">
                  <a
                    href="https://github.com/p-chotaliya"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/github.svg"
                      alt="github"
                      className="w-1/2 h-1/2"
                    />
                  </a>
                </div>
                <div className="social-icon">
                  <a
                    href="https://www.linkedin.com/in/parth-chotaliya-pc/"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/LinkedIn.png"
                      alt="LinkedIn"
                      className="w-1/2 h-1/2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn't just my profession—it's my passion. I enjoy
                exploring new technologies and enhancing my skills. I find joy
                in tackling complex challenges, optimizing performance, and
                creating impactful, user-friendly solutions. Collaborating with
                others to bring innovative ideas to life and continuously
                learning to stay ahead in the tech landscape fuels my
                enthusiasm. From architecting scalable systems to crafting
                beautiful, intuitive interfaces, I thrive on the creativity and
                logic coding demands.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full xl:h-[200px] md:h-[185px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div
                className="copy-container flex justify-start"
                onClick={handleCopy}
              >
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  chotaliyaparth.pc@gmail.com
                </p>
              </div>
              <div className="copy-container">
                {/* <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" /> */}
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  +1 416-890-3144
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
