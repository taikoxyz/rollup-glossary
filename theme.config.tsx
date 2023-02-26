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
};

export default config;
