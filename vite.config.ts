import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      // Explicitly disable Cloudflare mode
      serverModuleFormat: "esm",
      ignoredRouteFiles: ["**/.*"],
    }),
  ],
  server: {
    port: 5173,
  },
  build: {
    target: "esnext",
  },
  // Disable Cloudflare-specific features
  ssr: {
    noExternal: true,
  },
});
