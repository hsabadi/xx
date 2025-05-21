import React, { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
}

const WordPressPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Replace with your actual WordPress site URL
        const response = await fetch('https://your-wordpress-site.com/wp-json/wp/v2/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>تحميل المقالات...</div>;
  }

  if (error) {
    return <div>حدث خطأ: {error}</div>;
  }

  return (
    <div>
      <h1>مقالات من WordPress</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
  );
};

export default WordPressPosts;
