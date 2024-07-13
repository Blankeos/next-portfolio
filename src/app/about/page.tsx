import { Metadata } from 'next'
import { FC } from 'react'
import { AiFillWarning as IconWarning } from 'react-icons/ai'

type AboutPageProps = {}

export const metadata: Metadata = {
  title: 'About | Carlo Taleon',
}

const AboutPage: FC<AboutPageProps> = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-7 md:px-12">
        <div className="mt-10 h-56 rounded-2xl bg-gradient-to-tl from-primary-600 to-primary-500/80"></div>

        <p className="mt-5 flex items-center gap-x-3 rounded-xl border-2 border-yellow-500 bg-yellow-400 p-6 text-typography-400">
          <IconWarning size="1.2rem" className="text-yellow-800" />
          <span>This page is under construction.</span>
        </p>

        <h1 className="mb-1 mt-10 text-2xl font-semibold tracking-tighter">
          Carlo Antonio Taleon
          {/* <span className="text-blue-500">{'(╯•ᗣ•╰)'}</span> */}
        </h1>
        <p className="mb-8 text-sm text-neutral-600">
          An okay software engineer :D
        </p>

        <h2 className="mb-3 font-medium">Education</h2>
        <div className="flex flex-col gap-y-3 text-sm text-typography-400">
          <p>🏫 West Visayas State University</p>
          <p>🎓 BS in Computer Science major in Artificial Intelligence</p>
          <p>🏆 1.12 GWA (2nd highest in the University) + Summa Cum Laude</p>
          <p>🏆 Most Outstanding CICT Student</p>
        </div>

        <h1 className="mb-3 mt-10 text-2xl font-semibold tracking-tighter">
          Work Experience
          {/* <span className="text-blue-500">{'(╯•ᗣ•╰)'}</span> */}
        </h1>

        <p>2023 - Present</p>
        <br />
        <p>2023 Spring Valley Tech Corp.</p>
        <br />
        <p>2021-2022 Did some freelance.</p>

        <div className="h-12" />
      </div>
    </>
  )
}

export default AboutPage
