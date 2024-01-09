import { config as sharedConfig } from "../wdio.conf.ts";

export const config = {
  ...sharedConfig,
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  specs: ["../test/specs/**/*.ts"],
};
