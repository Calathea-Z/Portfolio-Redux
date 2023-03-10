import Image from "next/image";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
import profilePic from "../public/assets/profile.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Zach Sykes", "Full Stack Developer", "<Music Nerd />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={profilePic}
        alt="Zach Sykes Profile"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className='z-20'>
        <h2 className="text-sm uppercase text-slate-300 pb-2 tracking-[15px] ">
          Software Engineer
        </h2>
        <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5"> 
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href='#contact'>
            <button className='heroButton'>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Hero;
