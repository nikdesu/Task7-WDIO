import { config as sharedConfig } from "../wdio.conf.ts";

export const config = {
  ...sharedConfig,
  capabilities: [
    {
      browserName: "firefox",
    },
  ],
  specs: ["../test/specs/**/*.ts"],
};
