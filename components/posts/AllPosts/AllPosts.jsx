import React from "react";
import styles from "./AllPosts.module.css";

import PostsGrid from "../PostsGrid/PostsGrid";

export default function AllPosts({ posts }) {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>

      <PostsGrid posts={posts} />
    </section>
  );
}
