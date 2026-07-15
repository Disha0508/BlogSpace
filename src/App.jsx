import { useState } from "react";
import { posts as initialPosts } from "./data/posts.js";
import PostList from "./components/PostList";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState(null);

  const allTags = [...new Set(initialPosts.flatMap((post) => post.tags))];

  const filteredPosts = initialPosts.filter((post) => {
    const matchesSearch = post.content
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesTag = activeTag ? post.tags.includes(activeTag) : true;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="container">
      <h1>BlogSpace</h1>

      <input
        type="text"
        placeholder="Поиск по содержанию..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {}
      <div
        className="tags-filter"
        style={{
          margin: "15px 0",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => setActiveTag(null)}
          className={activeTag === null ? "active" : ""}
        >
          Все
        </button>

        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={activeTag === tag ? "active" : ""}
          >
            #{tag}
          </button>
        ))}
      </div>

      {}
      <PostList posts={filteredPosts} onTagClick={(tag) => setActiveTag(tag)} />
    </div>
  );
}
