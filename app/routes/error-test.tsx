import type { Route } from "./+types/error-test";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "错误测试页面" },
    { name: "description", content: "测试 ErrorBoundary 的页面" },
  ];
}

export default function ErrorTest() {
  // 故意抛出一个错误来测试 ErrorBoundary
  throw new Error("这是一个测试错误！用于演示 ErrorBoundary 的工作原理。");
  
  return (
    <div>
      <h1>这个组件永远不会被渲染</h1>
    </div>
  );
} 