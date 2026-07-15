export default function TagList({ tags, onTagClick }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <span key={tag} className="tag" onClick={() => onTagClick(tag)}>
          #{tag}
        </span>
      ))}
    </div>
  );
}
