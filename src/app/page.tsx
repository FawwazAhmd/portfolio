import { Container } from '@/components/layout/Container'
import Career from '@/components/home/Career'
import Education from '@/components/home/Education'
import SocialLinks from '@/components/home/SocialLinks'
import { headline, introduction, techIcons, projectHeadLine, projectIntro, projects } from '@/config/infoConfig'
import { ProjectCard } from '@/components/project/ProjectCard'
import GitHubSnake from '@/components/home/GitHubSnake'
import IconCloud from "@/components/ui/icon-cloud";

export default function Home() {
  return (
    <Container className="mt-9">
      
      {/* personal info */}
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
        <div className='md:mt-20'>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl opacity-80">
            {headline}
          </h2>

          <p className="mt-6 text-base text-muted-foreground">
            {introduction}
          </p>

          {/* CV + Socials (stacked) */}
          <div className="mt-6 flex flex-col items-start gap-4">
            <a
              href="/cv.pdf"
              target="_blank"
              className="inline-flex items-center justify-center h-10 px-4 rounded-lg border border-zinc-300 text-sm font-semibold hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition"
            >
              Download CV
            </a>

            <div className="flex items-center gap-4">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="relative flex size-full items-center justify-center overflow-hidden w-full px-20 md:px-0 md:w-2/3 ml-auto md:mr-8">
          <IconCloud iconSlugs={techIcons} />
        </div>
      </div>

      {/* github snake */}
      <div className="mt-6 border-t border-zinc-100 py-8 dark:border-zinc-700/40">
        <GitHubSnake />
      </div>

      {/* projects */}
      <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl opacity-80">
          {projectHeadLine}
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mb-8">
          {projectIntro}
        </p>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} titleAs='h3'/>
          ))}
        </ul>
      </div>

      {/* CENTERED Work + Education */}
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-2xl space-y-8 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm bg-white/50 dark:bg-zinc-900/50">
          <Career />
          <Education />
        </div>
      </div>

    </Container>
  )
}