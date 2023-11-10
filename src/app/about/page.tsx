import { NextPage } from 'next' // named imports

const AboutPage: NextPage = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-7 md:px-12">
        <div className="mt-10 h-56 rounded-2xl bg-gradient-to-br from-sky-300 to-blue-500"></div>
        <h1 className="mt-10 text-2xl font-semibold tracking-tighter">
          There is nothing interesting about me!!{' '}
          <span className="text-blue-500">{'(╯•ᗣ•╰)'}</span>
        </h1>
        <p className="mt-5 text-gray-700">
          Just kidding! This page is under construction.
        </p>
        <div className="h-12" />
      </div>
    </>
  )
}

export default AboutPage
