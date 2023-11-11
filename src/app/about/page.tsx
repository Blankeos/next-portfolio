import { FC } from 'react'
import { AiFillWarning as IconWarning } from 'react-icons/ai'

type AboutPageProps = {}

const AboutPage: FC<AboutPageProps> = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-7 md:px-12">
        <div className="from-primary-600 to-primary-500/80 mt-10 h-56 rounded-2xl bg-gradient-to-tl "></div>

        <p className="text-typography-400 mt-5 flex items-center gap-x-3 rounded-xl border-2 border-yellow-500 bg-yellow-400 p-6">
          <IconWarning size="1.2rem" className="text-yellow-800" />
          <span>This page is under construction.</span>
        </p>

        <h1 className="mb-3 mt-10 text-2xl font-semibold tracking-tighter">
          Carlo Antonio Taleon
          {/* <span className="text-blue-500">{'(╯•ᗣ•╰)'}</span> */}
        </h1>
        <div className="text-typography-400">
          <p>
            ✍ I graduated from West Visayas State University with a CS degree
            and a major in Artificial Intelligence. I{"'"}m a software engineer
            by trade: making apps, games, and solving problems that frustrate
            me.
          </p>
          <p>
            🎨 I pride myself in creating beautiful and pleasing experiences
            through the applications and websites I make. I love learning new
            technologies having worked on multiple projects with varied stacks.
          </p>
          <p>
            🎮 There{"'"}s a genuine person behind this profile, too! Outside of
            work, you may find me: playing games, working out, reading personal
            development, watching youtube, and anime. I{"'"}m also interested in
            AI, Machine Learning, Data Science, Finance, and Entrepreneurship.
          </p>
          <p>
            🚀 I started learning how to code small games when I was 10 because
            of my interest in games like Minecraft. I later started learning
            programming seriously with C# back in 2016 and published my game in
            the same year called Chromeleon. Nowadays though, my development
            stack focuses more on making web apps with modern web technologies
            like React and Typescript.
          </p>
        </div>

        <h1 className="mb-3 mt-10 text-2xl font-semibold tracking-tighter">
          Work Experience
          {/* <span className="text-blue-500">{'(╯•ᗣ•╰)'}</span> */}
        </h1>

        <p>- 2023</p>
        <p>- 2023</p>
        <div className="h-12" />
      </div>
    </>
  )
}

export default AboutPage
