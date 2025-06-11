import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto max-w-4xl">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <div className="text-red-500 text-2xl mr-3">⚠️</div>
          <h1 className="text-2xl font-bold text-red-800">{message}</h1>
        </div>
        
        <p className="text-red-700 mb-4 text-lg">{details}</p>
        
        {stack && (
          <details className="mt-4">
            <summary className="cursor-pointer text-red-600 font-medium mb-2">
              🔍 查看错误详情 (开发模式)
            </summary>
            <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
              <code>{stack}</code>
            </pre>
          </details>
        )}
        
        <div className="mt-6 pt-4 border-t border-red-200">
          <a 
            href="/" 
            className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            🏠 返回首页
          </a>
        </div>
      </div>
    </main>
  );
}
