import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

const firstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>

      <div>First Post</div>
      <h2>
        <Link href="/"> Go back home</Link>
      </h2>
    </>
  );
};
export default firstPost;
