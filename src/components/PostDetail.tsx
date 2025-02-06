import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../types/post';
import { getPost } from '../api/posts';
import styles from './PostDetail.module.css'; // 引入 CSS Module

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // 強制轉型
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const postId = parseInt(id, 10);
        const data = await getPost(postId);
        setPost(data);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className={styles.postDetailContainer}> {/* 使用 CSS Module 的樣式 */}
      <h2 className={styles.postTitle}>{post.title}</h2> {/* 使用 CSS Module 的樣式 */}
      <p className={styles.postAuthor}>Author: {post.author}</p> {/* 使用 CSS Module 的樣式 */}
      <p className={styles.postContent}>{post.content}</p> {/* 使用 CSS Module 的樣式 */}
    </div>
  );
};

export default PostDetail;