// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  integrations: [mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  })],
  vite: { plugins: [tailwindcss()], },
  markdown: {
    shikiConfig: {
      themes: {
        dark: 'gruvbox-dark-medium',
        light: 'gruvbox-light-medium'
      },
      wrap: true
    }
  }
});