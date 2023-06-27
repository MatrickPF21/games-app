import Header from "@/components/Header";
import Toaster from "@/components/ui/toaster";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Toaster/>
      </body>
    </Html>
  );
}
