import { getFeaturedPosts } from "@/lib/posts-util";

import Head from "next/head";
import Hero from "@/components/home/Hero/Hero";
import FeaturedPosts from "@/components/home/FeaturedPosts/FeaturedPosts";

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>ez1ns&apos; Blog</title>
        <meta
          name='description'
          content='I post about programming and web development'
        />
      </Head>

      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
