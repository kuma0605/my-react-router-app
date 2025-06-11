import type { Route } from "./+types/demo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "演示页面" },
  ];
}

export default function Demo() {
  return (
    <div>
      <h1>这是演示页面</h1>
      <p>文件名：demo.tsx</p>
      <p>类型文件：+types/demo.ts</p>
    </div>
  );
} 