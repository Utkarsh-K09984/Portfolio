import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "group flex flex-col overflow-hidden border",
        "hover:shadow-[0_0_20px_rgba(0,0,0.5,0.5)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
        "font-mono text-muted-foreground dark:text-muted-invert",
        "transition-all duration-300 ease-out h-full",
        "hover:-translate-y-1 hover:scale-[1.02]",

        className,
      )}
    >
      <Link href={href || "#"} className="block cursor-pointer overflow-hidden " target="_blank">
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top 
              transform transition-transform duration-300 group-hover:scale-110"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top 
              transform transition-transform duration-300 group-hover:scale-110"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base font-mono group-hover:text-white-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </CardTitle>
          <time className="font-mono text-xs opacity-70">{dates}</time>
          <div className="hidden  font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full  font-mono text-pretty text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex  font-mono flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px] transition-all duration-300
                  hover:scale-105 hover:shadow-md"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2  font-jetbrains">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge
                  key={idx}
                  className="flex gap-2 px-2 py-1 text-[10px]
                    transform transition-all duration-300
                    hover:scale-105 hover:shadow-lg
                    hover:bg-black-500 hover:text-white"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
