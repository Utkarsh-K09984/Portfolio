import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDXFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let mdxFiles: string[] = [];

  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      mdxFiles = [...mdxFiles, ...getMDXFiles(fullPath)];
    } else if (entry.isFile() && path.extname(entry.name) === ".mdx") {
      mdxFiles.push(fullPath);
    }
  });

  return mdxFiles;
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  // Find the MDX file that matches the slug
  const contentDir = path.join(process.cwd(), "content");
  const mdxFiles = getMDXFiles(contentDir);
  const filePath = mdxFiles.find((file) => {
    const fileSlug = path
      .basename(file, path.extname(file))
      .toLowerCase()
      .replace(/\s+/g, "-");
    return fileSlug === slug.toLowerCase();
  });

  if (!filePath) {
    throw new Error(`Post not found: ${slug}`);
  }

  const source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);

  return {
    source: content,
    metadata,
    slug,
  };
}

async function getAllPosts() {
  const contentDir = path.join(process.cwd(), "content");
  const mdxFiles = getMDXFiles(contentDir);

  return Promise.all(
    mdxFiles.map(async (file) => {
      const slug = path
        .basename(file, path.extname(file))
        .toLowerCase()
        .replace(/\s+/g, "-");
      const { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    }),
  );
}

export async function getBlogPosts() {
  return getAllPosts();
}
