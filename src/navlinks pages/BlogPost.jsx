import axios from "axios";
import myStyles from "./blog.module.css";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export function BlogPost() {
  const { id } = useParams();
  const apiUrl =
    "https://public-api.wordpress.com/wp/v2/sites/altarazadione9a65809afc-kvqpe.wordpress.com/posts";

  const [post, setPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  const [prevPost, setPrevPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const currentResponse = await axios.get(`${apiUrl}/${id}?_embed=1`);
        setPost(currentResponse.data);

        const allPostsResponse = await axios.get(`${apiUrl}?per_page=100&orderby=date&order=desc`);
        const posts = allPostsResponse.data;
        
        const currentIndex = posts.findIndex(p => p.id.toString() === id);
        
        setPrevPost(null);
        setNextPost(null);

        if (currentIndex !== -1) {
          if (currentIndex > 0) {
            setPrevPost(posts[currentIndex - 1]);
          }
          if (currentIndex < posts.length - 1) {
            setNextPost(posts[currentIndex + 1]);
          }
        }
      } catch (error) {
        console.error("Failed to load posts:", error);
      }
    };
    fetchPosts();
  }, [id]);

  if (!post) return <div className={myStyles.loading}>Loading posts...</div>;

  const img = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  return (
    <div className={myStyles.container}>
      {img && <img src={img} alt={post.title.rendered} />}
      <h2
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        className={myStyles.section_title}
      />
      <div
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        className={myStyles.staffs}
      />
      <div className={myStyles.blogNavigation}>
        <Link to="/blog" className={myStyles.backLink}>&larr; Back to Posts</Link>
        {(prevPost || nextPost) && (
          <div className={myStyles.navButtons}>
            {prevPost && (
              <Link
                to={`/blog/${prevPost.id}/${prevPost.slug || ''}`}
                className={myStyles.backLink}
                title={prevPost.title?.rendered || 'Previous Post'}
              >
                &larr; Previous
              </Link>
            )}
            {nextPost && (
              <Link
                to={`/blog/${nextPost.id}/${nextPost.slug || ''}`}
                className={myStyles.backLink}
                title={nextPost.title?.rendered || 'Next Post'}
              >
                Next &rarr;
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
