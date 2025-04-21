import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "src/web/routes",
      generatedRouteTree: "src/web/routeTree.gen.ts",
    }),
    react(),
    cloudflare(),
    tailwindcss(),
  ],
  preview: {
    port: 5173,
  },
});
