import PostCard from "./PostCard";

export default function PostList({ posts, onTagClick }) {
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onTagClick={onTagClick} />
      ))}
    </div>
  );
}
