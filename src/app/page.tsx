import { DATA } from "@/data/portfolio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeButton } from "@/components/theme-button";
import Markdown from "react-markdown";
import Image from "next/image";
import { ResumeCard } from "@/components/resume-card";
import { ProjectCard } from "@/components/project-card";
import { Email } from "./icons/email";
import { Linkedin } from "./icons/linkedin";
import { X } from "./icons/x";
import { Github } from "./icons/github";

export default function Page() {
  return (<>
    <div className="fixed top-0 right-0 p-4">
      <ThemeButton />
    </div>
    <main className="flex flex-col w-full space-y-10">
      <section id="hero">
        <div className="flex flex-row">
          <div className="flex flex-col space-y-1.5">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
              Hi, I'm {DATA.name.split(" ")[0]} 👋
            </h1>
            <p className="text-xl pr-2">{DATA.description}</p>
          </div>
          <div>
            <Avatar className="size-28 border">
              <AvatarImage src={DATA.avatarUrl} alt={DATA.name} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>
      <section id="about">
        <h2 className="text-xl font-bold">
          About
        </h2>
        <Markdown className="prose dark:prose-invert text-pretty text-muted-foreground text-base max-w-full text-justify">{DATA.summary}</Markdown>
      </section>
      <section id="photos">
        <div className="columns-2 sm:columns-3 gap-4">
          {DATA.photos.map((photo, index) => (
            <Image key={index} src={photo} alt={DATA.name} className="rounded-lg mb-4" width={300} height={300} />
          ))}
        </div>
      </section>
      <section id="work">
        <h2 className="text-xl font-bold mb-4">
          Work Experience
        </h2>
        <div className="flex flex-col gap-y-4">
          {DATA.works.map((work, index) => (
            <ResumeCard key={index} title={work.title} role={work.role} start={work.start} end={work.end} logo={work.logo} description={work.description} />
          ))}
        </div>
      </section>
      <section id="education">
        <h2 className="text-xl font-bold mb-4">
          Education
        </h2>
        <div className="flex flex-col gap-y-4">
          {DATA.education.map((education, index) => (
            <ResumeCard key={index} title={education.title} role={education.role} start={education.start} end={education.end} logo={education.logo} url={education.url} />
          ))}
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12">
          <div className="flex flex-col justify-center items-center space-y-2 text-center mt-5">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Discover my latest work
            </h2>
            <p className="text-muted-foreground text-base md:text-xl">
              Over the years, I&apos;ve built a diverse range of projects. Here are some highlights from my journey as a developer.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {DATA.projects.map((project, index) => (
              <ProjectCard key={index} title={project.title} description={project.description} techs={project.techs} dates={project.dates} image={project.image} video={project.video} href={project.href} links={project.links} />
            ))}
          </div>
        </div>
      </section>
     <section id="contact">
      <div className="max-w-3xl mx-auto text-center space-y-2 py-6">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
          Contact Me
        </h2>
        <p className="text-muted-foreground text-base md:text-xl !mb-5">
          If you have any questions or would like to work together, feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a 
            href={`mailto:${DATA.email}`}
            className="inline-flex items-center justify-center gap-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-6 rounded-full transition-colors duration-300 text-lg"
          >
            <Email className="w-8 h-8" />
            {DATA.email}
          </a>
          <div className="flex items-center gap-4">
            <a
              href={DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/50 text-secondary-foreground transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={DATA.x}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/50 text-secondary-foreground transition-colors duration-300"
              aria-label="X Profile"
            >
              <X className="w-6 h-6" />
            </a>
            <a
              href={DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/50 text-secondary-foreground transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
    </main>
  </>);
}
