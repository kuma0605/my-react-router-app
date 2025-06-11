import { Link } from "react-router";
import type { Route } from "./+types/index-demo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Index 路由演示" },
  ];
}

export default function IndexDemo() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link to="/" className="text-blue-600 hover:underline">
          ← 返回首页
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Index 路由概念演示</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Index 路由解释 */}
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-green-800 mb-4">
            📍 什么是 Index 路由？
          </h2>
          <div className="space-y-3 text-green-700">
            <p>✅ <strong>默认子路由</strong> - 当访问父路径时显示</p>
            <p>✅ <strong>没有额外路径</strong> - 不添加 URL 段</p>
            <p>✅ <strong>相当于首页</strong> - 默认显示的内容</p>
            <p>✅ <strong>嵌套布局友好</strong> - 在父布局中渲染</p>
          </div>
        </div>

        {/* 普通路由对比 */}
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-blue-800 mb-4">
            📄 普通路由对比
          </h2>
          <div className="space-y-3 text-blue-700">
            <p>• <strong>有具体路径</strong> - 如 "/about", "/contact"</p>
            <p>• <strong>添加 URL 段</strong> - 扩展父路径</p>
            <p>• <strong>特定功能</strong> - 专门的页面内容</p>
            <p>• <strong>手动导航</strong> - 需要明确访问</p>
          </div>
        </div>
      </div>

      {/* 路由配置示例 */}
      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">🔧 路由配置示例</h2>
        
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm mb-4">
          <pre>{`// app/routes.ts
export default [
  index("routes/home.tsx"),           // URL: /
  route("about", "routes/about.tsx"), // URL: /about
  route("contact", "routes/contact.tsx"), // URL: /contact
  
  // 嵌套路由示例
  route("products", "routes/products/layout.tsx", [
    index("routes/products/index.tsx"),      // URL: /products
    route("new", "routes/products/new.tsx"), // URL: /products/new
    route(":id", "routes/products/show.tsx") // URL: /products/123
  ])
] satisfies RouteConfig;`}</pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded border">
            <h3 className="font-bold text-green-600 mb-2">访问根路径 "/"</h3>
            <p className="text-sm text-gray-700">
              会渲染 <code className="bg-gray-100 px-1 rounded">home.tsx</code> 
              （因为它是 index 路由）
            </p>
          </div>
          
          <div className="bg-white p-4 rounded border">
            <h3 className="font-bold text-blue-600 mb-2">访问 "/products"</h3>
            <p className="text-sm text-gray-700">
              会渲染 <code className="bg-gray-100 px-1 rounded">products/index.tsx</code> 
              （嵌套的 index 路由）
            </p>
          </div>
        </div>
      </div>

      {/* 实际 URL 映射 */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <h2 className="text-xl font-bold p-4 bg-gray-100 border-b">
          🗺️ 当前项目的 URL 映射
        </h2>
        <div className="p-4">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">URL</th>
                <th className="text-left py-2">路由类型</th>
                <th className="text-left py-2">文件</th>
                <th className="text-left py-2">说明</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-2 font-mono bg-green-50">/</td>
                <td className="py-2"><span className="bg-green-100 px-2 py-1 rounded text-green-800">index</span></td>
                <td className="py-2 font-mono">routes/home.tsx</td>
                <td className="py-2">默认首页 🏠</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-mono">/error-test</td>
                <td className="py-2"><span className="bg-blue-100 px-2 py-1 rounded text-blue-800">route</span></td>
                <td className="py-2 font-mono">routes/error-test.tsx</td>
                <td className="py-2">错误测试页面</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-mono">/loader-error</td>
                <td className="py-2"><span className="bg-blue-100 px-2 py-1 rounded text-blue-800">route</span></td>
                <td className="py-2 font-mono">routes/loader-error.tsx</td>
                <td className="py-2">Loader 错误测试</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-mono">/index-demo</td>
                <td className="py-2"><span className="bg-blue-100 px-2 py-1 rounded text-blue-800">route</span></td>
                <td className="py-2 font-mono">routes/index-demo.tsx</td>
                <td className="py-2">当前页面</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 嵌套路由示例 */}
      <div className="mt-6 bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-yellow-800 mb-3">
          🏗️ 嵌套路由中的 Index
        </h2>
        <p className="text-yellow-700 mb-3">
          在更复杂的应用中，你可能会有这样的结构：
        </p>
        
        <div className="bg-yellow-100 p-3 rounded font-mono text-sm text-yellow-800">
          <pre>{`/dashboard                    → DashboardLayout
  ├── /dashboard              → index("dashboard/home.tsx")
  ├── /dashboard/analytics    → route("analytics", "dashboard/analytics.tsx")
  └── /dashboard/settings     → route("settings", "dashboard/settings.tsx")`}</pre>
        </div>
        
        <p className="text-yellow-700 mt-3">
          当用户访问 <code>/dashboard</code> 时，会显示 dashboard 的 index 页面，
          同时保持 DashboardLayout 的布局结构。
        </p>
      </div>
    </div>
  );
} 