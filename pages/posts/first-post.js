import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

const firstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <div>First Post</div>
      <h2>
        <Link href="/"> Go back home</Link>
      </h2>
    </Layout>
  );
};
export default firstPost;
