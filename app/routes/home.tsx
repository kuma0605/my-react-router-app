import { Link } from "react-router";
import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Welcome />
      
      {/* 添加错误测试链接 */}
      <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h2 className="text-xl font-bold text-yellow-800 mb-4">
          🧪 ErrorBoundary 测试
        </h2>
        <p className="text-yellow-700 mb-4">
          点击下面的链接来测试不同类型的错误处理：
        </p>
        <div className="space-y-2">
          <div>
            <Link 
              to="/error-test" 
              className="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              测试组件渲染错误
            </Link>
            <span className="ml-2 text-sm text-gray-600">
              (会抛出 JavaScript 错误)
            </span>
          </div>
          
          <div>
            <Link 
              to="/loader-error" 
              className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
            >
              测试 Loader 错误
            </Link>
            <span className="ml-2 text-sm text-gray-600">
              (会抛出 HTTP 500 错误)
            </span>
          </div>
          
                     <div>
             <Link 
               to="/normal-loader" 
               className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
             >
               测试正常 Loader
             </Link>
             <span className="ml-2 text-sm text-gray-600">
               (正常的数据加载)
             </span>
           </div>
           
           <div>
             <Link 
               to="/scroll-demo" 
               className="inline-block bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
             >
               测试滚动恢复
             </Link>
             <span className="ml-2 text-sm text-gray-600">
               (ScrollRestoration 功能)
             </span>
           </div>
           
           <div>
             <Link 
               to="/hydration-demo" 
               className="inline-block bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition"
             >
               理解 Hydration
             </Link>
             <span className="ml-2 text-sm text-gray-600">
               (Scripts 组件的作用)
             </span>
           </div>
           
           <div>
             <Link 
               to="/index-demo" 
               className="inline-block bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
             >
               理解 Index 路由
             </Link>
             <span className="ml-2 text-sm text-gray-600">
               (默认路由的概念)
             </span>
           </div>
          
          <div>
            <Link 
              to="/non-existent-page" 
              className="inline-block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
            >
              测试 404 错误
            </Link>
            <span className="ml-2 text-sm text-gray-600">
              (访问不存在的页面)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
