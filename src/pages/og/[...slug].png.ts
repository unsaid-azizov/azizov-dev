import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFileSync } from "fs";
import { join } from "path";

const fontBold = readFileSync(
  join(process.cwd(), "node_modules/@fontsource/inter/files/inter-latin-700-normal.woff")
);
const fontRegular = readFileSync(
  join(process.cwd(), "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff")
);
const playfairBold = readFileSync(
  join(process.cwd(), "node_modules/@fontsource/playfair-display/files/playfair-display-latin-700-normal.woff")
);

const categoryColors: Record<string, string> = {
  hackathon: "#c9a87c",
  award: "#f59e0b",
  talk: "#0ea5e9",
  publication: "#10b981",
  article: "#8b5cf6",
};

const categoryLabels: Record<string, string> = {
  hackathon: "HACKATHON",
  award: "AWARD",
  talk: "TALK",
  publication: "PUBLICATION",
  article: "ARTICLE",
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as any;
  const { title, category, tags, date } = post.data;

  const color = categoryColors[category] || "#c9a87c";
  const label = categoryLabels[category] || "POST";
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          backgroundColor: "#0e0e0e",
          fontFamily: "Inter",
        },
        children: [
          // Top: category badge + date
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "16px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      padding: "6px 16px",
                      borderRadius: "20px",
                      border: `1px solid ${color}`,
                      color: color,
                      fontSize: "14px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                    },
                    children: label,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      color: "#78716c",
                      fontSize: "16px",
                    },
                    children: formattedDate,
                  },
                },
              ],
            },
          },
          // Middle: title
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                flex: 1,
                justifyContent: "center",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: title.length > 80 ? "64px" : title.length > 50 ? "78px" : "92px",
                      fontWeight: 700,
                      fontFamily: "Playfair Display",
                      color: "#e8e0d8",
                      lineHeight: 1.1,
                    },
                    children: title,
                  },
                },
              ],
            },
          },
          // Bottom: tags + author
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              },
              children: [
                // Tags
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      gap: "8px",
                      flexWrap: "wrap",
                    },
                    children: tags.slice(0, 4).map((tag: string) => ({
                      type: "div",
                      props: {
                        style: {
                          padding: "4px 12px",
                          borderRadius: "12px",
                          border: "1px solid #333",
                          color: "#78716c",
                          fontSize: "13px",
                        },
                        children: tag,
                      },
                    })),
                  },
                },
                // Author
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "2px",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            color: "#e8e0d8",
                            fontSize: "18px",
                            fontWeight: 700,
                          },
                          children: "Said Azizov",
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            color: color,
                            fontSize: "14px",
                            fontWeight: 400,
                          },
                          children: "azizov.dev",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontBold,
          weight: 700,
          style: "normal" as const,
        },
        {
          name: "Inter",
          data: fontRegular,
          weight: 400,
          style: "normal" as const,
        },
        {
          name: "Playfair Display",
          data: playfairBold,
          weight: 700,
          style: "normal" as const,
        },
      ],
    }
  );

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
  });

  return new Response(resvg.render().asPng(), {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
