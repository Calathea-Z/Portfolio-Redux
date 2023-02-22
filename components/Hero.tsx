import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Zach Sykes",
            "Full Stack Developer",
            "<Music Nerd />",
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>

    </div>
  )
}
export default Hero