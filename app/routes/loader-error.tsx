import type { Route } from "./+types/loader-error";

export async function loader({}: Route.LoaderArgs) {
  // 模拟一个 loader 错误（比如 API 调用失败）
  throw new Response("数据加载失败", { 
    status: 500, 
    statusText: "Internal Server Error" 
  });
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Loader 错误测试" },
    { name: "description", content: "测试 Loader 错误的页面" },
  ];
}

export default function LoaderError({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1>这个组件永远不会被渲染，因为 loader 会抛出错误</h1>
      <p>数据: {JSON.stringify(loaderData)}</p>
    </div>
  );
} 