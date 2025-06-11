import { Link } from "react-router";
import type { Route } from "./+types/scroll-demo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "滚动恢复演示" },
  ];
}

export default function ScrollDemo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="p-6">
      {/* 固定定位的返回按钮 */}
      <Link 
        to="/" 
        className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        ← 返回首页
      </Link>
      
      {/* 固定定位的回到顶部按钮 */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
        title="回到顶部"
      >
        ↑
      </button>
      
      <h1 className="text-3xl font-bold mb-6">滚动恢复功能演示</h1>
      
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-bold text-yellow-800 mb-2">
          🧪 测试步骤：
        </h2>
        <ol className="list-decimal list-inside space-y-1 text-yellow-700">
          <li>向下滚动到页面中间位置</li>
          <li>点击右上角的"返回首页"按钮（固定定位，随时可见）</li>
          <li>在首页点击浏览器的"后退"按钮</li>
          <li>观察是否恢复到之前的滚动位置</li>
        </ol>
        <div className="mt-3 p-2 bg-yellow-100 rounded text-sm text-yellow-800">
          💡 <strong>提示：</strong>右下角的绿色按钮可以快速回到顶部（平滑滚动）
        </div>
      </div>

      {/* 创建很长的内容来测试滚动 */}
      {Array.from({ length: 50 }, (_, i) => (
        <div key={i} className="mb-4 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-semibold mb-2">内容块 #{i + 1}</h3>
          <p className="text-gray-700">
            这是第 {i + 1} 个内容块。ScrollRestoration 组件会记住你在这个页面的滚动位置。
            当你导航到其他页面后再返回时，会自动恢复到你离开时的滚动位置。
          </p>
          <p className="text-sm text-gray-500 mt-2">
            滚动位置: {i * 100}px 附近
          </p>
        </div>
      ))}
      
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-lg font-bold text-blue-800 mb-2">
          📝 ScrollRestoration 的工作原理
        </h3>
        <ul className="list-disc list-inside space-y-1 text-blue-700">
          <li>自动保存每个页面的滚动位置</li>
          <li>与浏览器历史记录集成</li>
          <li>支持前进/后退按钮</li>
          <li>新页面自动滚动到顶部</li>
          <li>返回页面恢复滚动位置</li>
        </ul>
      </div>
    </div>
  );
} 