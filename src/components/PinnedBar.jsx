export default function PinnedBar({ message }) {
  if (!message) {
    return null;
  }

  return (
    <div className="pinned-bar">
      <span className="label">Pinned</span>
      <span className="pinned-text">
        {message.author}: {message.text}
      </span>
    </div>
  );
}
