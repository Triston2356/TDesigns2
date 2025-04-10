import { Html, Head, Main, NextScript } from "next/document";

<meta name="robots" content="index, follow" />

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
