import { useState, useEffect } from "react";
import type { Route } from "./+types/hydration-demo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hydration 演示" },
  ];
}

export default function HydrationDemo() {
  const [count, setCount] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  // 检测 hydration 完成
  useEffect(() => {
    setIsHydrated(true);
    setCurrentTime(new Date().toLocaleTimeString());
    
    console.log("🌊 Hydration 完成！React 已接管 DOM");
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <a href="/" className="text-blue-600 hover:underline">
          ← 返回首页
        </a>
      </div>

      <h1 className="text-3xl font-bold mb-6">Hydration 过程演示</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* 服务端渲染的静态内容 */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-blue-800 mb-3">
            📄 服务端渲染的静态内容
          </h2>
          <div className="space-y-2 text-blue-700">
            <p>✅ 这些内容在服务端就生成了</p>
            <p>✅ 用户能立即看到</p>
            <p>✅ 有利于 SEO</p>
            <p>❌ 但还不能交互</p>
          </div>
        </div>

        {/* 客户端 hydration 后的交互内容 */}
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-green-800 mb-3">
            ⚡ Hydration 后的交互功能
          </h2>
          <div className="space-y-3">
            <p className="text-green-700">
              Hydration 状态: {isHydrated ? "✅ 已完成" : "⏳ 进行中"}
            </p>
            <p className="text-green-700">
              Hydration 时间: {currentTime || "等待中..."}
            </p>
            
            {/* 交互式计数器 */}
            <div className="bg-white p-3 rounded border">
              <p className="mb-2">交互式计数器:</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCount(count - 1)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  disabled={!isHydrated}
                >
                  -
                </button>
                <span className="font-bold text-lg min-w-[2rem] text-center">
                  {count}
                </span>
                <button
                  onClick={() => setCount(count + 1)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  disabled={!isHydrated}
                >
                  +
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {!isHydrated ? "⏳ 等待 hydration..." : "✅ 可以点击了！"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hydration 过程详解 */}
      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">🔍 Hydration 过程详解</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded border">
            <h3 className="font-bold text-blue-600 mb-2">1. 服务端渲染</h3>
            <ul className="text-sm space-y-1">
              <li>• React 在服务器运行</li>
              <li>• 生成完整的 HTML</li>
              <li>• 包含所有内容和样式</li>
              <li>• 发送给浏览器</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded border">
            <h3 className="font-bold text-orange-600 mb-2">2. 静态显示</h3>
            <ul className="text-sm space-y-1">
              <li>• 浏览器显示 HTML</li>
              <li>• 用户能看到内容</li>
              <li>• 但按钮不能点击</li>
              <li>• 没有 JavaScript 功能</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded border">
            <h3 className="font-bold text-green-600 mb-2">3. Hydration</h3>
            <ul className="text-sm space-y-1">
              <li>• Scripts 组件加载 JS</li>
              <li>• React 接管现有 DOM</li>
              <li>• 绑定事件处理器</li>
              <li>• 页面变成可交互</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
          <h3 className="font-bold text-yellow-800 mb-2">💡 关键理解</h3>
          <p className="text-yellow-700">
            Hydration 不是重新渲染页面，而是让 React 接管已经存在的 DOM 结构，
            并为其添加交互功能。这就像给一个雕塑注入生命一样！
          </p>
        </div>
      </div>

      {/* 技术细节 */}
      <div className="mt-6 bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
        <h3 className="text-white font-bold mb-2">🔧 技术实现（简化版）</h3>
        <pre>{`// 1. 服务端渲染
const html = ReactDOMServer.renderToString(<App />);

// 2. 发送 HTML 给浏览器
response.send(\`
  <html>
    <body>
      <div id="root">\${html}</div>
      <script src="/app.js"></script>  <!-- Scripts 组件 -->
    </body>
  </html>
\`);

// 3. 客户端 Hydration
ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <App />
);`}</pre>
      </div>
    </div>
  );
} 