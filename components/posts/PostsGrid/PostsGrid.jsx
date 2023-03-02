import React from "react";
import styles from "./PostsGrid.module.css";

import PostItem from "../PostItem/PostItem";

export default function PostsGrid({ posts }) {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
