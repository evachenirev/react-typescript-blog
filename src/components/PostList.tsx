import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types/post';
import { getPosts } from '../api/posts';
import styles from './PostList.module.css';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <h2>Post List</h2>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <Link to={`/posts/${post.id}`} className={styles.postLink}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;