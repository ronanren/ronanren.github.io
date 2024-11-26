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
import BlurFade from "@/lib/blur-fade";

const FADE_DELAY = 0.08;

export default function Page() {
  return (<>
    <div className="fixed top-0 right-0 p-4 z-10">
      <ThemeButton />
    </div>
    <main className="flex flex-col w-full space-y-10">
      <section id="hero">
        <div className="flex flex-row">
          <div className="flex flex-col space-y-1.5">
            <BlurFade delay={FADE_DELAY}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                Hi, I&apos;m {DATA.name.split(" ")[0]} 👋
              </h1>
              <p className="text-xl pr-2">{DATA.description}</p>
            </BlurFade>
          </div>
          <div>
            <BlurFade delay={FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage src={DATA.avatarUrl} alt={DATA.name} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">
            About
          </h2>
        </BlurFade>
        <BlurFade delay={FADE_DELAY * 4}>
          <Markdown className="prose dark:prose-invert text-pretty text-muted-foreground text-base max-w-full text-justify">{DATA.summary}</Markdown>
        </BlurFade>
      </section>
      <section id="photos">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {DATA.photos.map((photo, index) => (
            <BlurFade delay={FADE_DELAY * 6 + index * 0.05} key={photo}>
              <div className="aspect-[5/6] relative overflow-hidden rounded-lg">
                <Image
                  src={photo}
                  alt={`${DATA.name} - Photo ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="work">
        <BlurFade delay={FADE_DELAY * 8}>
          <h2 className="text-xl font-bold mb-4">
            Work Experience
          </h2>
        </BlurFade>
        <div className="flex flex-col gap-y-4">
          {DATA.works.map((work, index) => (
            <BlurFade delay={FADE_DELAY * 10 + index * 0.05} key={index}>
              <ResumeCard key={index} title={work.title} role={work.role} start={work.start} end={work.end} logo={work.logo} description={work.description} />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <BlurFade delay={FADE_DELAY * 12}>
          <h2 className="text-xl font-bold mb-4">
            Education
          </h2>
        </BlurFade>
        <div className="flex flex-col gap-y-4">
          {DATA.education.map((education, index) => (
            <BlurFade delay={FADE_DELAY * 14 + index * 0.05} key={index}>
              <ResumeCard key={index} title={education.title} role={education.role} start={education.start} end={education.end} logo={education.logo} url={education.url} />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12">
          <div className="flex flex-col justify-center items-center space-y-2 text-center mt-5">
            <BlurFade delay={FADE_DELAY * 16}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Discover my latest work
              </h2>
              <p className="text-muted-foreground text-base md:text-xl">
                Over the years, I&apos;ve built a diverse range of projects. Here are some highlights from my journey as a developer.
              </p>
            </BlurFade>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {DATA.projects.map((project, index) => (
              <BlurFade delay={FADE_DELAY * 18 + index * 0.05} key={index}>
                <ProjectCard key={index} title={project.title} description={project.description} techs={project.techs} dates={project.dates} image={project.image} video={project.video} href={project.href} links={project.links} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
     <section id="contact">
      <div className="max-w-3xl mx-auto text-center space-y-2 py-6">
        <BlurFade delay={FADE_DELAY * 20}>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
            Contact Me
          </h2>
          <p className="text-muted-foreground text-base md:text-xl !mb-5">
            If you have any questions or would like to work together, feel free to reach out.
          </p>
        </BlurFade>
        <BlurFade delay={FADE_DELAY * 22}>
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
        </BlurFade>
      </div>
    </section>
    </main>
  </>);
}
