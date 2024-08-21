import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    expressiveCode({
      themes: ["catppuccin-mocha"],
      plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
      defaultProps: {
        showLineNumbers: true,
        wrap: true,
      },
      frames: {},
      styleOverrides: {
        frames: {
          editorTabBarBackground: ({ theme }) =>
            theme.colors["editorGroupHeader.noTabsBackground"],
          editorTabBarBorderBottomColor: ({ theme }) =>
            theme.colors["editorGroup.border"] || "transparent",
          editorActiveTabIndicatorBottomColor: ({ theme }) =>
            theme.colors["editorGroup.border"],
        },
        uiFontFamily: "Martian Mono",
        codeFontFamily: "Martian Mono",
        uiFontSize: "0.75rem",
        codeFontSize: "0.75rem",
      },
    }),
    mdx(),
    sitemap(),
    react(),
    tailwind(),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { trust: true }]],
  },
});
