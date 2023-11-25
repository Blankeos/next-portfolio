import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Carlo Taleon',
}

import { FC, PropsWithChildren } from 'react'

type ProjectsLayoutProps = {} & PropsWithChildren

const ProjectsLayout: FC<ProjectsLayoutProps> = (props) => {
  return <>{props.children}</>
}

export default ProjectsLayout
