import { DATA } from "@/data/portfolio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeButton } from "@/components/theme-button";
import Markdown from "react-markdown";
import Image from "next/image";
import { ResumeCard } from "@/components/resume-card";

export default function Page() {
  return (<>
    <div className="absolute top-0 right-0 p-4">
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
    </main>
  </>);
}
