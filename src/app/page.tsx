import { DATA } from "@/data/portfolio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeButton } from "@/components/theme-button";
import Markdown from "react-markdown";

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
    </main>
  </>);
}
