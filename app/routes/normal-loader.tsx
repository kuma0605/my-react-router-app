import type { Route } from "./+types/normal-loader";

export async function loader({}: Route.LoaderArgs) {
  console.log("执行 normal-loader 的 loader");
  // 模拟正常的数据加载
  await new Promise(resolve => setTimeout(resolve, 100));
  return { message: "数据加载成功", timestamp: Date.now() };
}

export function meta({}: Route.MetaArgs) {
  console.log("执行 normal-loader 的 meta");
  return [
    { title: "正常 Loader 测试" },
    { name: "description", content: "测试正常 Loader 的页面" },
  ];
}

export default function NormalLoader({ loaderData }: Route.ComponentProps) {
  console.log("执行 NormalLoader 组件", loaderData);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">正常 Loader 页面</h1>
      <p className="mb-2">消息: {loaderData.message}</p>
      <p className="mb-4">时间戳: {loaderData.timestamp}</p>
      <a href="/" className="text-blue-600 hover:underline">返回首页</a>
    </div>
  );
} 