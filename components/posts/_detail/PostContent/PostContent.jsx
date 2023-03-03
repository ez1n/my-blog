import React from "react";
import styles from "./PostContent.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import PostHeader from "../PostHeader/PostHeader";

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
