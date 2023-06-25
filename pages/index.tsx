import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Sumeet Shetty | Technical Architect</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Sumeet Shetty | Technical Architect" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Sumeet Shetty | Technical Architect" />
        <meta name="description" content="Hey! I'm Sumeet Shetty, and I'm an IT architect & a senior developer." />
      </Head>
      <Home />
    </>
  );
}
