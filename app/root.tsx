import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "./tailwind.css?url"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesheet }];
}

export function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet"/> 
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
