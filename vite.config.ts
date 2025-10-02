import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import fs from "fs";
import { defineConfig } from "vite";
import htmlPlugin from "vite-plugin-html-config";

dotenv.config();

const TITLE = "Emoji shop";

export default defineConfig({
  server: {
    ...(fs.existsSync(process.env.SSL_KEY || "") &&
    fs.existsSync(process.env.SSL_CRT || "")
      ? {
          https: {
            key: fs.readFileSync(process.env.SSL_KEY || ""),
            cert: fs.readFileSync(process.env.SSL_CRT || ""),
          },
        }
      : {}),
    port: process.env.PORT ? parseInt(process.env.PORT) : 8080,
  },
  plugins: [
    react(),
    tailwindcss(),
    htmlPlugin({
      title: TITLE,
    }),
  ],
});
