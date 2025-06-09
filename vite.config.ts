import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    hmr: {
      overlay: true, // 显示错误覆盖层
    },
    host: true, // 允许外部访问
  },
});
