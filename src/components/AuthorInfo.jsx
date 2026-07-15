export default function AuthorInfo({ author }) {
  return (
    <div className="author">
      <strong>{author.name}</strong>
      <p>{author.bio}</p>
    </div>
  );
}
