import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "c",
  "c++",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "nginx",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "neovim",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}`,
  );

  return (
    <div className=" flex items-center justify-center">
      <IconCloud images={images} />
    </div>
  );
}
