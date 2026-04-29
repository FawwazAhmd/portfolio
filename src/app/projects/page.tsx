import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/layout/SimpleLayout'

import { projectHeadLine, projectIntro, projects } from '@/config/infoConfig'

import { ProjectCard } from '@/components/project/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A selection of my projects in machine learning, cloud computing, and web development.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title={projectHeadLine}
      intro={projectIntro}
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 pb-10"
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </SimpleLayout>
  )
}