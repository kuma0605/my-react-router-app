import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("error-test", "routes/error-test.tsx"),
  route("loader-error", "routes/loader-error.tsx"),
  route("normal-loader", "routes/normal-loader.tsx"),
  route("children-demo", "routes/children-demo.tsx"),
  route("demo", "routes/demo.tsx"),
] satisfies RouteConfig;
