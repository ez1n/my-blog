import Hero from "@/components/home/Hero/Hero";
import FeaturedPosts from "@/components/home/FeaturedPosts/FeaturedPosts";

import { getFeaturedPosts } from "@/lib/posts-util";

export default function HomePage({ posts }) {
  return (
    <>
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
