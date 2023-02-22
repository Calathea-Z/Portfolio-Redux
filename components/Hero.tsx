import { Cursor, useTypewriter } from "react-simple-typewriter"

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
    <div>
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>

    </div>
  )
}
export default Hero