import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <strong>The Rollup Glossary</strong>,
  project: {
    link: "https://github.com/taikoxyz/rollup-glossary",
  },
  docsRepositoryBase: "https://github.com/taikoxyz/rollup-glossary/edit/main/",
  footer: {
    component: null,
  },
  feedback: {
    content: null,
  },
  editLink: {
    text: "Edit this page ↗",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="The Rollup Glossary" />
      <meta property="og:description" content="A glossary for rollups" />
    </>
  ),
};

export default config;
