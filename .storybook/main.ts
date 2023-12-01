import type { StorybookConfig } from "@storybook/nextjs";
const path = require("path");

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  webpackFinal: async (config: any) => {
    // 👈 and add this here
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/constant": path.resolve(__dirname, "../constant/"),

      "@/app": path.resolve(__dirname, "../app/"),
    };
    return config;
  },

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
