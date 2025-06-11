import type { Route } from "./+types/children-demo";

// 演示组件：接收 children 参数
function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-2 border-blue-500 p-4 m-2 rounded">
      <h3 className="text-lg font-bold mb-2">Container 组件</h3>
      <div className="bg-gray-100 p-2 rounded">
        {children}
      </div>
    </div>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Children 类型演示" },
  ];
}

export default function ChildrenDemo() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">React.ReactNode 类型演示</h1>
      
      {/* 1. JSX 元素作为 children */}
      <Container>
        <p className="text-green-600">这是一个 JSX 元素</p>
      </Container>
      
      {/* 2. 字符串作为 children */}
      <Container>
        这是一个字符串
      </Container>
      
      {/* 3. 数字作为 children */}
      <Container>
        {42}
      </Container>
      
      {/* 4. 多个元素作为 children */}
      <Container>
        <h4>标题</h4>
        <p>段落文本</p>
        <button className="bg-blue-500 text-white px-3 py-1 rounded">按钮</button>
      </Container>
      
      {/* 5. 数组作为 children */}
      <Container>
        {['第一项', '第二项', '第三项'].map((item, index) => (
          <div key={index} className="mb-1">{item}</div>
        ))}
      </Container>
      
      {/* 6. 条件渲染（可能是 null） */}
      <Container>
        {true && <span className="text-red-500">条件为真时显示</span>}
        {false && <span>这不会显示</span>}
      </Container>
      
      <div className="mt-6">
        <a href="/" className="text-blue-600 hover:underline">返回首页</a>
      </div>
    </div>
  );
} 