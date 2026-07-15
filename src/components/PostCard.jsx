import AuthorInfo from "./AuthorInfo";
import TagList from "./TagList";
import CommentPreview from "./CommentPreview";

export default function PostCard({ post, onTagClick }) {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <small>{post.date}</small>

      <p>{post.content}</p>

      <AuthorInfo author={post.author} />
      <TagList tags={post.tags} onTagClick={onTagClick} />
      <CommentPreview />
    </div>
  );
}
