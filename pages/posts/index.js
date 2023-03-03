import { getAllPosts } from "@/lib/posts-util";

import Head from "next/head";
import AllPosts from "@/components/posts/AllPosts/AllPosts";

export default function AllPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>All My Posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>

      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
