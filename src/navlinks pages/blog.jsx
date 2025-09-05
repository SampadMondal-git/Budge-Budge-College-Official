import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import myStyles from "./blog.module.css";
import axios from "axios";

export function Blog() {
  const apiUrl =
    "https://public-api.wordpress.com/wp/v2/sites/altarazadione9a65809afc-kvqpe.wordpress.com/posts";

  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${apiUrl}?_embed=1&per_page=100`);
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to load posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const title = post.title.rendered.toLowerCase();
    const content = post.excerpt.rendered.toLowerCase();
    const search = searchTerm.toLowerCase();
    return title.includes(search) || content.includes(search);
  });

  return (
    <div className={myStyles.container}>
      <h2 className={myStyles.section_title}>Latest Posts</h2>
      <div className={myStyles.searchContainer}>
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={myStyles.searchInput}
        />
        {searchTerm && (
          <button
            className={myStyles.clearButton}
            onClick={() => setSearchTerm('')}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      <div className={myStyles.otherlinks}>
        {isLoading ? (
          <div className={myStyles.loading}>Loading posts...</div>
        ) : filteredPosts.length === 0 ? (
          <div className={myStyles.noResults}>No posts found matching "{searchTerm}"</div>
        ) : (
          filteredPosts.map((post) => {
            let img =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

            if (!img) {
              const tempDiv = document.createElement("div");
              tempDiv.innerHTML = post.content.rendered;
              const firstImg = tempDiv.querySelector("img");
              img = firstImg ? firstImg.src : null;
            }

            return (
              <div key={post.id} className={myStyles.staffs}>
                {img && <img src={img} alt={post.title.rendered} style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }} />}
                <h5 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                <Link to={`/blog/${post.id}/${post.slug}`}>Read More &rarr;</Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
